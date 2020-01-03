import React, { Component, createContext } from 'react'
import {
    postData, fetchAuthor,
    loadArticles, loadCategories, loadTags, loadArticlesByTagID, loadArticlesByCategoryID,
    findTags, API_ENDPOINTS,getArticleById
} from '../article'
import axios from 'axios';
import { addData, displayPubList,clearStore, deleteITem } from "../db";
import { offline } from "react-detect-offline";
import {Redirect, Route} from "react-router-dom";
import App from "../App";
export const BlogContext = createContext();

class ArticleContextProvider extends Component {
    state = {
        sortByCategory: false,
        filterCriteria: {},
        articles: [],
        authError:false,
        article: {},
        loading: true,
        categories: [],
        tags: [],
        filteredArticles: [],
        articleLength: 0,
        username: 'israeledet',
        password: "123media",
        user: { username: '' },
        loggedIN: false
    }
    article = {

    }
    componentDidMount() {
        //if the username is not set then check the local storage for the user


        this.getLoggedUser();
        loadCategories().then(res => res.json())
            .then(response => {

                response.response.data.forEach(function (cat) {
                    addData('categories', cat);
                });
                if (response.response.code === 200) {
                    this.setState({
                        categories: response.response.data,
                    });
                }

            }).catch(err => {
                console.log("Error from failed connection or otherwise, search fro data on IndexDB");
                displayPubList('categories').then(response => {
                    this.setState({
                        categories: response,
                        loading: false
                    })
                })
            });;

        loadTags().then(res => res.json())
            .then(response => {
                response.response.data.forEach(function (tag) {
                    addData('tags', tag);
                });//
                if (response.response.code === 200) {
                    this.setState({
                        tags: response.response.data,
                    });
                }

            }).catch(err => {
                console.log("Error from failed connection or otherwise, search fro data on IndexDB");
                displayPubList('tags').then(response => {
                    this.setState({
                        tags: response,
                        loading: false
                    })
                })
            });
        //     
        this.fetchArticle();



    }
    onReset = (event) => {
        event.preventDefault();
        //Clear the data in kthe single article state as this will let us see the artlcle list
        if (event.target.id === "reset") {
            this.setState({
                loading: true
            });
            this.fetchArticle()
        }
        this.setState({
            article: {},
            filterCriteria: {}
        })

    };
    searchChange = (event) => {
        // event.preventDefault();

        if (event.target.value) {
            const data = this.state.articles.filter(article => {
                return article.title.toLowerCase().includes(event.target.value.toLowerCase())
            });
            this.setState({
                sortByCategory: false,
                filterCriteria: '',
                filteredArticles: data,
            });
            console.log(data);


        } else { // if search has no value then reset filtered to empty to articles show
            this.setState({
                sortByCategory: false,
                filterCriteria: '',
                filteredArticles: [],
            });
        }
    };

    viewArticle = (event) => {
        event.preventDefault();
        if (event.target.id) {
            const data = this.state.articles.filter(article => {
                return article.id === event.target.id
            });
            this.setState({
                sortByCategory: false,
                filterCriteria: '',
                article: data,
            });
        }
    };

    onCategoryChange = (event) => {

        event.preventDefault();
        //this would make an api call and return result to the state
        var id = event.target.value || event.target.id;
        if (id) {
            this.setState({
                loading: true
            });

            loadArticlesByCategoryID(id).then(res => res.json())
                .then(response => {
                    this.setState({
                        sortByCategory: false,
                        filterCriteria: { 'id': id, title: response.response.data.category, type: 'Category' },
                        articles: response.response.data.articles,
                        loading: false
                    });
                });
        } else {
            this.fetchArticle();
        }
    };
    /**
     * Search for articles by tags
     */
    tagChange = (event) => {
        event.preventDefault();
        var id = event.target.value || event.target.id

        if (id) {
            console.log(id)
            this.setState({
                loading: true
            });

            loadArticlesByTagID(id).then(res => res.json())
                .then(response => {
                    this.setState({
                        sortByCategory: false,
                        filterCriteria: { 'id': id, title: response.response.data.tag, type: 'Tag' },
                        articles: response.response.data.articles,
                        loading: false
                    });
                }).catch(err => {
                    //search the local database for articles with matching tags
                });
        } else {
            this.fetchArticle();
        }
    };
    loginUser = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        fetchAuthor(this.state.username, this.state.password)
        .then(res => res.json())
        .then(response => {
            let code = response.code !== undefined  ? response.code : response.user.code;
            this.setState({
               loading:false
            });
            if (code === 200) {
                let user = response.user.data;
                console.log(user)
                clearStore('users')
                addData('users', user);
                this.getLoggedUser();
                alert("Welcome "+user.username);
                this.setState({
                    authError: false,
                    loggedIN: true,
                });
                // eslint-disable-next-line no-unused-expressions
                
            }else{
                this.setState({
                    authError: true,
                    loading:false
                });
                alert(`Error occured ${response.message} - ${code}`);
            }
        }).catch(err => alert("An error occured "+err))
        // displayPubList('users').then(response => {
        //     response.get
        // });
        if(this.state.loggedIN){
            return <Redirect to="/"/>
        }
    }
    logout = () => {
        clearStore('users');
        deleteITem('users',this.state.user.id)
        this.setState({
            loggedIN: false
        });
    }
    //If user is logged in set the user in the state
    getLoggedUser = () => {

        displayPubList('users').then(response => {
            console.log(response.length );
            if(response.length > 0){
            this.setState({
                user: response[0],
                loggedIN:true
            })
            }
        });

    }
    registerAuthor = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.getAll())
        postData(data);
        //STEP 1: First try to send user to the server for resgistration and if that fails save the user offline

        //STEP 2: when you get a change to go online, send the users infor and then updated sync value to true
        // let user = {
        //     "id": 1,
        //     "username": "ruth",
        //     "first_name": "Life",
        //     "last_name": "Coco",
        //     "article_count": 4,
        //     "created": "2019-07-04T00:00:00+00:00",
        //     "bio": "A lifestyle blogger",
        //     "password": "$2y$10$MC6Eqb6yJs6KqZAZBqrWS.J3jfOM1LQR8tl3wgiMdyIoa4n.W.9Da",
        //     "canWrite": true,
        //     "image": "Skole-b8101.jpg",
        //     "email": "cocobasseyruth@gmail.com",
        //     "sync":false
        // }
        // addData('users', user);
    }
    writeArticle = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        data.delete('participants[]');
        data.delete('text_participants[]')
        var values = [];
        var fields = document.getElementsByName("text_participants[]");
        for (var i = 0; i < fields.length; i++) {
            values.push(fields[i].value);
        }
        data.append('tags', values)

        this.setState({
            loading: true
        })
        axios({
            method: 'post', //you can set what request you want to be
            url: window.location.host.includes('localhost') ?
            API_ENDPOINTS.dev.ADD_ARTICLE : API_ENDPOINTS.production.ADD_ARTICLE,
            data: data,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization, X-Requested-With',
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:3000',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
                'Authorization': 'Basic '+this.state.user.public_key,
                'Access-Control-Request-Headers': 'access-control-allow-credentials,access-control-allow-headers,access-control-allow-origin,cache-control,content-type,pragma'
            }
          }).then(res => {
              this.setState({
                  loading:false
              })
              console.log(res)
          })

    }

    changeUserValues = (event) => {

        switch (event.target.id) {
            case 'username':
                this.setState({
                    username: event.target.value
                })
                break;
            case 'password':
                this.setState({
                    password: event.target.value
                })
                break;
            default:

        }
        

    }

    fetchArticle = (page = 0) => {
        var data;
        if(page === 0){
             data = loadArticles()
        }else{
            data = loadArticles(page);
        }
            data
            .then(resp => resp.json())
            .then(res => {
                res.response.data.forEach(function (article) {
                    addData('articles', article);
                });
                this.setState({
                    articles: res.response.data,
                    loading: false,
                    articleLength: res.response.length
                });
            }).catch(err => {
                console.log("Error from failed connection or otherwise, search fro data on IndexDB");
                displayPubList('articles').then(response => {
                    this.setState({
                        articles: response,
                        loading: false,
                        articleLength: 0
                    });
                });
            });
    }

    viewArticleBySlug = (slug) => {
        getArticleById(slug)
        .then(response=>response.json())
        .then(res=>{
            console.log(res.response.data)
            this.setState({
                article: res.response.data,
                loading: false,
            });
        })
        .catch(err => {
            console.log("Error from failed connection or otherwise, search fro data on IndexDB");
        });
    }
    render() {
        return (
            <BlogContext.Provider value={{
                ...this.state, 
                onCategoryChange: this.onCategoryChange, 
                tagChange: this.tagChange,
                viewArticle: this.viewArticle, 
                onReset: this.onReset, 
                searchChange: this.searchChange,
                registerAuthor: this.registerAuthor,
                changeUserValues: this.changeUserValues,
                login: this.loginUser,
                addArticle: this.writeArticle,
                logout:this.logout,
                fetchArticle: this.fetchArticle,
                viewArticleBySlug: this.viewArticleBySlug
            }}>
                {this.props.children}
            </BlogContext.Provider>
        );
    }
}


export default ArticleContextProvider;
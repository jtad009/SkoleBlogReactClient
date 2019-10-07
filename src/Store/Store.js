import React, { Component, createContext } from 'react'
import {

    loadArticles, loadCategories, loadTags, loadArticlesByTagID, loadArticlesByCategoryID,

} from '../article'

import { addData, displayPubList } from "../db";
export const BlogContext = createContext();

class ArticleContextProvider extends Component {
    state = {
        sortByCategory: false,
        filterCriteria: {},
        articles: [],
        article: {},
        loading: true,
        categories: [],
        tags: [],
        filteredArticles: [],
        articleLength:0
    }
    componentDidMount() {
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
        if(event.target.id === "reset"){
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
        if(id){
        this.setState({
            loading: true
        });

        loadArticlesByCategoryID(id).then(res => res.json())
            .then(response => {
                this.setState({
                    sortByCategory: false,
                    filterCriteria: {'id':id,title:response.response.data.category, type:'Category'},
                    articles: response.response.data.articles,
                    loading: false
                });
            });
        }else{
            this.fetchArticle();  
        }
    };

    tagChange = (event) => {

        event.preventDefault();
        var id = event.target.value || event.target.id
        if(id){
            this.setState({
            loading: true
        });

        loadArticlesByTagID(id).then(res => res.json())
            .then(response => {
                this.setState({
                    sortByCategory: false,
                    filterCriteria: {'id':id,title: response.response.data.tag,type:'Tag'},
                    articles: response.response.data.articles,
                    loading: false
                });
            }).catch(err => {
                
            });
        }else{
            this.fetchArticle();
        }
    };

     fetchArticle = () => {
        loadArticles()
            .then(resp => resp.json())
            .then(res => {
                res.response.data.forEach(function (article) {
                    addData('articles', article);
                });
                this.setState({
                    articles: res.response.data,
                    loading: false,
                    articleLength:res.response.length
                });
            }).catch(err => {
                console.log("Error from failed connection or otherwise, search fro data on IndexDB");
                displayPubList('articles').then(response => {
                    this.setState({
                        articles: response,
                        loading: false,
                        articleLength:0
                    });
                });
            });
    }

    render() {
        return (
            <BlogContext.Provider value={{ ...this.state, onCategoryChange: this.onCategoryChange, tagChange: this.tagChange, viewArticle: this.viewArticle, onReset: this.onReset, searchChange: this.searchChange }}>
                {this.props.children}
            </BlogContext.Provider>
        );
    }
}


export default ArticleContextProvider;
import React, { Component, createContext } from 'react'
import {
   
    loadArticles,loadCategories,loadTags,
    getArticleById, API_ENDPOINTS
} from '../article'
import {Redirect } from "react-router-dom";
export const BlogContext = createContext();

class ArticleContextProvider extends Component {
    state = {
        sortByCategory: false,
        filterCriteria: '',
        articles: [],
        article: {},
        loading: true,
        categories:[],
        tags:[],
        filteredArticles:[]
    }
    componentDidMount() {
        loadCategories().then(res => res.json())
        .then(response => {
            console.log(response.response)
            if(response.response.statusCode === 200){
                this.setState({
                    categories: response.response.data,
               });
            }
            
        }) ; 

        loadTags().then(res => res.json())
        .then(response => {
            console.log(response.response)
            if(response.response.statusCode === 200){
                this.setState({
                    tags: response.response.data,
               });
            }
            
        }) ;

        loadArticles()
        .then(resp => resp.json())
        .then(res=>{
            this.setState({
                    articles: res.response.data,
                    loading: false
                });
             
           
        }).catch(err => {
            console.log(err)
            // this.setState({
            //     articles: [],
            //     loading:false
            // })
        });

        

    }
    onReset = (event) => {
        // event.preventDefault();
        // var articleList = loadArticles().then(res=>{
        //     return res
        //      });   
        return <Redirect to='/' />
        
    };

    viewArticle = (event) => {
        event.preventDefault();

        if (event.target.id) {
            const data = this.state.articles.filter(article=>{
                return article.id === event.target.id
            });
            this.setState({
                        sortByCategory: false,
                        filterCriteria: '',
                        article: data,
            });
            console.log(data);
          

        }
    };

    onCategoryChange = (event) => {

        event.preventDefault();
        //this would make an api call and return result to the state
        var id = event.target.value || event.target.id;
        
        if (id.length === 0 || id === undefined) {
            loadArticles()
            .then(resp => resp.json())
            .then(res=>{
                this.setState({
                        articles: res.response.data,
                        loading: false
                    });
                 
               
            });
        } else {
            var filtered = this.state.articles.filter(articles => {
                return parseInt(articles.category_id) === parseInt(id)
            });

            this.setState({
                sortByCategory: true,
                filterCriteria: id,
                filteredArticles: filtered,
                
            });
        }

    };

    tagChange = (event) => {

        event.preventDefault();
        var id = event.target.value || event.target.id
        // if (id.length === 0) {
        //     this.setState({
        //         sortByCategory: false,
        //         filterCriteria: '',
        //         articles: articles,
        //         article: {}
        //     });
        // } else {
        //     var filtered = tagIDWithArticles[0].articles.filter(articles => {
        //         return parseInt(articles.pivot.tag_id) === parseInt(id)
        //     });
        //     this.setState({
        //         sortByCategory: false,
        //         filterCriteria: id,
        //         articles: filtered,
        //         article: {}
        //     });
        // }
    };
    render() {
        return (
            <BlogContext.Provider value={{ ...this.state, onCategoryChange: this.onCategoryChange, tagChange: this.tagChange, viewArticle: this.viewArticle, onReset: this.onReset }}>
                {this.props.children}
            </BlogContext.Provider>
        );
    }
}


export default ArticleContextProvider;
import React, { Component, createContext } from 'react'
import {
    articles, tags, categories, tagIDWithArticles, filterByCategory,
    loadArticles,
    getArticleById
} from '../article'
export const BlogContext = createContext();
class ArticleContextProvider extends Component {
    state = {
        sortByCategory: false,
        filterCriteria: '',
        articles: [],
        article: {},
        loading: true,

    }
    componentDidMount() {
        loadArticles()
        .then(resp => resp.json())
        .then(res=>{
            console.log(res.response.data)
            this.setState({
                articles: res.response.data,
                loading: false
            })
        });
            


    }
    onReset = (event) => {
        event.preventDefault();
        var articleList = loadArticles().then(res=>{
            return res
             });   
             this.setState({
                article: {},
                articles:articleList
            });
        
    };

    viewArticle = (event) => {
        event.preventDefault();

        if (event.target.id) {
           // const articles = loadArticles()
           var articleList = loadArticles().then(res=>{
            return res
             });   
            
            //get article with id supplied
            getArticleById(event.target.id.toLowerCase()).
            then((response) => {

                this.setState({
                    sortByCategory: false,
                    filterCriteria: '',
                    article: response.data,
                    articles: articleList
                });
                console.log(response)
            })
                .catch(function (error) {
                    console.log("Error " + error);
                });

        }
    };

    onCategoryChange = (event) => {

        event.preventDefault();
        //this would make an api call and return result to the state
        var id = event.target.value || event.target.id;
        console.log(id)
        if (id.length === 0 || id === undefined) {
            this.setState({
                sortByCategory: false,
                filterCriteria: '',
                articles: articles,
                article: {}
            });
        } else {
            var filtered = filterByCategory[0].articles.filter(articles => {
                return parseInt(articles.category_id) === parseInt(id)
            });

            this.setState({
                sortByCategory: true,
                filterCriteria: id,
                articles: filtered,
                article: {}
            });
        }

    };

    tagChange = (event) => {

        event.preventDefault();
        var id = event.target.value || event.target.id
        if (id.length === 0) {
            this.setState({
                sortByCategory: false,
                filterCriteria: '',
                articles: articles,
                article: {}
            });
        } else {
            var filtered = tagIDWithArticles[0].articles.filter(articles => {
                return parseInt(articles.pivot.tag_id) === parseInt(id)
            });
            this.setState({
                sortByCategory: false,
                filterCriteria: id,
                articles: filtered,
                article: {}
            });
        }
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
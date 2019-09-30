import React, { Component, createContext } from 'react'
import {

    loadArticles, loadCategories, loadTags, loadArticlesByTagID, loadArticlesByCategoryID,

} from '../article'
import { Redirect } from "react-router-dom";
export const BlogContext = createContext();

class ArticleContextProvider extends Component {
    state = {
        sortByCategory: false,
        filterCriteria: '',
        articles: [],
        article: {},
        loading: true,
        categories: [],
        tags: [],
        filteredArticles: []
    }
    componentDidMount() {
        loadCategories().then(res => res.json())
            .then(response => {

                if (response.response.statusCode === 200) {
                    this.setState({
                        categories: response.response.data,
                    });
                }

            });

        loadTags().then(res => res.json())
            .then(response => {

                if (response.response.statusCode === 200) {
                    this.setState({
                        tags: response.response.data,
                    });
                }

            });

        loadArticles()
            .then(resp => resp.json())
            .then(res => {
                this.setState({
                    articles: res.response.data,
                    loading: false
                });


            }).catch(err => {
                console.log(err)
                this.setState({
                    articles: [],
                    loading: false
                })
            });



    }
    onReset = (event) => {
        // event.preventDefault();
        // var articleList = loadArticles().then(res=>{
        //     return res
        //      });   
        return <Redirect to='/' />

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


        }else{ // if search has no value then reset filtered to empty to articles show
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
        this.setState({
            loading: true
        });

        loadArticlesByCategoryID(id).then(res => res.json())
            .then(response => {
                this.setState({
                    sortByCategory: false,
                    filterCriteria: id,
                    articles: response.response.data.articles,
                    loading: false
                });
            });

    };

    tagChange = (event) => {

        event.preventDefault();
        var id = event.target.value || event.target.id
        this.setState({
            loading: true
        });

        loadArticlesByTagID(id).then(res => res.json())
            .then(response => {
                this.setState({
                    sortByCategory: false,
                    filterCriteria: id,
                    articles: response.response.data.articles,
                    loading: false
                });
            });
    };
    render() {
        return (
            <BlogContext.Provider value={{ ...this.state, onCategoryChange: this.onCategoryChange, tagChange: this.tagChange, viewArticle: this.viewArticle, onReset: this.onReset, searchChange: this.searchChange }}>
                {this.props.children}
            </BlogContext.Provider>
        );
    }
}


export default ArticleContextProvider;
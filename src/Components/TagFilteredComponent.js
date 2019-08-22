import React, { Component } from 'react';

import CardList from './CardListComponent';
import {  tagIDWithArticles,filterByCategory } from '../article';

class TagFiltered extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        console.log(filterByCategory[0].articles);
        //use this to query end point props.match.params.id
        this.state = {
            articles: props.match.url.includes('tags') ? tagIDWithArticles[0].articles : filterByCategory[0].articles,
            searchField: '',
            
        }
        
    }
    componentDidMount(){
        // const header = new Headers({
        //     "Access-Control-Allow-Origin" : "*", 
        //     "Access-Control-Allow-Credentials" : true ,
        //     'Access-Control-Allow-Headers':'Origin, Content-Type, Authorization, X-Requested-With',
        //     'Content-Type': 'application/json',
        //     'Origin':'http://localhost:8080/'
        //    });
        // fetch('http://localhost:8080/api/v1/articles/all',{
        //     crossDomain:true,
        //    headers:header
        //   })
        // .then(function(response){
        //     console.log(response.headers);
        //     return response.json();
        // })
        // .then(response=>console.log(response))
        // .catch(function(error){
        //     console.log(error);
        // });
        
    }
    onSearchChanged = (event) =>{
        
        this.setState({
            searchField: event.target.value
        });
        
        console.log();
    }
    render(){
        const filteredArticle = this.state.articles.filter(articles => {
            return articles.title.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        return (
            
            <div className="col-lg-8 col-md-10 mx-auto">

               
                    <CardList posts={filteredArticle} />
              
            </div>
           
        );
    }

}
export default TagFiltered;

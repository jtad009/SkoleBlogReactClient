import React, { Component } from 'react';
import { articles } from '../src/article';
import Display from './Components/DisplayComponent';
import {BlogContext} from './Store/Store'
class App extends Component {
    static contextType = BlogContext;
    constructor(){
        super();
        
        this.state = {
            articles: articles,
            searchField: '',
            
        }
        
    }
    componentDidMount(){
        const header = new Headers({
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true ,
            'Access-Control-Allow-Headers':'Origin, Content-Type, Authorization, X-Requested-With',
            'Content-Type': 'application/json',
            'Origin':'http://localhost:80/',
            'Pragma':'no-cache',
            'Cache-Control':'no-cache',
            'Access-Control-Request-Method':'GET',
            'Access-Control-Request-Headers':'access-control-allow-credentials,access-control-allow-headers,access-control-allow-origin,cache-control,content-type,pragma'
           });
        fetch('http://localhost:80/api/v1/articles/all',{
            crossDomain:true,
            headers:header

          })
        .then(function(response){
            console.log(response.headers);
            return response.json();
        })
        .then(response=>console.log(response))
        .catch(function(error){
            console.log("Error "+error);
        });
        
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
            
           <Display />
           
        );
    }

}
export default App;

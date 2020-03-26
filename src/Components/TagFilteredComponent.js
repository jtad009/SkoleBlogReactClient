import React, { Component } from 'react';

import CardList from './CardListComponent';


class TagFiltered extends Component {
   
   
    onSearchChanged = (event) =>{
        
        this.setState({
            searchField: event.target.value
        });
        
        
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

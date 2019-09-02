import React, { Component } from 'react';
import { tags, categories, tagIDWithArticles, filterByCategory } from '../article';
import Taglist from './TaglistComponent';
import SelectTag from './SelectTagComponent';
import SelectCategory from './CategoriesComponent';

import TagFiltered from './TagFilteredComponent';
import BlogContext, {BlogState} from '../Store/Store';


class Sidebar extends Component {

    constructor(){
        super();
        this.state = {
            sortByCategory: false, //flag to know what creteria
            filterCriteria: '' //can be by catergory id of tag id
        };
        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.tagChange = this.tagChange.bind(this);
    }
    onCategoryChange = (event) => {
        console.log(event.target.value);
        this.setState({
            sortByCategory: true,
            filterCriteria: event.target.value
        });
       
    };

    tagChange = (event) => {
        console.log(event.target.value)
        event.preventDefault();
        this.setState({
            sortByCategory: false,
            filterCriteria: event.target.value
        });
    };
    render() {
       
        return (
        
           
            <div className="col-md-3 mb-2">
                <div id="mySidenav" className="sidenav" >
                <BlogContext.Provider value={{...this.state}}>
                    <SelectCategory categories={categories} onchange={this.onCategoryChange} />
                </BlogContext.Provider>
                    <h5 className="hidden-xs mt-4 mt-2">Fliter By Tags <hr /></h5>
                    <div className="d-md-none">
                    <BlogContext.Provider value={BlogState[this.state]}>
                        <SelectTag tags={tags} onchange={this.tagChange} />
                    </BlogContext.Provider>
                    </div>
                    <div className="d-none d-md-block">
                        <Taglist tags={tags} articles={tagIDWithArticles[0].articles} />
                    </div>
                </div>
            </div>
         
          
           
        );
    }
}
export default Sidebar;

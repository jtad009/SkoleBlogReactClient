import React, { Component } from 'react';
import { tags, categories, tagIDWithArticles, filterByCategory } from '../article';
import Taglist from './TaglistComponent';
import SelectTag from './SelectTagComponent';
import SelectCategory from './CategoriesComponent';
import { Route, Link } from "react-router-dom";
import TagFiltered from './TagFilteredComponent';

class Sidebar extends Component {

    onCategoryChange = (event) => {
        console.log(event.target.value);
        // 
        return (
            <span>
                <Link to={'/article/categories/' + event.target.value} className="tag"></Link>
                <Route path='/article/categories/:id' exact strict render={({ match }) => {
                    // eslint-disable-next-line no-unused-expressions
                    (<TagFiltered id={match.params.id} />)
                }} />
            </span>
        );
    };

    tagChange = (event) => {
        console.log(event.target.value)
    };
    render() {

        return (
            <div className="col-md-3 mb-2">
                <div id="mySidenav" className="sidenav" >
                    <SelectCategory categories={categories} onchange={this.onCategoryChange} />
                    <h5 className="hidden-xs mt-4 mt-2">Fliter By Tags <hr /></h5>
                    <div className="d-md-none">

                        <SelectTag tags={tags} onchange={this.tagChange} />
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

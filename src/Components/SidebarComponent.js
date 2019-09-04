import React, { Component } from 'react';
import { tags, categories, tagIDWithArticles, filterByCategory } from '../article';
import Taglist from './TaglistComponent';
import SelectTag from './SelectTagComponent';
import SelectCategory from './CategoriesComponent';



const Sidebar = (props) => {
    return (


        <div className="col-md-3 mb-2">
            <div id="mySidenav" className="sidenav" >

                <SelectCategory categories={categories} />

                <h5 className="hidden-xs mt-4 mt-2">Fliter By Tags <hr /></h5>
                <div className="d-md-none">

                    <SelectTag tags={tags} />

                </div>
                <div className="d-none d-md-block">
                    <Taglist tags={tags} articles={tagIDWithArticles[0].articles} />
                </div>
            </div>
        </div>



    );

}
export default Sidebar;

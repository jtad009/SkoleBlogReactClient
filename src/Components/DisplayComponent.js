import React, { useContext, useState } from 'react';
import CardList from './CardListComponent';
import ViewPost from './ViewPostComponent';
import { BlogContext } from '../Store/Store';
import CategoriesComponent from './categories/categoryComponent';
import Pagination from "react-js-pagination";

const Display = (props) => {
    const {   articles, article, filteredArticles,tags,articleLength, fetchArticle,categories } = useContext(BlogContext);
    const [activePage, setActivePage] =  useState(1);
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        fetchArticle(pageNumber);
        setActivePage(pageNumber);
      }
    return (
        <div className="col-lg-8 col-md-9 mx-auto main">
            
            {article.length > 0 ? <ViewPost  /> : <CardList posts={filteredArticles.length > 0 ? filteredArticles : articles} />}
            {articles.length > 0 ?  <div className="paginator"><Pagination
                 activePage={activePage}
                itemsCountPerPage={20}
                totalItemsCount={articleLength}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                innerClass="pagination pagination-sm justify-content-center"
                itemClass="page-item"
                itemClassFirst=" page-item prev disabled"
                linkClass="page-link"
        /></div>:''
            }
        </div>
    );

}
export default Display;

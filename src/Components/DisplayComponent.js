import React, { useContext } from 'react';
import CardList from './CardListComponent';
import ViewPost from './ViewPostComponent';
import { BlogContext } from '../Store/Store';


const Display = (props) => {
    const { sortByCategory, filterCriteria, articles, article,filteredArticles } = useContext(BlogContext);

    return (
        <div className="col-lg-8 col-md-10 mx-auto">
            {article.length > 0 || filteredArticles > 0 ? <ViewPost  /> : <CardList posts={filteredArticles.length > 0 ? filteredArticles : articles} />}
        </div>
    );

}
export default Display;

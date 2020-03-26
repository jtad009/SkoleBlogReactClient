import React from 'react';

import TimeAgo from 'react-timeago';
import ReactTooltip from 'react-tooltip';

const SimilarArticles = (similar) => {
    console.log(similar);
       return(  

            similar.map((article, i) => {
                return (
                    <div className="col-sm-4 mb-3 h-100 rounded-lg" data-id={article[i].slugs} data-owner={article[i].author_id}>
                        <div className="card ">

                            <div className="card-body">
                                <h6>
                                    <a href={"/view/" + article[i].slugs} id={article[i].id}  ><b>{article[i].title}</b></a>
                                </h6>
                                <div className="row mb-2">
                                    <span className="text-muted small col-sm-12">Published: <TimeAgo date={article[i].created} /></span>
                                    <span className="text-muted small col-sm-12 mt-1"> {article[i].readTime} min read </span>
                                </div>
                                <p>{article[i].excerpt}</p>
                            </div>

                        </div>
                    </div>
                )
            })


        
       );


    
}
export default SimilarArticles;
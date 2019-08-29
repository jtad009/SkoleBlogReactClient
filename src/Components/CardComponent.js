import React from 'react';
import { FaEye, FaUserCircle, FaFolderOpen } from "react-icons/fa";
import { Route, Link } from "react-router-dom";
import ViewPost from './ViewPostComponent';
const Card = ({ id, title, excerpt, cover, slugs, category, views, author, category_id, onclick }) => {
    var image = new Image();
    image.src = 'http://localhost:8080/uploads/blog/' + cover;
    image.onload = function () {
        //if image exist  then be silenet
    };
    image.onerror = function () {
        //if image doesnt load then replace it with the avatar
        document.getElementById(id).src = 'https://skole.com.ng/webroot/img/slide/bg-post.jpg';

    };
    return (
        <div className="col-sm-4 mb-3 h-100" data-id={slugs} >
            <div className="card ">
                <img src={image.src} alt={slugs} className="img-fluid cover" id={id} />
                <div className="card-body">
                    <h4>


                        <Link to={`/articles/view/` + slugs}>{title}</Link>
                        <Route path='/articles/view/:slug' exact strict render={({ match }) => {
                            // eslint-disable-next-line no-unused-expressions
                            (<ViewPost slug={match.params.slug} />)
                        }} />



                    </h4>
                    <p>{excerpt}</p>

                </div>
                <div className="col-sm-12 pb-3">
                    <span className="col-lg-3 small text-muted"><FaUserCircle size="1em" className="mr-1" /> {author}</span>
                    <Link to={'categories/view/'+ category_id} className="col-lg-3 small text-primary"><FaFolderOpen size="1em" className="mr-1" /> {category}</Link>
                    
                    <span className="col-lg-3 small text-muted"><FaEye size="1em" className="mr-1" /> {views}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;

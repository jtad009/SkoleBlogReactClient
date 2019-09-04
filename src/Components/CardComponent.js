import React, { useContext } from 'react';
import { FaEye, FaUserCircle, FaFolderOpen } from "react-icons/fa";
import { Route, Link } from "react-router-dom";
import ViewPost from './ViewPostComponent';
import { BlogContext } from '../Store/Store';
const Card = ({ id, title, excerpt, cover, slugs, category, views, author, category_id, onclick }) => {
    var image = new Image();
    image.src = 'http://skole.com.ng/webroot/img/passport/blogs/' + cover;
    image.onload = function () {
        //if image exist  then be silenet
    };
    image.onerror = function () {
        //if image doesnt load then replace it with the avatar
        document.getElementById(id).src = 'https://skole.com.ng/webroot/img/slide/bg-post.jpg';

    };
    const { viewArticle, onCategoryChange } = useContext(BlogContext);
    return (
        <div className="col-sm-4 mb-3 h-100" data-id={slugs} >
            <div className="card ">
                <img src={image.src} alt={slugs} className="img-fluid cover" id={id} />
                <div className="card-body">
                    <h4>
                        <a href="/articles/view/nc5TX" id={slugs} onClick={viewArticle} >{title}</a>
                    </h4>
                    <p>{excerpt}</p>

                </div>
                <div className="col-sm-12 pb-3">
                    <p className="col-lg-12 small text-muted"><FaUserCircle size="1em" className="mr-1" /> {author}</p>
                    <p className="col-lg-12 small text-muted">
                        <a href="/categories" className="btn-link" id={category_id} onClick={onCategoryChange} className="col-lg-3 small text-primary"><FaFolderOpen size="1em" /> &nbsp;&nbsp;{category}</a>
                    </p>


                    <p className="col-lg-12 small text-muted"><FaEye size="1em" className="mr-1" /> {views}</p>
                </div>
            </div>
        </div>


    );
}

export default Card;

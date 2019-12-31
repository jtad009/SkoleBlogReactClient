import React, { useContext } from 'react';
import { FaEye, FaFolderOpen } from "react-icons/fa";
import { BlogContext } from '../Store/Store';
import TimeAgo from 'react-timeago';
const Card = ({ id, title, excerpt, cover, slugs, category, views, author, category_id, onclick, created, readTime }) => {
    var image = new Image();
    image.src =  cover;
    image.onload = function () {
        //if image exist  then be silenet
    };
    image.onerror = function () {
        //if image doesnt load then replace it with the avatar
        document.getElementById(id).src = '/img/bg-post.jpg';

    };
    const { viewArticle, onCategoryChange } = useContext(BlogContext);
    return (
        <div className="col-sm-4 mb-3 h-100" data-id={slugs} >
            <div className="card ">
                <img src={image.src} alt={slugs} className="img-fluid cover" id={id} />
                <div className="card-body">
                    <h6>
                        <a href="/articles/view/nc5TX" id={id} onClick={viewArticle} >{title}</a>
                    </h6>
                    <div className="row mb-2">
                        <span className="text-muted small col-sm-12">Published: <TimeAgo date={created} /></span>
                        <span className="text-muted small col-sm-12 mt-1"> {readTime} min read </span>
                    </div>
                    <p>{excerpt}</p>
                </div>
                
            </div>
        </div>


    );
}

export default Card;

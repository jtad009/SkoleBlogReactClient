import React, { useContext } from 'react';
import { FaEye, FaFolderOpen, FaShare, FaShareSquare, FaShareAlt, FaShareAltSquare } from "react-icons/fa";
import { BlogContext } from '../Store/Store';
import TimeAgo from 'react-timeago';
import ReactTooltip from 'react-tooltip';
import { getArticleSlugLink } from '../article';
const Card = ({ id, title, excerpt, cover, slugs, category, views, author, category_id, onclick, created, readTime, author_id }) => {
    var image = new Image();
    image.src = cover;
    image.onload = function () {
        //if image exist  then be silenet
    };
    image.onerror = function () {
        //if image doesnt load then replace it with the avatar
        document.getElementById(id).src = '/img/bg-post.jpg';

    };
    const { viewArticle, onCategoryChange } = useContext(BlogContext);
    const share = (event) => {
        event.preventDefault();

        if (navigator.share) {
            navigator
            .share({
                title: title,
                text: excerpt,
                url: getArticleSlugLink(slugs)
            })
            .then(() => { alert("success") })
            .catch((error) => { alert("error") });
        } else {
            alert("Sharing not suported, use a chrome browser.")
        }
    };
    return (
        <div className="col-sm-4 mb-3 h-100 rounded-lg" data-id={slugs} data-owner={author_id}>
            <div className="card ">
                <img src={image.src} alt={slugs} className="img-fluid cover" id={id} height="60" />
                <div className="card-body">
                    <h6>
                        <a href={"/view/"+slugs} id={id}  >{title}</a>
                    </h6>
                    <div className="row mb-2">
                        <span className="text-muted small col-sm-12">Published: <TimeAgo date={created} /></span>
                        <span className="text-muted small col-sm-12 mt-1"> {readTime} min read </span>
                    </div>
                    <p>{excerpt}</p>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-sm-3">

                            <a href="#" data-tip="Share article" onClick={share}><ReactTooltip place="top" /><FaShareAlt color="#ccc" fontSize="20" /></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Card;

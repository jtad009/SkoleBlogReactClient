import React, { useContext } from 'react';
import { FaComment, FaShareAlt,  FaTrashAlt  } from "react-icons/fa";
import { BlogContext } from '../Store/Store';
import TimeAgo from 'react-timeago';
import ReactTooltip from 'react-tooltip';
import { getArticleSlugLink } from '../article';
const Card = ({index, id, title, excerpt, cover, slugs, category, views, author, category_id, onclick, created, readTime, author_id,comments }) => {
    var image = new Image();
    image.src = cover;
    image.onload = function () {
        //if image exist  then be silenet
        // image.src = cover;
    };
    image.onerror = function () {
      
        //if image doesnt load then replace it with the avatar
        document.querySelector('#id'+index).src = '/img/bg-post.jpg';

    };

    const { user } = useContext(BlogContext);
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
                <img src={image.src} alt={slugs} className="img-fluid cover" id={'id'+index} height="60" />
                <div className="card-body">
                    <h6>
                        <a href={"/view/"+slugs} id={id}  ><b>{title}</b></a>
                    </h6>
                    <div className="row mb-2">
                        <span className="text-muted small col-sm-12">Published: <TimeAgo date={created} /></span>
                        <span className="text-muted small col-sm-12 mt-1"> {readTime} min read </span>
                    </div>
                    <p>{excerpt}</p>
                </div>
                <div className="card-footer">
                    {/* <div className="row"> */}
                        <div className="row" style={{display: 'contents',alignContent: 'space-evenly',alignItems: 'end'}}>

                            <a href="#" className="mr-3" data-tip="Share article" onClick={share}><ReactTooltip place="top" /><FaShareAlt color="#ccc" fontSize="15" /></a>
                            {author_id == user.user_code ? <a href="#" className="mr-3" data-tip="Delete Article" onClick={share}><ReactTooltip place="top" /><FaTrashAlt color="red" fontSize="15" /></a> : ''}
                            <span style={{fontSize:'14px'}} data-tip="comment"  className="mr-3" onClick={share}><ReactTooltip place="top" />{comments.length} <FaComment color="#ccc" fontSize="15" /></span>
                            
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>


    );
}

export default Card;

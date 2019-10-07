import React, { useContext } from 'react';
import { FaArrowLeft, FaAngleRight, FaFolderOpen } from "react-icons/fa";

import { BlogContext } from '../Store/Store';

import {API_ENDPOINTS} from '../article';
import TagsV2 from './TagsV2'
import UserCard from './UserCardComponent'

const ViewPost = (params) => {
    const capName = (name) => {
        return name.charAt(0).toUpperCase()+name.slice(1)
    }
    const { article, onReset, onCategoryChange } = useContext(BlogContext);
    const body = article[0].article.replace(/font-family: Alegreya;/gi,"").replace(/font-family: Roboto;/gi,'');
    var image = new Image();
    image.src =  article[0].user.image;
    image.onload = function () {
        //if image exist  then be silenet
    };
    image.onerror = function () {
        //if image doesnt load then replace it with the avatar
        image.src = '/img/avatar.png';

    };
    return (
        
        <div className="text-justify bg-white p-3">


            <p className="small">
                <a href={window.location.host.includes('localhost') ?     API_ENDPOINTS.dev.HOMEPAGE :    
                API_ENDPOINTS.production.HOMEPAGE} className="btn-link " onClick={onReset}><FaArrowLeft />&nbsp;&nbsp;Back</a>

                 &nbsp;<a href="#" className="btn-link small"><FaAngleRight /> </a>&nbsp;
                <span className="btn-link" ><FaFolderOpen />&nbsp;&nbsp;{article[0].category.category}</span>
            </p>
            <hr />
            <img id={article[0].id} src={image.src}  className="  img-fluid " title="profile image" alt="" style={{borderRadius:'50%', border:'1px solid #ccc', height:'50px'}}/> <span className="text-muted small">Author: {capName(article[0].user.first_name)+ " "+ capName(article[0].user.last_name)}</span>
            <span className="text-muted pull-right small" style={{  float: 'right', lineHeight: '50px'}}>{article[0].view_count} views</span>

            <hr />

            <div dangerouslySetInnerHTML={{ __html: body }}></div>
             {article[0].tags.length !== undefined ? <TagsV2 tags={article[0].tags}/> : ''}
           
        </div>






    );
}

export default ViewPost;

import React, { useContext } from 'react';
import { FaArrowLeft, FaAngleRight, FaFolderOpen } from "react-icons/fa";

import { BlogContext } from '../Store/Store';

import {API_ENDPOINTS} from '../article';


const ViewPost = (params) => {
    const { article, onReset, onCategoryChange } = useContext(BlogContext);
    const body = article[0].article.replace(/font-family: Alegreya;/gi,"").replace(/font-family: Roboto;/gi,'');
    
    return (
        <div className="">


            <p className="small"><a href={window.location.host.includes('localhost') ?     API_ENDPOINTS.dev.HOMEPAGE :     API_ENDPOINTS.production.HOMEPAGE} className="btn-link " onClick={onReset}><FaArrowLeft />&nbsp;&nbsp;Back</a>

            &nbsp;<a href="#" className="btn-link small"><FaAngleRight /> </a>&nbsp;
            <a href="/categories" className="btn-link" id={article[0].category_id} onClick={onCategoryChange}><FaFolderOpen />&nbsp;&nbsp;{article[0].category.category}</a>
            </p>
            <hr />
            <span className="text-muted small">{article[0].created_at}</span>
            <span className="text-muted pull-right small">{article[0].view_count} views</span>

            <hr />

            <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </div>






    );
}

export default ViewPost;

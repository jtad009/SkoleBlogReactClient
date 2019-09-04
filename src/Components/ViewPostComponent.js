import React, { useContext } from 'react';
import { FaArrowLeft, FaAngleRight, FaFolderOpen } from "react-icons/fa";
import { articles } from '../article';
import { BlogContext } from '../Store/Store';
import { Link, Switch } from "react-router-dom";

const ViewPost = (params) => {
    const { article, onReset, onCategoryChange } = useContext(BlogContext)
    return (
        <div className="">


            <a href="/" className="btn-link" onClick={onReset}><FaArrowLeft />&nbsp;&nbsp;Back</a>

            &nbsp;<FaAngleRight /> &nbsp;
                        <a href="/categories" className="btn-link" id={article[0].category_id} onClick={onCategoryChange}><FaFolderOpen />&nbsp;&nbsp;{article[0].categories.category}</a>
            <hr />
            <span className="text-muted small">{article[0].created_at}</span>
            <span className="text-muted pull-right small">{article[0].view_count} views</span>

            <hr />

            {article[0].article}
        </div>






    );
}

export default ViewPost;

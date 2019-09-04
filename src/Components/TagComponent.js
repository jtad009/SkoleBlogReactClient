import React, {useState} from "react";
import { Route, Link } from "react-router-dom";
import TagFiltered from './TagFilteredComponent';
import {BlogContext} from '../Store/Store';
const Tag = ({id, tag, onclick})=>{
  
    return (
        <BlogContext.Consumer>
            {
                
                (context)=>{
                    const {tagChange} = context;
                    return (
                        <span>
           <a key={id} href="r" className="tag" id={id} onClick={tagChange}><span className="txt" id={id}>{tag}</span><span className="num">3</span></a>
            {/* <a key={id} href="r" className="tag" id={id} onClick={onclick}><span className="txt" id={id}>{tag}</span><span className="num">3</span></a> */}
        
         </span>
                    );
                }
            }
        </BlogContext.Consumer>
       
    );
}
export default Tag;

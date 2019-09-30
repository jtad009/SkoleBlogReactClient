import React from "react";

import {BlogContext} from '../Store/Store';
const Tag = ({id, tag, onclick, count})=>{
  
    return (
        <BlogContext.Consumer>
            {
                
                (context)=>{
                    const {tagChange} = context;
                    return (
                        <span>
                            <a key={id} href="/" className="tag" id={id} onClick={tagChange}>
                                <span className="txt" id={id}>{tag}</span>
                            <span className="num">{count}</span>
                             </a>
            {/* <a key={id} href="r" className="tag" id={id} onClick={onclick}><span className="txt" id={id}>{tag}</span><span className="num">3</span></a> */}
        
                         </span>
                    );
                }
            }
        </BlogContext.Consumer>
       
    );
}
export default Tag;

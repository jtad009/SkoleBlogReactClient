import React from "react";
import { Route, Link } from "react-router-dom";
import TagFiltered from './TagFilteredComponent';

const Tag = ({id, tag, onclick})=>{
  
    return (
       <span>
            {/* <a key={id} href="r" className="tag" id={id} onClick={onclick}><span className="txt" id={id}>{tag}</span><span className="num">3</span></a> */}
        <Link to={'/article/tags/'+id} className="tag"><span className="txt">{tag}</span><span className="num">3</span></Link>
        <Route path='/article/tags/:id' exact strict render={({ match }) => {
                // eslint-disable-next-line no-unused-expressions
                (<TagFiltered id={match.params.id} type="filterByTag"/>)
            }} />
         </span>
    );
}
export default Tag;

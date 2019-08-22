import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBox = ({searchfield, searchchange}) => {
    return (
        <li className="nav-item">

            <form className="">
                <div className="input-group">
                    <input className="form-control" type="search" placeholder="Search articles" id="searchParam"  onChange={searchchange}/>

                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button">
                               <FaSearch/>
                            </button>
                        </span>
            </div>
         </form>
       
                  
            
        </li>
            );
        }
        export default SearchBox;

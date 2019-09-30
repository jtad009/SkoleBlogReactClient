import React, { useContext } from 'react';
import { FaSearch } from "react-icons/fa";
import { BlogContext } from '../Store/Store';

const SearchBox = () => {
    const { searchChange } = useContext(BlogContext);
    return (

        <li className="nav-item">

            <form className="">
                <div className="input-group">
                    <input className="form-control" type="search" placeholder="Search articles" id="searchParam" onChange={searchChange} />

                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                            <FaSearch />
                        </button>
                    </span>
                </div>
            </form>



        </li>
    );
}
export default SearchBox;

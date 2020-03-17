import React, { useContext } from 'react';
import { BlogContext } from '../Store/Store';

const SearchBox = () => {
    const { searchChange } = useContext(BlogContext);
    return (
        <form className="my-2 my-lg-0 mr-lg-2">
            <div className="input-group">
                <input className="form-control" type="text" onChange={searchChange} placeholder="Search blog" id="searchParam" autocomplete="off" data-id="students" />
            </div>
        </form>
    );
}
export default SearchBox;

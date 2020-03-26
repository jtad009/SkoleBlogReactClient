import React, { useContext } from 'react';

import Taglist from './TaglistComponent';
import SelectTag from './SelectTagComponent';
import { BlogContext } from '../Store/Store';


const Sidebar = (props) => {
    const { tags, article}  = useContext(BlogContext);
    return (

        article.length === undefined  ? 
        <div className="col-md-3 mb-2">
            <div id="mySidenav" className="sidenav" >

                {/* <SelectCategory categories={categories} /> */}

                <h5 className="hidden-xs mt-4 mt-2 d-none d-md-block">Fliter By Tags <hr /></h5>
                <div className="d-md-none">

                    <SelectTag tags={tags} />

                </div>
                <div className="d-none d-md-block">
                    <Taglist tags={tags}  />
                </div>
            </div>
        </div>
       : '' 


    );

}
export default Sidebar;

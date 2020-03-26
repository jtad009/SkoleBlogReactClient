import React, {useContext} from 'react';
import { FaUserCircle, FaEdit, FaHome } from "react-icons/fa";
import {Route} from 'react-router-dom';
import Container from './Author/ContainerComponent';
import { BlogContext } from '../Store/Store';
import ReactTooltip from 'react-tooltip';
const Fab = () => {
    const {user} = useContext(BlogContext)
    
    return (
        
        <div>
            <div className="backdrop"></div>
            {/* <div className="fab child" data-subitem="1"><span>C</span></div> */}
            {  user.username.length > 0 && user.canWrite ? <div className="fab child" data-subitem="1"><a href="/write"  data-tip="Write article"><ReactTooltip/> <span><FaEdit/></span></a></div> : ''}
            {  user.username.length === 0 ?
                <div className="fab child" data-subitem={user.username.length === 0 ? 1 : 2}  data-tip="Login to write">
                    <ReactTooltip /> 
                    <a href="/auth"><span><FaUserCircle/></span></a>
                    <Route path='/auth' exact strict component={Container} />
                </div>
                : ''
            }
            <div className="fab" id="masterfab" data-tip="Menu"><ReactTooltip /> <span><FaHome/></span></div>
        </div>
        
    );
}
export default Fab;
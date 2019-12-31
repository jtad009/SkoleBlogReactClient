import React, {useContext} from 'react';
import { FaUserCircle, FaEdit, FaHome } from "react-icons/fa";
import {Link,Router,Route} from 'react-router-dom';
import Container from './Author/ContainerComponent';
import { BlogContext } from '../Store/Store';
const Fab = () => {
    const {user} = useContext(BlogContext)
    
    return (
        
        <div>
            <div className="backdrop"></div>
            {/* <div className="fab child" data-subitem="1"><span>C</span></div> */}
            {  user.username.length > 0 ? <div className="fab child" data-subitem="1"><a href="/write"><span><FaEdit/></span></a></div> : ''}
            {  user.username.length === 0 ?
                <div className="fab child" data-subitem={user.username.length === 0 ? 1 : 2} dataToggle="tooltip" title="Login to write">
                    <a href="/auth"><span><FaUserCircle/></span></a>
                    <Route path='/auth' exact strict component={Container} />
                </div>
                : ''
            }
            <div className="fab" id="masterfab" dataToggle="tooltip" title="Context Menu"><span><FaHome/></span></div>
        </div>
        
    );
}
export default Fab;
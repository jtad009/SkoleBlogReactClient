import React from 'react';
import { FaUserCircle, FaEdit } from "react-icons/fa";
import {Link,Router,Route} from 'react-router-dom';
import Container from './Author/ContainerComponent';
const Fab = () => {
    return (
        
        <div>
            <div className="backdrop"></div>
            <div className="fab child" data-subitem="1"><span>C</span></div>
            <div className="fab child" data-subitem="2"><span>B</span></div>
            <div className="fab child" data-subitem="3" dataToggle="tooltip" title="Login to write">
                <a href="/auth"><span><FaUserCircle/></span></a>
                <Route path='/auth' exact strict component={Container} />
                </div>
            <div className="fab" id="masterfab" dataToggle="tooltip" title="Write Article"><span><FaEdit/></span></div>
        </div>
        
    );
}
export default Fab;
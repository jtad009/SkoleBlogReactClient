import React, { useContext } from 'react';

import { BlogContext } from '../Store/Store';

import { Signout,FaReadme } from "react-icons/fa";
const Navbar = () => {
    const { user, logout } = useContext(BlogContext);
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white fixed-top mb-4">

            <a href="/" className="navbar-brand">
                <b style={{fontSize:'24px'}}><span className="text-danger">Skole</span>-Blog <FaReadme/></b>
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    
                    
                    {Object.keys(user).length > 1 ? <li className="nav-item ml-3"><a href="/" onClick={logout}>Logout</a></li> : ''}
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;

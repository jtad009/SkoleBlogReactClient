import React from 'react';
import { FaReadme } from "react-icons/fa";

const Navbar = () => {
    
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white fixed-top mb-4">

            <a href="/" className="navbar-brand">
                <b style={{fontSize:'24px'}}><span className="text-danger">Skole</span>-Blog <FaReadme elevation="10" style={{fontSize:'28px'}}/></b>
            </a>
            
            
        </nav>
    );
}

export default Navbar;

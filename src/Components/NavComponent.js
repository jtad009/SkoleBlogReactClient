import React from 'react';
import SearchBox from './SearchBoxComponent';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white fixed-top mb-4">
                
            <a href="/home" className="navbar-brand">
                <img src="/img/skole.png" alt="SKOLE" />
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <SearchBox />
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

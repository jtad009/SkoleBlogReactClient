import React, { useContext } from 'react';

import { BlogContext } from '../Store/Store';
import { Link } from 'react-router-dom'
import { Signout } from "react-icons/fa";
const Navbar = () => {
    const { user, Logout } = useContext(BlogContext);
    var image;
    if (Object.keys(user).length > 1) {
        image = new Image();
        image.src = `https://skole.com.ng/img/passport/author/${user.image}`;
        image.onload = function () {};
        image.onerror = function () {
            //if image doesnt load then replace it with the avatar
            document.getElementById("profileImage").src = '/img/avatar.png';

        };
    }
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
                    
                    {Object.keys(user).length > 1 ? <li className="nav-item ml-3"><Link to="/" ><img src={image.src} id="profileImage" className="img-fluid " title="profile image" alt="" style={{ borderRadius: '50%', border: '2px solid rgb(55, 147, 146)', height: '40px' }} /> </Link></li> : ''}
                    {Object.keys(user).length > 1 ? <li className="nav-item ml-3"><a href="/" onClick={Logout}>Logout</a></li> : ''}
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;

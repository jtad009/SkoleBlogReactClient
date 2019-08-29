import React from 'react';
var divStyle = {
    // color: 'white',
    backgroundImage: 'url(https://skole.com.ng/webroot/img/passport/blogs/Skole-cd03f.jpg)',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};
var divHeight = {
    height: '300px'
};
const Header = (props)=>{
    return (
        <header className="masthead" id="masthead" style={divStyle} >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row" style={divHeight}>
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="page-heading">
                                <h1 >Posts</h1>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

    );
}
export default Header;
import React, { useContext } from 'react';
import { BlogContext } from '../Store/Store';
import { Route } from 'react-router-dom';
import App from '../App';
import SearchBox from './SearchBoxComponent';
var divHeight = {
    height: '300px'
};
const Header = (props) => {
    const { article, onReset, filterCriteria, user } = useContext(BlogContext);
    console.log(window.location.href.includes('write'))
    var bg = article.length > 0 ? 'https://skole.com.ng/webroot/img/passport/blogs/' + article[0].cover_image : '/img/code_banner.jpg';


    var divStyle = {
        // color: 'white',

        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all', // 'ms' is the only lowercase vendor prefix
        backgroundImage: 'url(' + bg + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    
    return (
        <header className="masthead" id="masthead" style={divStyle} >
            {window.location.href.includes('write') || window.location.href.includes('auth') ? '' :

                <div className="container">
                    <div className="row" style={divHeight}>
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="page-heading">
                                <h1 >{article.length > 0 ? article[0].title : 'Posts'}</h1>
                               <SearchBox/>
                            </div>
                        </div>
                    </div>
                </div>}
            <div className="row ">
                <div className="col-lg-12 ">
                    {filterCriteria.type !== undefined ?
                        <ol className="breadcrumb bg-white">
                            <li className="breadcrumb-item"><a href="/" onClick={onReset} id="reset">All Post</a></li>
                            <li className="breadcrumb-item active text-muted">{filterCriteria.type} </li>
                            <li className="breadcrumb-item active text-muted">{filterCriteria.title} </li>
                        </ol>
                        :
                        <ol className="breadcrumb bg-white">
                            {!window.location.href.includes('write') ? <li className="breadcrumb-item"><a href="/" onClick={onReset} id="reset">All Post</a></li> : ''}
                            {window.location.href.includes('write') ? <li className="breadcrumb-item"><a href="/" id="reset">All Post</a></li> : ''}
                            {window.location.href.includes('write') ? <li className="breadcrumb-item">Articles</li> : ''}
                            {window.location.href.includes('write') ? <li className="breadcrumb-item active text-muted">Add</li> : ''}
                        </ol>}
                </div>
            </div>
        </header>




    );
}
export default Header;

import React, {useContext} from 'react';
import { BlogContext } from '../Store/Store';

var divHeight = {
    height: '300px'
};
const Header = (props) => {
    const { article, onReset } = useContext(BlogContext);
    var bg = article.length > 0 ? article[0].cover_image : 'Skole-cd03f.jpg';

                   
    var divStyle = {
        // color: 'white',

        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all', // 'ms' is the only lowercase vendor prefix
        backgroundImage: 'url(https://skole.com.ng/webroot/img/passport/blogs/' + bg + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    return (
                        <header className="masthead" id="masthead" style={divStyle} >
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row" style={divHeight}>
                                    <div className="col-lg-8 col-md-10 mx-auto">
                                        <div className="page-heading">
                                            <h1 >{article.length > 0 ? article[0].title : 'Posts'}</h1>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-lg-12 ">
                                    <ol class="breadcrumb bg-white">
                                        <li class="breadcrumb-item"><a href="/blog" onClick={onReset}>Dashboard</a></li>
                                        <li class="breadcrumb-item active text-muted">Articles </li>
                                    </ol>
                                </div>
                            </div>
                        </header>
                
         


    );
}
export default Header;

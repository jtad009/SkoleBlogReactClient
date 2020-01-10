import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../Store/Store';
import UserProfileMenu from './Author/userMenuComponent';
import SearchBox from './SearchBoxComponent';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { Offline } from "react-detect-offline";
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
var divHeight = {
    height: '300px'
};
const Header = (props) => {
    const { article, onReset, filterCriteria, user } = useContext(BlogContext);
    var bg =  '/img/code_banner.jpg';
    console.log(article);
    useEffect(()=>{
        
            if(article.cover_image !== undefined){
                bg =  'https://skole.com.ng/webroot/img/passport/blogs/' + article.cover_image 
                document.querySelector('.masthead').style.backgroundImage = `url(${bg})`;
            }
            // document.querySelector('.titleName').innerHTML = article.title;
            
    });
    
    
    


    var divStyle = {
        // color: 'white',

        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all', // 'ms' is the only lowercase vendor prefix
        backgroundImage: 'url(' + bg + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    const showMenu = ()=>{
        if(document.querySelector('.__react_bs_dd_menuItems_1').style.display === 'block'){
            document.querySelector('.__react_bs_dd_menuItems_1').style.display='none';
        }else{
            document.querySelector('.__react_bs_dd_menuItems_1').style.display = 'block'
        }
        
    }
    return (
        <header className="masthead" id="masthead" style={divStyle} >
            
            {window.location.href.includes('write') || window.location.href.includes('auth') ? '' :

                <div className="container">
                    <div className="row" style={divHeight}>
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="page-heading" >
                                {/* <h1 className="titleName" style={{background:'#000',color:'#fff',borderRadius:'12px'}}>Posts</h1> */}
                                {console.log(window.location.href.includes('view'))}
                                { window.location.href.includes('view') || window.location.href.includes('user')  ? '' : <SearchBox/> }
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
                        {Object.keys(user).length > 1 ? <span style={{float: 'right',marginTop: '-45px', marginRight: '20px', height:'42px'}} onClick={showMenu}><UserProfileMenu/> </span> : ''}
                </div>
                
            </div>
        </header>




    );
}
export default Header;

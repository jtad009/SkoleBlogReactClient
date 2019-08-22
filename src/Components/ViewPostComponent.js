import React from 'react';
import { FaArrowLeft, FaAngleRight, FaFolderOpen } from "react-icons/fa";
import { articles } from '../article';

import {  Link, Switch } from "react-router-dom";
const ViewPost = (params) => {
    console.log(params.match.params.slug);
    const filteredArticle = articles.filter(article => {
        return article.slug.toLowerCase().includes(params.match.params.slug.toLowerCase())
    });
    console.log(filteredArticle);
    return (


        
            <div className="col-lg-8 col-md-10 mx-auto">

                <Switch>
                    <Link to='/' className="btn-link"><FaArrowLeft />&nbsp;&nbsp;Back</Link>
                </Switch>


                &nbsp;<FaAngleRight /> &nbsp;
                 <a href="window.history.back()" className="btn-link"><FaFolderOpen />&nbsp;&nbsp;{filteredArticle[0].categories.category}</a>
                <hr />
                <span className="text-muted small">{filteredArticle[0].created_at}</span>
                <span className="text-muted pull-right small">{filteredArticle[0].view_count} views</span>

                <hr />

                {filteredArticle[0].article}
            </div>
        




    );
}
// class ViewPost extends Component {


//     render() {

//         // document.getElementById('masthead').style.backgroundImage = 'https://skole.com.ng/webroot/img/passport/blogs/Skole-41904.jpg';
//         return (
//             <div>

//                     <div className="row">
//                         <div className="col-lg-8 col-md-10 mx-auto">
//                             <a href={this.props.history.push('/')} className="btn-link"><FaArrowLeft />&nbsp;&nbsp;Back</a>
//                             &nbsp;<FaAngleRight /> &nbsp;
//                                 <a href="window.history.back()" className="btn-link"><FaFolderOpen />&nbsp;&nbsp;{this.props.article[0].categories.category}</a>
//                             <hr />
//                             <span className="text-muted small">{this.props.article[0].created_at}</span>
//                             <span className="text-muted pull-right small">{this.props.article[0].view_count} views</span>

//                             <hr />

//                             {this.props.article[0].article}
//                         </div>
//                     </div>


//             </div>

//         );
//     }
// }
export default ViewPost;
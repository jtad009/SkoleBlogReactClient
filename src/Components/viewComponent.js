import React from 'react';
import { FaArrowLeft, FaAngleRight, FaFolderOpen,FaNewspaper } from "react-icons/fa";
import { BlogContext } from '../Store/Store';
import {  getArticleById } from '../article';
import TagsV2 from './TagsV2';
import EmptyCard from './EmptyCardComponent';
import CommentComponent from './comment/commentComponent';

import { findBySlug } from "../db";
import { BallBeat,BallRotate, BallScaleMultiple } from 'react-pure-loaders';
import {Link} from 'react-router-dom';

class ViewComponent extends React.Component {
    static contextType = BlogContext;
    constructor(props) {
        super(props);
        
        this.state = {
            article: {},
            loading: true,
        };
    }
    componentDidMount() {
        
        getArticleById(this.props.match.params.slug)
            .then(response => response.json())
            .then(res => {
                console.log(res);
                const {setCurrentArticle} = this.context;
                setCurrentArticle(res.response.data);
                document.title = `${res.response.data.title} | SkoleBlog `;
                let desc = document.querySelector('meta[name="description"]').getAttribute('content');
                if(res.response.data.ExtractExcerpt.length > 0){
                    desc = res.response.data.ExtractExcerpt;
                }else{
                    desc = res.response.data.title
                }
                document.querySelector('meta[name="description"]').setAttribute("content", desc);
                
                this.setState({
                    article: res.response.data,
                    loading: false,
                });
            })
            .catch(err => {
                console.log("Error from failed connection or otherwise, search fro data on IndexDB");
                //Try to find text in INDEXDB
                findBySlug('articles', this.props.match.params.slug)
                .then(response => {
                    
                    if(response.length > 0){
                        document.title = `${response[0].title} | SkoleBlog `;;
                        let desc = document.querySelector('meta[name="description"]').getAttribute('content');
                        if(response[0].ExtractExcerpt.length > 0){
                            desc = response[0].ExtractExcerpt
                        }else{
                            desc = response[0].title
                        }
                        document.querySelector('meta[name="description"]').setAttribute("content", desc);
                        this.setState({
                            article: response[0],
                            loading: false,
                        });
                    }
                });
            });
    }
    capName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }
    onResets = () => {
        this.props.history.push('/');
    }
    getDate = (date) => {
        let month = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
        let d = new Date(date)
        return `${d.getDay()} ${month[d.getMonth()]} ${d.getUTCFullYear()}`
    }
    render() {
        const {loggedIN}  = this.context;
       
       
            if (!this.state.loading) {
                const body = this.state.article.article
                
                // .replace(/font-family: Alegreya;/gi, "")
                .replace(/font-family: */gi, '');
                var image = new Image();
                image.src = this.state.article.user.image;
                image.onload = function () {
                    //if image exist  then be silenet
                };
                image.onerror = function () {
                    //if image doesnt load then replace it with the avatar
                    image.src = '/img/avatar.png';
    
                };
                return <BlogContext.Consumer>
                    {
    
                        (context) => {
                            const { onReset } = context;
                            return (
                                <div >
                                    <div className="text-justify bg-white p-3 readArea" >
                                    <div>
                                        <h4 className="text-muted"><b>{this.state.article.title}</b></h4>
                                        <i style={{fontSize:'12px'}}>Published on {this.getDate(this.state.article.created)}</i>

                                    </div>
                                    <hr/>
                                    <p className="small">
                                        <Link to="/" className="btn-link " onClick={this.onResets}>
                                            <FaArrowLeft />&nbsp;&nbsp;Back
                                        </Link>
    
                                        &nbsp;<a href="#" className="btn-link small"><FaAngleRight /> </a>&nbsp;
                                        <span className="btn-link" ><FaFolderOpen />&nbsp;&nbsp;{this.state.article.category.category}</span>
                                    </p>
                                    <hr />
                                    <img id={this.state.article.id} src={image.src} className="  img-fluid " title="profile image" alt="" style={{ borderRadius: '50%', border: '1px solid #ccc', height: '50px' }} /> <span className="text-muted small">written by: {this.capName(this.state.article.user.first_name) + " " + this.capName(this.state.article.user.last_name)}</span>
                                    <span className="text-muted pull-right small" style={{ float: 'right', lineHeight: '50px',marginTop:'-12px' }}><FaNewspaper/> {this.state.article.view_count} views</span>
    
                                    <hr />
    
                                    <div dangerouslySetInnerHTML={{ __html: body }}></div>
                                    {this.state.article.tags.length !== undefined ? <TagsV2 tags={this.state.article.tags} /> : ''}
    
                                    <p className="text-muted font-weight-bold mt-3 text-uppercase">Related Articles</p>
                                    {/* {similar.length > 0 ?  <CardList posts={similar} /> : ''} */}
                                   
                                   
                                    {<CommentComponent article_id={this.state.article.id} comments={this.state.article.comments}/>}
                                </div>
                                </div>
                            );
                }
            }
                </BlogContext.Consumer>
            } else {
                return <div className="mt-3"><EmptyCard text="" /></div>
            }
        
        
    }
}

export default ViewComponent;
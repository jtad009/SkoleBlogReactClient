import React from 'react';
import { FaArrowLeft, FaAngleRight, FaFolderOpen,FaNewspaper,FaPencilAlt } from "react-icons/fa";
import { BlogContext } from '../Store/Store';
import {  getArticleById,loadSimilar } from '../article';
import TagsV2 from './TagsV2';
import EmptyCard from './EmptyCardComponent';
import CommentComponent from './comment/commentComponent';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { findBySlug } from "../db";

import {Link} from 'react-router-dom';
import EditArticle from './Author/editArticleComponent';
import ReactTooltip from 'react-tooltip';
import SimilarArticles from './similarArticleComponent';
const styles={
    title:{
        backgroundColor: 'rgb(220, 53, 69)',
        padding: '16px 0',
        boxSizing: 'border-box',
        color: 'white',
        minHeight: '64px',
        fontSize: '24px',
        textAlign: 'center',
        flex:1
    },
    text:{
        padding: '10px',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        fontSize: '18px',
        minHeight: '50vh'
    }
};
class ViewComponent extends React.Component {
    static contextType = BlogContext;
    
    constructor(props) {
        super(props);
        this.state = {
            article: {},
            loading: true,
            openSheets: false,
            similar:[]
        };
        
    }
    /**
     * Open bottom sheet
     */
    openBSheet = (e)=>{
        
        this.setState({
            openSheets : !this.state.openSheets
        });
        if(this.state.openSheets === true){
            console.log(this.state.openSheets)
            
            document.querySelector('nav').style.display='block'
        }else{
            console.log(this.state.openSheets)
            
            document.querySelector('nav').style.display='none';
        }
    }

    setArticleAfterEdit = (data)=>{
        
        this.setState({
            article:data
        });
    }

    componentDidMount() {
        
        getArticleById(this.props.match.params.slug)
            .then(response => response.json())
            .then(res => {
                
                const {setCurrentArticle,user} = this.context;
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
                loadSimilar(user.public_key, res.response.data.id,res.response.data.category_id,res.response.data.tags)
                .then(response => {
                    console.log(response.data.response.data)
                    this.setState({
                        similar:response.data.response.data
                    });
                })
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
                            const { onReset ,user} = context;
                            return (
                                <div >
                                    <div className="text-justify bg-white p-3 readArea" >
                                    <div>
                                        <h4 className="text-muted"><b>{this.state.article.title}</b></h4>
                                        <i style={{fontSize:'12px'}}>Published on {this.getDate(this.state.article.created)}
                                         { user.user_code == this.state.article.user_id ? <a href="#" onClick={this.openBSheet} className="ml-3" data-tip="Click to edit this article"><FaPencilAlt/> <ReactTooltip /> Edit Article</a> : ''}
                                        </i>

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
                                    {this.state.similar.length > 0 ?  <SimilarArticles similar={this.state.similar} /> : ''}
                                   
                                   
                                    {<CommentComponent article_id={this.state.article.id} comments={this.state.article.comments}/>}
                                </div>
                                <SwipeableBottomSheet  	open={this.state.openSheets}   onChange={this.openBSheet.bind(this)}     fullscreen	>
                                    <div style={styles.title}>
                                        Edit article&nbsp;
                                        <button  onClick={this.openBSheet} className="btn" data-tip="Close" style={{color:'white !important', float: 'right', marginRight: '10px'}}>
							                    x <ReactTooltip /> 
						                </button>
                                    </div>
                                    <div style={styles.text}>
                                        <EditArticle setArticle={this.setArticleAfterEdit} closeModal={this.openBSheet} articleData={this.state.article} open={this.state.openSheets}/>
                                    </div>
                                </SwipeableBottomSheet>
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
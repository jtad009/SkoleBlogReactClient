import React, { useContext } from 'react';
import { BlogContext } from '../../Store/Store';

/**
 * @param tags
 * @param view boolean to know if the tag list is for view or when adding tags
 * @param tagCount Number of items under this  tag
 */
const CategoriesComponent= ({  view = true, filter = null, loading = false, tagCount = 0 }) => {
    const { findTag, tagChange,categories } = useContext(BlogContext);
    const colors = ['#218838','#1e7e34','#17a2b8','#138496','#28a745','#ffc107','#e0a800','#d39e00','#343a40','#007bff','#868e96'];
  
    return (
        <div className="_1sk6" style={{ "bottom": "0px" }}>
            <div className="_54_v">
                <div className="clearfix">

                    <div className="_54_w _42ef">
                        <div className="clearfix uiTokenizer uiInlineTokenizer">
                            <div className="tokenarea" id="tokenarea" style={{width:'1000px',position:'relative', overflow:'auto'}}>
                                { 
                                    categories.map((tag, i) => {
                                       
                                        return (

                                            <span className="removable uiToken2" key={tag.id}>
                                    <span class="person_image text-center mr-3" style={{backgroundColor:colors[Math.floor(Math.random()*colors.length)]}}>{tag.category.charAt(0).toUpperCase()}</span>
                                                {view ? <a key={tag.id} href="/" className="tag mt-1" id={tag.id} style={{ textDecoration: 'none', paddingRight: '5px' }} onClick={tagChange} >
                                                    <span className="uiTokenText">{tag.category.charAt(0).toUpperCase()+tag.category.slice(1)}</span>
                                                </a> : ''}
                                                {view ? '' : <span className="uiTokenText">{tag.tag}</span>}
                                                {view ? '' : <input name="tags[]" id="feature" autoComplete="off" type="hidden" value={tag.tag} />}
                                                {view ? <span className="num pr-1" style={{ color: '#e33545', fontSize: '13px' }}>{tag.article_count}</span> : <a href="#" aria-label="Remove j" className="remove uiCloseButton uiCloseButtonSmall" style={{ textDecoration: 'none', }} id="remove">×</a>}
                                            </span>
                                        )

                                    })
                                }

                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesComponent;
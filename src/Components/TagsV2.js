import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../Store/Store';

/**
 * @param tags
 * @param view boolean to know if the tag list is for view or when adding tags
 * @param tagCount Number of items under this  tag
 */
const TagsV2 = ({ tags, view = true, filter = null, loading = false, tagCount = 0, removeNode}) => {
    const { tagChange } = useContext(BlogContext);
    
    /**
     * Remove tag from DOM
     */
    const remove = (event) => {
        event.preventDefault()
        document.querySelector(`#${event.target.id}`).parentNode.remove();
    }

    return (
        <div className="_1sk6" style={{ "bottom": "0px" }}>
            <div className="_54_v">
                <div className="clearfix">

                    <div className="_54_w _42ef">
                        <div className="clearfix uiTokenizer uiInlineTokenizer">
                            <div className="tokenarea" id="tokenarea">
                                {
                                    tags.map((tag, i) => {
                                        return (

                                            <span className="removable uiToken" key={tag.id}>
                                                {view ? <a key={tag.id} href="/" className="tag" id={tag.id} style={{ textDecoration: 'none', paddingRight: '5px' }} onClick={tagChange} >
                                                    <span className="uiTokenText">{tag.tag}</span>
                                                </a> : ''}
                                                {view ? '' : <span className="uiTokenText">{tag.tag}</span>}
                                                {view ? '' : <input name="tags[]" id="feature" autoComplete="off" type="hidden" value={tag.tag} />}
                                                {view ? <span className="num" style={{ color: '#e33545', fontSize: '11px' }}>{tag.count}</span> : 
                                                <a href="#" aria-label="Remove j" className="remove uiCloseButton uiCloseButtonSmall" style={{ textDecoration: 'none', }} id={'remove'+i} onClick={remove}>×</a>}
                                            </span>
                                        )

                                    })
                                }

                            </div>
                            {(
                                view ? '' :
                                    <div className="uiTypeahead" style={{ position: 'static', }} id="js_8">
                                        <div className="wrap" style={{ position: 'absolute', width: '40px' }}>
                                            <input type="hidden" autoComplete="off" className="hiddenInput" value="" />
                                            <div className="innerWrap">


                                            </div>
                                        </div>
                                    </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TagsV2;

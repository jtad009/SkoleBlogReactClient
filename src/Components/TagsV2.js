import React from 'react';
/**
 * @param tags
 * @param view boolean to know if the tag list is for view or when adding tags
 */
const TagsV2 = (tags,view = true) => {
  return (
        <div className="_1sk6" style={{"bottom" : "0px"}}>
        <div className="_54_v">
            <div className="clearfix">
                
                <div className="_54_w _42ef">
                    <div className="clearfix uiTokenizer uiInlineTokenizer"><b>TAGS</b>
                        <div className="tokenarea" id="tokenarea">
                                {
                                    tags.tags.map((tag, i) => {
                                return (
                                
                                    <span className="removable uiToken">
                                        <span className="uiTokenText">{tag.tag}</span>
                                       { ( 
                                           view ? '' :
                                        <div><input name="tags[]" id="feature" autoComplete="off" type="hidden" value={tag.tag}/>
                                        <a href="#" aria-label="Remove j" className="remove uiCloseButton uiCloseButtonSmall" style={{textDecoration: 'none',}} id="remove">×</a>
                                        </div>
                                       )
                                       }
                                    </span>
                                )
                    
                })
        }
                          
                        </div>
                        { ( 
                                           view ? '' :
                        <div className="uiTypeahead" id="js_8">
                            <div className="wrap">
                                <input type="hidden" autoComplete="off" className="hiddenInput" value=""/>
                                <div className="innerWrap">
                                    <input type="text" className="inputtext textInput" id="inputtext" style={{width: '20px',border:'none',outline:'none'}}/>
                                    <div className="uiContextualLayerPositioner uiLayer hidden_elem" data-ownerid="js_e" style={{'width': '454px', 'left': '26px'}}>
                                        <div className="uiContextualLayer uiContextualLayerBelowLeft">
                                            <div style={{'width': '34px'}}>
                                                <div className="uiTypeaheadView uiContextualTypeaheadView uiInlineTokenizerView hidden_elem">
                                                    <ul className="compact" id="typeahead_list_js_e" role="listbox">
    
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

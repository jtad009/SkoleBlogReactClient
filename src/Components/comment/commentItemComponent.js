import React from 'react';
import TimeAgo from 'react-timeago';
const CommentItem = ({comments})=>{
    return (
        <div className="" style={{minHeight: '200px', overflow: 'hidden', width: 'auto',borderTop:'2px solid #ccc'}}>
            { comments.length > 0 ? 
                comments.map((comment, i) =>{
                    return (
                        <dl className="dl-horizontal bg-grey p-1" style={{marginBottom: '0px'}} key={comment.id}>
                            <dt className="bg-grey pl-2 mt-3">{comment.name}<span className="pull-right text-muted pr-2 small" style={{float:'right'}}>{ <TimeAgo date={comment.created} />}</span></dt>
                            <dd className="bg-grey pl-2 mt-1" style={{marginBottom: '0px',borderBottom: 'thin solid #ededed'}}>
                                <p style={{marginBottom: '1px'}}>{comment.comment} </p>
                            </dd>
                        </dl>
                    )
                })
                :<p className="p-3">No Comment</p>
           
            }
                                  
                               
                            </div>
    );
}
export default CommentItem;
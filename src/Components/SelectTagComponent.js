import React,{useContext} from 'react';
import { BlogContext } from '../Store/Store';

const SelectTag = (props) => {
    
    const {tagChange} = useContext(BlogContext);
    return (
            <select className="form-control" key="tags" onChange={tagChange}>
                <option key="tag23"  value=""> Filter by tag </option>
                {
                    props.tags.map((tag, i) => {
                        return (
                            <option key={props.tags[i].id} id={props.tags[i].id} value={props.tags[i].id}> 
                            {props.tags[i].tag}
                            </option>
                            
                        )
                    })
                }
            </select>
        );
    
   
}

export default SelectTag;

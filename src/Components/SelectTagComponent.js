import React,{Component} from 'react';

class SelectTag extends Component{
    

    render(){
        return (
            <select className="form-control" key="tags" onChange={this.props.onchange}>
                <option key="tag23"  value=""> Filter by tag </option>
                {
                    this.props.tags.map((tag, i) => {
                        return (
                            <option key={this.props.tags[i].id} id={this.props.tags[i].id} value={this.props.tags[i].id}> 
                            {this.props.tags[i].tag}
                            </option>
                            
                        )
                    })
                }
            </select>
        );
    }
   
}

export default SelectTag;

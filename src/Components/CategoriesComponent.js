import React, { Component } from 'react';

import { BlogContext } from '../Store/Store';
class SelectCategory extends Component {
    static contextType = BlogContext;
    componentDidUpdate(){
        //THIS IS SET from THE EDIT COMPOMENT
        if(this.props.defaultValue !== undefined){
            document.querySelector('#category_id').value = this.props.defaultValue
        }
    }
    render() {
        const { onCategoryChange } = this.context;
        
        return (
            <select className="form-control mb-3" key="cats" onChange={onCategoryChange} name="category_id" id="category_id">
                <option key="cat23" value=""> Filter by category </option>
                {
                    this.props.categories.map((tag, i) => {
                        return (
                            <option key={this.props.categories[i].id} id={this.props.categories[i].id} value={this.props.categories[i].id}>
                                {this.props.categories[i].category}

                            </option>

                        )
                    })
                }
            </select>
        );
    }

}

export default SelectCategory;

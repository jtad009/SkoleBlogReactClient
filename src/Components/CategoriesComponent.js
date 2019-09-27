import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { BlogContext } from '../Store/Store';
class SelectCategory extends Component {
    static contextType = BlogContext;
    render() {
        const { onCategoryChange } = this.context;
        return (
            <select className="form-control mb-3" key="cats" onChange={onCategoryChange}>
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

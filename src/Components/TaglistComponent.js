import React, { Component } from 'react';
import Tag from './TagComponent';
import TagsV2 from './TagsV2'

class Taglist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag_id: '',
          
        };
    }

    handleTagClick = (event) => {
        event.preventDefault();
        this.setState({
            tag_id: event.target.id
        });
    };

    render() {
        return (
            <TagsV2 tags={this.props.tags}     />
            // this.props.tags.map((tag, i) => {

            //     return (
                    
            //         <Tag tag={this.props.tags[i].tag} id={this.props.tags[i].id}  count={this.props.tags[i].count} key={this.props.tags[i].id}  />
            //     )
            // })
        );





    }
}
export default Taglist;

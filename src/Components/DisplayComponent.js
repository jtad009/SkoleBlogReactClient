import React from 'react';
import CardList from './CardListComponent';
import BlogContext from '../Store/Store';
class DisplayComponent extends React.Component {

    render() {
        console.log(this.context);
        return (
            <BlogContext.Consumer>
                {
                    (currentContext) => {
                        console.log("COnsumer "+currentContext.sortByCategory);
                            // <div className="col-lg-8 col-md-10 mx-auto">
                            //     <CardList posts={this.props.filteredArticle} />
                            //  </div>
                }
            }
            </BlogContext.Consumer>

        );
    }
}
export default DisplayComponent;
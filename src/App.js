import React from 'react';

import Display from './Components/DisplayComponent';
import { BlogContext } from './Store/Store'
class App extends React.Component {
    static contextType = BlogContext;
    constructor() {
        super();



    }
    componentDidMount() {


    }
    onSearchChanged = (event) => {

        this.setState({
            searchField: event.target.value
        });
    }
    render() {

        // const filteredArticle = this.state.articles.filter(articles => {
        //     return articles.title.toLowerCase().includes(this.state.searchField.toLowerCase())
        // });
        return (

            <Display />

        );
    }

}
export default App;

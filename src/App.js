import React from 'react';
import Sidebar from './Components/SidebarComponent';
import Display from './Components/DisplayComponent';
import CategoriesComponent from './Components/categories/categoryComponent';
import { BlogContext } from './Store/Store'
class App extends React.Component {
    static contextType = BlogContext;

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
            <div className="row">

                 <div className="col-sm-12 mb-2 categories"><CategoriesComponent  /></div>  
           
                <Sidebar />
                <Display />
            </div>
        );
    }

}
export default App;

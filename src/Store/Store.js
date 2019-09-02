import React,{Component, createContext} from 'react'

const BlogContext = createContext();
class ArticleContextProvider extends Component{
    BlogState = {
        sortByCategory: false,
        filterCriteria: '',
        articles: [],
        article: {}
    }
    render(){
        return(
            <BlogContext.Provider value={{...this.state}}>
                {this.props.children}
            </BlogContext.Provider>
        );
    }
}

export default ArticleContextProvider;
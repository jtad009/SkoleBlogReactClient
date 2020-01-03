import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './Components/HeaderComponent';
import Navbar from './Components/NavComponent';
import ArticleContextProvider, { BlogContext } from './Store/Store'
// const {Provider, Consumer} = React.createContext()
import Fab from './Components/FabComponent';
import Container from './Components/Author/ContainerComponent';
import Register from './Components/Author/RegisterComponent';
import AddArticle from './Components/Author/ArticleAddComponent';
import ViewComponent from './Components/viewComponent';
ReactDOM.render(
    <ArticleContextProvider>
        <Router>
        
           
        <div>
            <Navbar/>
            <Header/>
            <Route path='/view/:slug' exact strict component={ViewComponent}  />
            <Route path='/auth' exact strict component={Container} />
            <Route path='/register' exact strict component={Register} />
            <Route path='/write' exact strict component={AddArticle} />
            
            <div className="container-fluid mt-3">
                {/* <div className="row"> */}
                   
                    
                    <Route path='/' exact strict component={App}/>
                    <Fab/>
                        
                    
                {/* </div> */}
            </div>
        </div>
        
    </Router>


    </ArticleContextProvider>
     , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();

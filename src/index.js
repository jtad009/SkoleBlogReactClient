import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/HeaderComponent';
import Navbar from './Components/NavComponent';
import ArticleContextProvider from './Store/Store'

import Fab from './Components/FabComponent';
import Container from './Components/Author/ContainerComponent';
import Register from './Components/Author/RegisterComponent';
import AddArticle from './Components/Author/ArticleAddComponent';
import ViewComponent from './Components/viewComponent';
import UserProfile from './Components/Author/UserComponent';
import { Offline } from "react-detect-offline";

ReactDOM.render(
    <ArticleContextProvider>
        <Router>


            <div>

                <Navbar />
                <Header />
                <Offline >
                    <div className="row">
                        <div className="col-sm-12" style={{ position: 'absolute', marginTop: '-130px' }}>
                            <div id="react-toast" className="Toaster"><span className="Toaster__manager-top-left"></span><span className="Toaster__manager-top">
                                <div className="Toaster__message" style={{ opacity: '1', height: '72px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div className="Toaster__message-wrapper mt-3" style={{ transform: 'translateY(0%) scale(1)', pointerEvents: 'auto' }}>
                                        <div data-reach-alert="true">
                                            <div id="1" className="Toaster__alerts alert alert-danger" >
                                                <div className="Toaster__alert_text">
                                                    Currently offline. Check internet connection</div>
                                                <button className="Toaster__alert_close" type="button" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            </div>
                        </div>
                    </div>
                </Offline>
                <Route path='/view/:slug' exact strict component={ViewComponent} />
                <Route path='/auth' exact strict component={Container} />

                <Route path='/register' exact strict component={Register} />
                <Route path='/write' exact strict component={AddArticle} />

                <div className="container-fluid mt-3">
                    {/* <div className="row"> */}

                    <Route path='/user/:username' exact strict component={UserProfile} />
                    <Route path='/' exact strict component={App} />
                    <Fab />


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

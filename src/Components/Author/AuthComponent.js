import React, {useContext, useState} from 'react';
import Register from './RegisterComponent';
import {Link,Switch,Route, Redirect} from 'react-router-dom';
import { BlogContext } from '../../Store/Store';
import { BallBeat } from 'react-pure-loaders';
import App from '../../App';
import toaster from 'toasted-notes';
const Auth = (props ) => {
    const {changeUserValues,login, loggedIN,loginLoading, authError} = useContext(BlogContext);
    const [loading, setLoading] = useState(false);
    if(loggedIN){
       
       return (
           <Switch>
                <Redirect to='/'/>
               <Route path="/" exact strict component={App}/>
           </Switch>
       )
    }
    return (
        
        <div>
            {authError ? <div className="col-sm-6 mx-auto mt-5">
                <div className="alert alert-danger" onclick="this.classList.add('hidden');">Authentication error, you have supplied wrong credentials. Try Again or contact your admin.</div>
            </div>: <p></p>}
        <div className="card card-login mx-auto mt-1 ">
     
            <div className="card-body">
                 <h4 className="card-title text-center big">LOGIN<hr className="line"/></h4>
                <form onSubmit={login} method="post" acceptCharset="utf-8" action="/skole/blog/authors/login"><div style={{display:"none"}}><input type="hidden" name="_method" value="POST"/></div>         
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input onChange={changeUserValues} className="form-control" id="username" type="text" name="username" aria-describedby="emailHelp" placeholder="Enter username"/>
                        </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input className="form-control" onChange={changeUserValues} id="password" type="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox"/> Remember Password</label>
                        </div>
                    </div>
                   
                   { loginLoading ? <h4 className="text-muted text-center"> <BallBeat color="#379392" loading={loginLoading} /> </h4>: 
                <input className="btn btn-primary btn-block" type="submit" value="Login"/>}
                </form>       
                <div className="text-center">
                        <a href="/register" className="pull-right mt-3 small text-danger" style={{float:'right'}}>Author Registration</a>      
                        <Route path='/register' exact strict component={Register} />   
                        <a href="/skole/blog/users/forgot" className="pull-right small mt-3 mr-3 text-danger" style={{float:'right'}}>Forgot Password?</a>          
                </div>
       
             </div>
        </div>
        </div>
    );
}

export default Auth;

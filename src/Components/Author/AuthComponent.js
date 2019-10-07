import React, {useContext} from 'react';

const Auth = () => {
    return (
        <div className="card card-login mx-auto mt-1">
     
            <div className="card-body">
                 <h4 className="card-title text-center big">LOGIN<hr className="line"/></h4>
                <form method="post" accept-charset="utf-8" action="/skole/blog/authors/login"><div style={{display:"none"}}><input type="hidden" name="_method" value="POST"/></div>         
                        <div className="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input className="form-control" id="exampleInputEmail1" type="text" name="username" aria-describedby="emailHelp" placeholder="Enter username"/>
                        </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input className="form-control" id="exampleInputPassword1" type="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox"/> Remember Password</label>
                        </div>
                    </div>
                    <input className="btn btn-primary btn-block" type="submit" value="Login"/>
                    
                </form>       
                <div className="text-center">
                        <a href="/skole/blog/authors/add" className="pull-right mt-3 small text-danger">Author Registration</a>         
                        <a href="/skole/blog/users/forgot" className="pull-right small mt-3 mr-3 text-danger">Forgot Password?</a>          
                </div>
       
             </div>
        </div>
    );
}

export default Auth;

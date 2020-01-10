import React,{useContext} from 'react';
import { BlogContext } from '../../Store/Store';
const Register = () => {
    const {registerAuthor} = useContext(BlogContext);
    return (
        <div className="container pb-2">
        <div className="row">
        <div className="col-lg-10 col-md-10 mx-auto">
            <div className="col-lg-12 mt-3">

                                                
               

                <div className="users card">
                    <form enctype="multipart/form-data" method="post" acceptCharset="utf-8" id="contact" onSubmit={registerAuthor} action="/skole/blog/authors/add">
                        <div style={{display:'none'}}><input type="hidden" name="_method" value="POST"/>></div>                   
                     <fieldset className="card-body">
                        <h4 className="card-title text-center">New Author                            <hr/>
                        </h4>
                        <div className="input text required">
                            <label for="first-name">First Name</label>
                            <input type="text" name="first_name" className="form-control" required="required" maxlength="200" id="first_name"/>
                        </div>
                        <div className="input text required"><label for="last-name">Last Name</label>
                        <input type="text" name="last_name" className="form-control" required="required" maxlength="200" id="last-name"/>
                        </div>
                        <div className="input email"><label for="email">Email</label>
                        <input type="email" name="email" className="form-control" maxlength="200" id="email"/>
                        </div>
                        <div className="input file"><label for="image">Image</label>
                        <input type="file" name="image" className="form-control" id="image"/>
                        </div>
                        <div className="input text required"><label for="username">Username</label>
                        <input type="text" name="username" className="form-control" required="required" maxlength="200" id="username"/>
                        </div>
                        <div className="input password"><label for="password">Password</label>
                        <input type="password" name="password" className="form-control" id="password"/>
                        </div>
                        <div className="input textarea required"><label for="bio">Bio</label>
                            <textarea name="bio" className="form-control" required="required" id="bio" rows="5"></textarea>
                        </div>                    
                                <br/>
                       
                       
                        <button className="btn btn-block btn-primary" id="submit"  type="submit">SAVE USER</button>            
                                </fieldset>

                    </form>               
                     </div>
            </div>
        </div>
    </div>
    </div> 
    );
}

export default Register;

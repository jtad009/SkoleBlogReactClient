import React, { useContext, useState } from 'react';
import { BlogContext } from '../../Store/Store';
import {editAuthor} from '../../article';
import toast from 'toasted-notes';
import { addData,clearStore } from "../../db";
import { BallPulseSync } from 'react-pure-loaders';
import {  FaPlus } from 'react-icons/fa';
const EditUser = ({closeModal})=>{
    const { user } = useContext(BlogContext);
    const [loading, setLoading] = useState(false);
    var image;
    if (Object.keys(user).length > 1) {
        image = new Image();
        image.src = `https://skole.com.ng/img/passport/author/${user.image}`;
        image.onload = function () {};
        image.onerror = function () {
            //if image doesnt load then replace it with the avatar
            document.querySelector('#profileImage').src = '/img/avatar.png';
            
        };
    }else{
        image = new Image();
        image.src = '/img/avatar.png';
    }
    const triggerFileUpload = ()=>{
        document.getElementById('image').click();
    };
    const updateProfile = (event)=>{
        event.preventDefault();
        setLoading(true);
        const data = new FormData(event.target);
        data.append('ak',user['public_key']);
        editAuthor(user['public_key'],user.user_code,data)
        .then(response=>{
            setLoading(false);
            
           
            let code = response.data.response.code;
            if(code === 200){
                toast.notify("Profile updated");
                let user = response.data.response.data;
                
                clearStore('users')
                addData('users', user);
                closeModal();
            }
           
        })
        .catch(err=>{
            setLoading(false);
            toast.notify(`Error updating profile ${err}`);
        });
        
        
    }
    return(
        
        <div className="users card">
        <form enctype="multipart/form-data" method="post" acceptCharset="utf-8" id="contact"  onSubmit={updateProfile} action="/skole/blog/authors/add">
            <div style={{display:'none'}}><input type="hidden" name="_method" value="POST"/>></div>    
            <div className="mx-auto" onClick={triggerFileUpload}>
                <img src={image.src} id="profileImage" className="img-fluid " data-tip="view profile" alt="" style={{marginLeft:'45%', borderRadius: '50%', border: '2px solid rgb(55, 147, 146)', height: '120px' }} />               
                <div className="imageUploadDiv"><FaPlus size='12'/></div>
            </div>
         <fieldset className="card-body">
            
            <div className="input text required">
                <label for="first-name">First Name</label>
                <input type="text" name="first_name" className="form-control" required="required" maxlength="200" id="first_name" defaultValue={user.first_name}/>
            </div>
            <div className="input text required"><label for="last-name">Last Name</label>
            <input type="text" name="last_name" className="form-control" required="required" maxlength="200" id="last-name" defaultValue={user.last_name}/>
            </div>
            <div className="input email"><label for="email">Email</label>
            <input type="email" name="email" className="form-control" maxlength="200" id="email" defaultValue={user.email}/>
            </div>
            <div className="input file" style={{display:'none'}}><label for="image">Image</label>
            <input type="file" name="image" className="form-control" id="image"/>
            </div>
            <div className="input text required"><label for="username">Username</label>
            <input type="text" name="username" className="form-control" required="required" maxlength="200" id="username" defaultValue={user.username}/>
            </div>
            {/* <div className="input password"><label for="password">Password</label>
            <input type="password" name="password" className="form-control" id="password" defaultValue={user.password}/>
            </div> */}
            <div className="input textarea required"><label for="bio">Bio</label>
             <textarea name="bio" className="form-control" required="required" id="bio" rows="5" defaultValue={user.bio}></textarea>
            </div>                    
                    <br/>
           
           
    {loading ?<h4 className="text-muted text-center"> <BallPulseSync color="#379392" loading /></h4> : <button className="btn btn-block btn-primary" id="submit"  type="submit">UPDATE USER</button>            }
                    </fieldset>

        </form>               
         </div>
    );
}

export default EditUser;
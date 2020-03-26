import React from 'react';
const UserCard = (user, isLoggedin = false) => {
    console.log(user)
    const capName = (name) => {
        return name.charAt(0).toUpperCase()+name.slice(1)
    }
    return (
        <div className="  mt-3 mb-3">
          <div className="row">
             <div className="col-sm-10 p-0">
              <ul className="list-group">
                <li className="list-group-item text-muted" contenteditable="false"><b>About Author</b>
                    {  (isLoggedin  == true ? <span><a href="/skole/blog/users/edit/3" className="btn btn-primary pull-right text-white" style={{float: "right"}}>Edit Profile</a> </span>: '')}
                </li>
                <li className="list-group-item text-right"><span className="pull-left" style={{float:"left"}}><strong className="">Name: </strong></span> {capName(user.user.first_name)+ " "+ capName(user.user.last_name)}</li>
               
                  <div className="col-sm-12 mt-2" style={{
    'padding': '.75rem 1.25rem'
}}>
                        <h4>Bio</h4>
                        <p>{user.user.bio}</p>
                    </div>

            </ul>
             </div>
             <div className="col-sm-2">
                  <a href="#" className="pull-right">

                  
                   <img src="/img/avatar.png" className="img  img-fluid " title="profile image" alt="" height="200"/>              </a>
            </div>
          </div>
           
            
            <br/>
   
   
      
</div>
    )
}

export default UserCard;

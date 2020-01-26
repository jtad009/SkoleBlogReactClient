import React, { useContext, useState } from 'react';
import {BlogContext} from '../../Store/Store';
import CardList from '../CardListComponent';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import EditUser from './editUserComponent';
import {Link,Switch,Route, Redirect} from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import App from '../../App';
const UserProfile = () => {
    const { user, articles } = useContext(BlogContext);
    const [openSheet, setOpenSheet] = useState(false);
    const myData = articles.filter(article=>{
        return (article.user_id == user.user_code);
    });
    
    const styles={
        title:{
            backgroundColor: 'rgb(220, 53, 69)',
            padding: '16px 0',
            boxSizing: 'border-box',
            color: 'white',
            minHeight: '64px',
            fontSize: '24px',
            textAlign: 'center',
            flex:1
        },
        text:{
            padding: '10px',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            fontSize: '18px',
            minHeight: '50vh'
        }
    };
    const openBSheet = (e)=>{
        // e.preventDefault();
        setOpenSheet(!openSheet);
        console.log(document.querySelector('nav'))
        if(openSheet === true){
            console.log(openSheet)
            
            document.querySelector('nav').style.display='block'
        }else{
            console.log(openSheet)
            
            document.querySelector('nav').style.display='none';
        }
       
    }
   
        if(Object.keys(user) < 1){
            
            return (
                <Switch>
                     <Redirect to='/'/>
                    <Route path="/" exact strict component={App}/>
                </Switch>
            )
        }else{
            return (<div>
            <div className="row ">
                
                <div className="col-md-3 mt-2">
                <div className="card">
                    <ul className="list-group">
                        <li className="list-group-item text-muted" ><button onClick={openBSheet} className="btn btn-primary text-white" style={{float:'right', color:'white'}}><FaUserEdit/> Edit Profile</button></li>
                        <li className="list-group-item text-justify"><span className="pull-left"><strong className="">Name: </strong></span> {user.last_name} {user.first_name}</li>
                        <li className="list-group-item text-justify"><span className="pull-left"><strong className="">Username: </strong></span> {user.username}</li>
                        <li className="list-group-item  text-justify"><span className="pull-left"><strong className="">Article Count: </strong></span> {user.article_count}</li>
                        <div className="col-sm-12 mt-2">
                            <h4>Bio</h4>
                            <p>{user.bio}</p>
                        </div>

                    </ul>
                </div>
                </div>
                <div className="col-md-9 mt-2">  {<CardList posts={myData}/> }  </div>
              
            </div>
            <SwipeableBottomSheet
                    // overflowHeight={64}
                    
					open={openSheet}
                    onChange={openBSheet}
                    fullscreen
				>
					<div style={styles.title}>
						Profile
						<button onClick={openBSheet} className="btn btn-sm btn-primary" style={{float: 'right', marginRight: '10px'}}>
							{openSheet ? 'Close' : 'Open'}
						</button>
					</div>
					<div style={styles.text}>
						<EditUser closeModal={openBSheet}/>
					</div>
				</SwipeableBottomSheet>
        </div>
        );
        }

}
export default UserProfile;

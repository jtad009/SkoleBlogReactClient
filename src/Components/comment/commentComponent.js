import React, { useContext, useState } from 'react';
import { FaLocationArrow,FaComments } from 'react-icons/fa';
import { postComment, addAuthor } from '../../article';
import { BlogContext } from '../../Store/Store';
import Popup from "reactjs-popup";
import { BallBeat, BallPulseSync, BallScaleMultiple } from 'react-pure-loaders';
import { addData, clearStore } from '../../db';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import CommentItem from './commentItemComponent';
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';
const CommentComponent = ({ article_id, comments }) => {
    const { user } = useContext(BlogContext);
    const [isOpen, setisOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sendingComment, setSendingComment] = useState(false);
    const mailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$/;
    const [error, setError] = useState(false);
    const styles = {
        title: {
            backgroundColor: 'rgb(220, 53, 69)',
            padding: '16px 0',
            boxSizing: 'border-box',
            color: 'white',
            minHeight: '64px',
            fontSize: '24px',
            textAlign: 'center'
        },
        colouredDiv: hue => ({
            height: '100px',
            backgroundColor: `hsl(${hue % 360}, 80%, 80%)`
        })
    };
    const checkEmail = (event) => {
        if (mailPattern.test(event.target.value)) {
            setError(false)
            document.querySelector('.email').classList.remove('is-invalid');
        } else {
            setError(true);
            document.querySelector('.email').classList.add('is-invalid');
        }

    };
    const wordCount = (event) => {
        console.log(user['public_key']);
        if (event.target.value.length < 6) {
            event.target.classList.add('is-invalid')
            setError(true)
        } else {
            event.target.classList.remove('is-invalid')
            setError(false)
        }
    };
    const saveComment = (event) => {

        if (document.querySelector('.commentBox').value.length > 1) {
            if (Object.keys(user).length > 1) {
                setSendingComment(true)
                let commentData = {
                    comment: document.querySelector('.commentBox').value,
                    name: user['first_name'] + ' ' + user['last_name'],
                    username: user['username'],
                    email: user['email'],
                    article_id: article_id,
                    website: 'blog.skole.com.ng',
                    published: 0
                }
                postComment(user['public_key'], commentData)
                    .then(response => {
                        setSendingComment(false);
                        if (response.data.response.code === 200) {
                            document.querySelector('.commentBox').value="";
                            toast.notify("Comment is  saved and will be published after administrator confirms")
                        }
                    });
            } else {
                setisOpen(true)
            }
        } else {
            toast.notify("Cannot post an empty comment");
            document.querySelector('.commentBox').focus();
        }




    };
    const closeModal = () => {
        setisOpen(false);
    };
    const registerAndComment = () => {
        let fullname = document.querySelector('.fullname').value;
        let email = document.querySelector('.email').value;
        let password = document.querySelector('.password').value;
        let username = fullname.trim().split(' ');
        let newuser = {
            username: username.join('-'),
            first_name: username.length > 1 ? username[0] : fullname,
            last_name: username.length > 1 ? username[1] : '',
            email: email,
            bio: "Normal user",
            password: password,
            canWrite: 0
        }
        setLoading(true);

        addAuthor(newuser)

            .then(resp => {
                setLoading(false);
                
                if (resp.data.response.code === 200) {
                    clearStore('users');
                    addData('users', resp.data.response.data);
                    toast.notify("New user added, sending comments please wait !");
                    if (Object.keys(resp.data.response.data).length > 1) {
                        let commentData = {
                            comment: document.querySelector('.commentBox').value,
                            name: resp.data.response.data['first_name'] + ' ' + resp.data.response.data['last_name'],
                            username: resp.data.response.data['username'],
                            email: resp.data.response.data['email'],
                            article_id: article_id,
                            website: 'blog.skole.com.ng',
                            published: 0
                        }
                        closeModal();
                        setSendingComment(true);
                        postComment(resp.data.response.data['public_key'], commentData)
                            .then(response => {
                                setSendingComment(false);
                                if (response.data.response.code === 200) {
                                    document.querySelector('.commentBox').value="";
                                    toast.notify("Comment is  saved and will be published after administrator confirms")
                                }
                            });
                    }
                    // postComment("israeledet")
                }
            })
            .catch(err =>{
                console.log(err);
            })
    };
    return (

        <SwipeableBottomSheet overflowHeight={64} marginTop={98}    >
            <div style={styles.title}>
                <FaComments/> COMMENTS
        </div>
            <div className="bg-white ">

                <div>
                    <Popup
                        open={isOpen}
                        closeOnDocumentClick
                        onClose={closeModal}
                        position="right center">
                        <div className="modals p-3">
                            <a className="close" onClick={closeModal}>                &times;             </a>
                            <h5 className="p-1">Enter details to post comment <hr /></h5>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-sm fullname " placeholder="enter fullname" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-sm email" onChange={checkEmail} required placeholder="enter email" />
                                <div className="invalid-feedback">
                                    Please provide a valid email.
                    </div>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control form-control-sm password" required placeholder="enter password" onChange={wordCount} />
                                <div class="invalid-feedback">
                                    password length must be greater than 6
                    </div>
                            </div>
                            <div className="form-group">
                                {error ? '' : (loading ? <h4 className="text-muted text-center"><BallPulseSync color="#379392" loading /></h4> : <button className="btn btn-sm btn-danger button btn-block" onClick={registerAndComment}>Post Comment</button>)}
                            </div>
                        </div>
                    </Popup>
                </div>
                <div style={{ height: '60px' }}>
                    <input type="text" placeholder="enter comment" className="form-control commentBox" onChange={wordCount} style={{ float: 'left', width: '90%', border: 'none', height: 'inherit', 'outline': 'none' }} />
                    <div style={{ float: 'left', width: '10%', height: '100%' }}>{sendingComment ? <BallScaleMultiple color="#379392" loading={sendingComment} /> : <button onClick={saveComment} className="btn btn-sm btn-danger button" style={{ borderRadius: '0px', width: '100%', height: '100%' }}><FaLocationArrow color="white" fontSize="20" /></button>}</div>
                </div>
                {<CommentItem comments={comments} />}
            </div>
        </SwipeableBottomSheet>
    );

}
export default CommentComponent;
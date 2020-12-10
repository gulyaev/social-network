import store from "../../redux/store";
import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//import {updateNewPostText} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
debugger;
    /*
    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 2, message: 'Blabla', likesCount: 23},
        {id: 2, message: 'Dada', likesCount: 23},
    ];
    */

    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer store={props.store} />
    </div>
}

export default Profile;

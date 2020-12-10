import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    debugger;
    let state = props.store.getState();

    let addPost = () => {
        //props.addPost();
        //let text = newPostElement.current.value;
        //alert('samuraijs.com');
        props.store.dispatch(addPostActionCreator());
        //newPostElement.current.value='';//зануляем - очищаем поле
        //props.updateNewPostText(' ');
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    //debugger;
    return (
      <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
      />
    )}

export default MyPostsContainer;

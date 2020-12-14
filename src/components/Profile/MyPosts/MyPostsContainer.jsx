import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            { (store)=>{
                let state = store.getState();

                let addPost = () => {
                    //props.addPost();
                    //let text = newPostElement.current.value;
                    //alert('samuraijs.com');
                    store.dispatch(addPostActionCreator());
                    //newPostElement.current.value='';//зануляем - очищаем поле
                    //props.updateNewPostText(' ');
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
            />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;

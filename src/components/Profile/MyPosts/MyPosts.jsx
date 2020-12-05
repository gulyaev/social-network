import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import state, {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    /*
    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 2, message: 'Blabla', likesCount: 23},
        {id: 2, message: 'Dada', likesCount: 23},
    ];
    */
    debugger;
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef(); //newPostElement - это специальная переменная, которая будет содержать ссылку на какой то элемент из JSX

    let addPost = () => {
        debugger;
        //props.addPost();
        //let text = newPostElement.current.value;
        //alert('samuraijs.com');
        props.dispatch(addPostActionCreator());
        //newPostElement.current.value='';//зануляем - очищаем поле
        //props.updateNewPostText(' ');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    //debugger;
    return <div className={s.postsBlock}>
        <h3>Мои посты</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>

        </div>
        <div className={s.posts}>
            { postsElements }
        </div>
    </div>
}

export default MyPosts;
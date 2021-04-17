import React, { memo } from "react";
import { Button, Form } from 'react-bootstrap';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLengthCr = maxLengthCreator(15);

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>My Posts</Form.Label>
				<Field className={classes.field} validate={[required, maxLengthCr]} component={Textarea} name={"newPostText"} placeholder={"Enter your post"} style={{ color: '#000' }} as="textarea" rows={3} />


			</Form.Group>
			<div className="text-right">
				<Button type="submit" className={'${classes["send-btn"]}'} variant="success" size="sm">Опубликовать</Button>
			</div>
		</form>
	)
}

const MyPostsReduxForm = reduxForm({
	// a unique name for the form
	form: 'ProfileAddNewPostForm'
})(AddNewPostForm)


const MyPosts = React.memo(
	(props) => {
		console.log("RENDER Yo");
		console.log(props);
		
		let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);
	
		let onSubmit = (formData) => {
			debugger;
			props.addPost(formData.newPostText);
		}
		return (
			<div className={classes.myPosts}>
				<MyPostsReduxForm onSubmit={onSubmit} />
				{postsElements}
			</div>
		)
	}
)

export default MyPosts;
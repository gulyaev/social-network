import React from "react";
import {Media } from 'react-bootstrap';
import classes from './Post.module.css';

const Post = (props) => {
	return <Media className={classes.myPostsMedia}>
				<img
					width={60}
					height={60}
					className={classes.roundedCircle}
					src="img/ReactJS.JPG"
					alt=""
				/>
				<Media.Body>
					<p>
						{props.message}
					</p>
				</Media.Body>
			</Media>
}

export default Post;
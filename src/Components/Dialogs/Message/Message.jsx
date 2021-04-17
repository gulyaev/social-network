import React from "react";
import { Media } from 'react-bootstrap';
import classes from './../Dialogs.module.css';

const Message = (props) => {
	return (
		<Media className={classes.message}>
			<img
				width={64}
				height={64}
				className={classes.roundedCircle}
				src="img/ReactJS.JPG" alt="Post title"
			/>
			<Media.Body>
				<p className={classes.friendName}>
					{props.name}
				</p>
				<p>
					{props.message}
				</p>
			</Media.Body>
		</Media>
	)
}

export default Message;
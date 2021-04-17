import React from "react";
import { ListGroup } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import classes from './../Dialogs.module.css';

const DialogItem = (props) => {
	return (
		<ListGroup.Item className={classes.listgroupitem}>
			<NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
		</ListGroup.Item>
	)
}

export default DialogItem;
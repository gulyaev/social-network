import React from "react";
import {Col, Card, ListGroup} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = () => {
	return <Col className={classes.aside} xs={8} sm={2} md={2} lg={{ span: 2, offset: 2 }}>
		<Card className={classes.card}>
			<ListGroup variant="flush">
				<ListGroup.Item><NavLink to="/profile">Моя страница</NavLink></ListGroup.Item>
				<ListGroup.Item><NavLink to="/dialogs">Сообщения</NavLink></ListGroup.Item>
				<ListGroup.Item><NavLink to="/users">Пользователи</NavLink></ListGroup.Item>
				<ListGroup.Item><NavLink to="/news">Лента</NavLink></ListGroup.Item>
				<ListGroup.Item><NavLink to="/music">Музыка</NavLink></ListGroup.Item>
				<ListGroup.Item><NavLink to="/settings">Настройки</NavLink></ListGroup.Item>
			</ListGroup>
		</Card>
	</Col>

}

export default Navbar;
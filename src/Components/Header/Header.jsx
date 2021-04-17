import React from "react";
import { Row, Col, Navbar } from 'react-bootstrap';
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";
import { NavDropdown, Nav } from 'react-bootstrap';

const Header = (props) => {
	return <Row>
		<Col className={classes.brandCol} xs={8} sm={8} md={8} lg={{ span: 8, offset: 2 }}>
		<Navbar.Brand className={classes.navbarBrand} href="/"><strong>WORKBEAUTY.ru</strong>
		</Navbar.Brand>
			<div className={classes.loginBlock}>
				{ props.isAuth 
				? <div>
						<NavDropdown title={props.login} id="nav-dropdown">
							<NavDropdown.Item onClick={props.logOutThunk} size="sm">Выйти</NavDropdown.Item>
						</NavDropdown>
				</div> 
				: <div>
					<Nav variant="tabs" activeKey="1">
						<Nav.Item>
							<Nav.Link eventKey="1" >
							<NavLink to={'/login'}> Войти </NavLink>
							</Nav.Link>
						</Nav.Item>
					</Nav>
					</div> }
			</div>
		</Col>
	</Row>
}

export default Header;
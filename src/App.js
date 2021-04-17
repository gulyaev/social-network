import React from "react";
import ReactDOM from 'react-dom';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Stars from "./Components/Stars/Stars";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import { Route } from 'react-router-dom';
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import { connect } from "react-redux";
import { initializeAppThunk } from "./redux/app-reducer";
import { withRouter } from "react-router-dom"; 
import { compose } from "redux";
import Preloader from "./Components/common/Preloader/Preloader";

class App extends React.Component { 
	componentDidMount () {
		this.props.initializeAppThunk();
	}

	render () {
		if (!this.props.initialized){
			return <Preloader />
		}
		
		return (
			<Container className='myContainer' fluid>
				<HeaderContainer />
				<Row className='MainRow'>
					<Navbar />
					<Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
					<Route path='/dialogs' render={() => <DialogsContainer store={this.props.store} state={this.props.state} dispatch={this.props.dispatch}/>} />
					<Route path='/users' render={() => <UsersContainer/>} />
					<Route path='/login' render={() => <LoginContainer/>} />
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default compose(
	withRouter,
	connect(mapStateToProps, {initializeAppThunk }))(App);
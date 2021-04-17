import { authAPI } from "../../api/api";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "./Login";
import { compose } from "redux";
import { Button } from 'react-bootstrap';
import { logOutThunk, logInThunk } from "../../redux/auth-reducer";
import classes from "../Login/Login.module.css";
import { Redirect } from 'react-router-dom';

class LoginContainer extends React.Component {

    logOut() {
        this.props.logOutThunk();
    }

    logIn(email, password, rememberMe) {
        this.props.logInThunk(email, password, rememberMe);
    }

    componentDidMount() {
        //this.props.logOutThunk();
    }

    render() {
        return (
            this.props.isAuth
                ? (
                    <>
                        <Redirect to={"/profile"} />

                        <div className={classes.divImage}>{this.props.login}</div>
                        <div className={classes.divBtn}>
                            <Button onClick={this.logOut.bind(this)} type={"submit"} variant="success" size="sm" style={{ width: '145px' }}>Выйти</Button>
                        </div>
                    </>
                )
                :
                <Login isAuth={this.props.isAuth} login={this.props.login} logInThunk={this.props.logInThunk} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default compose(
    connect(mapStateToProps, { logOutThunk, logInThunk }),
    withRouter
)(LoginContainer);

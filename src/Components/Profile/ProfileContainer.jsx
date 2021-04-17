import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; 
import Profile from "./Profile";
import { profileThunk, 
    getStatusThunk, 
    updateStatusThunk } from "../../redux/profile-reducer";
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class ProfileContainer extends React.Component {
    componentDidMount () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId=this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.profileThunk(userId);
        this.props.getStatusThunk(userId);
    }
    render() {
        console.log("RENDER PROFILE")
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusThunk = {this.props.updateStatusThunk} userId={this.props.authorizedUserId}/>
        )
    }
}

let mapStateToProps = (state) => {
    //console.log("mapStateToProps PROFILE")
    return ({
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            authorizedUserId: state.auth.userId,
            isAuth: state.auth.isAuth
        })
}

export default  compose(
	connect( mapStateToProps, { profileThunk, 
        getStatusThunk, 
        updateStatusThunk} ),
    withRouter
)(ProfileContainer);
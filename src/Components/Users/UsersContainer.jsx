import React from "react";
import { connect } from "react-redux";
import {followSuccess, 
        unfollowSuccess,
        getUsers,
        follow,
        unfollow } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import { getFake, getUsersFromState,  getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors";

class usersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        console.log("RENDER USERS")
        //debugger;
        return <>
                <div style={{clear:'left'}}>{this.props.isFetching ? <Preloader /> :  null}</div>
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow} 
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                    //fake={this.props.fake}
                    />
            </>
    }
}

/*
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
*/


let mapStateToProps = (state) => {
    console.log("mapStateToProps USERS")
    return {
        users: getUsersFromState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        //fake:getFake(state)
    }
}


let AuthRedirectComponentContainer = withAuthRedirect (usersContainer);

const UsersContainer = connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    getUsers,
    follow,
    unfollow
})(AuthRedirectComponentContainer);

export default compose(
    connect(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        getUsers,
        follow,
        unfollow
    })
)(usersContainer);
import React from "react";
import {Col} from 'react-bootstrap';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <Col className={classes.main} xs={8} sm={6} md={6} lg={6}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusThunk = {props.updateStatusThunk} userId={props.userId}/>
            <MyPostsContainer store={props.store}/>
        </Col>
    )
}

export default Profile;
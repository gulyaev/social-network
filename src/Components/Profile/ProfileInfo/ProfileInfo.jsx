import React from "react";
import { Card, Media } from 'react-bootstrap';
import Preloader from "../../common/Preloader/Preloader";
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			{/*
			<Card className={classes.thumbnail}>
				<Card.Img width={725} height={152} variant="bottom" src="img/people.jpg" alt="Post title" />
			</Card>*/}

			<Media>
				<img
					width={90}
					height={90}
					className={classes.mr - 3}
					src={props.profile.data.photos.large} alt="Profile photo"
					//src="img/ReactJS.JPG"
				/>
				<Media.Body>
					<h5 className={classes.mediaHeading}>{props.profile.fullName}</h5>
					<ProfileStatusWithHooks status={props.status} updateStatusThunk = {props.updateStatusThunk}/>
					<p>
						<ul>
							<li>Date of birth: 5 january</li>
							<li>About me: {props.profile.aboutMe}</li>
							<li>City: Boston</li>
							<li>Education: MIT</li>
							<li>Website: {props.profile.data.contacts.vk}</li>			
						</ul>
					</p>
				</Media.Body>
			</Media>
		</div>
	)
}

export default ProfileInfo;
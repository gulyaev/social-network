import React from "react";
import { Button, Col, Media, Row } from "react-bootstrap";
import classes from "../Users/Users.module.css";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator"
import Pagination from 'react-bootstrap/Pagination'

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {
    //debugger;
    

    return (<Col className={classes.main} xs={8} sm={6} md={6} lg={6}>
        <div className={classes.pagination}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
        </div>


        {props.users.map(u => <Media key={u.id} className={classes.media}>
            <div className={classes.divImage}>
                <NavLink to={"/profile/" + u.id}>
                    <img
                        width={105}
                        height={105}
                        className={classes.mr - 3}
                        src={u.photos.small != null ? u.photos.small : 'img/ReactJS.JPG'}
                        alt="Post title"
                    />
                </NavLink>
                <div className={classes.divButton}>
                    {u.followed
                        ? <Button disabled={props.followingInProgress.some(i => i === u.id)} onClick={() => {
                            props.unfollow(u.id);
                        }} className={'${classes["send-btn"]}'} variant="success" size="sm">Отписаться</Button>

                        : <Button disabled={props.followingInProgress.some(i => i === u.id)} onClick={() => {
                            props.follow(u.id);
                        }} className={'${classes["send-btn"]}'} variant="success" size="sm">Подписаться</Button>}

                </div>
            </div>
            <Media.Body>
                <div className={classes.borderBody}>
                    <Row xs={8} lg={8}>
                        <Col xs={12} lg={6} className={classes.Col1}>
                            <h5>{u.name}</h5>
                            <div>{u.status}</div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="text-right">{'u.location.city'}</div>
                            <div className="text-right">{'u.location.country'}</div>
                        </Col>
                    </Row>
                </div>
            </Media.Body>
        </Media>)}
    </Col>
    )
}
export default Users;
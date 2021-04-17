import React from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

export const withAuthRedirect = (Component) => {
    class RedirectComponentContainer extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>
        }
    }

    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth
    });
    
    let ConnectedAuthRedirectComponentContainer = connect(mapStateToPropsForRedirect)(RedirectComponentContainer);

    return ConnectedAuthRedirectComponentContainer;
}
import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import axios from "axios";
const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA';

let initialState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false   
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case  SET_USER_DATA:{
            return { ...state, ...action.data };
        }

        default:
            return state;
    }
}

export const setAuthUserData = (email, userId, login, isAuth) => ({type: SET_USER_DATA, data: {email, userId, login, isAuth}});

export const authThunk = () => { return async (dispatch) => {
        let data = await authAPI.authMe();
		
			if (data.resultCode === 0) {
				dispatch(setAuthUserData(data.data.email, data.data.id, data.data.login, true));
			}

    }
}

export const logInThunk = (email, password, rememberMe) => { return async (dispatch) => {
        let responce = await authAPI.logIn(email, password, rememberMe);

                if (responce.data.resultCode === 0) {
                    alert("Вы авторизовались");
                    dispatch(authThunk());
                } else {
                    let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Some Error";
                    dispatch(stopSubmit("login", {_error: message }));
                }
            
    }
}

export const logOutThunk = () => { return async (dispatch) => {
        let responce = await authAPI.logOut();
            
                if (responce.data.resultCode === 0) {
                    alert("Вы вышли");
                    dispatch(setAuthUserData(null, null, null, false));
                }
            
    }
}

export default authReducer;
import { profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const FAKE = 'FAKE';


let initialState = {
    postsData: [
        {id: 1, message: 'Hi! How are you?', likesCount: 18},
        {id: 2, message: 'It is my first post', likesCount: 35},
        {id: 3, message: 'Blabla', likesCount: 21},
        {id: 4, message: 'Dada', likesCount: 64}
    ],
    profile: null,
    status: '',
    fake: 10
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case FAKE: {
            return {
                ...state,
                fake: state.fake + 1
            };
        }
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 53
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status: status});

export const profileThunk = (userId) => {
    return(dispatch) => {
        profileAPI.getProfile(userId)
            .then(data=>{
                dispatch(setUserProfile(data));
            });
    }
}

export const getStatusThunk = (userId) => {
    return(dispatch) => {
        profileAPI.getStatus(userId)
            .then(responce=>{
                dispatch(setStatus(responce.data));
            });
    }
}


export const updateStatusThunk = (status) => {
    return(dispatch) => {
        profileAPI.updateStatus(status)
            .then(responce=>{
                if (responce.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export default profileReducer;
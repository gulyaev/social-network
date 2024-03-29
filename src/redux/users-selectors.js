import { createSelector } from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.usersData;
}

export const getUsersFromState =  createSelector(getUsersSelector, 
    (users)=>{
    return users.filter(u=>true);
});

/*
export const getUsersFromStateSuperSelector = createSelector(getUsersFromState, 
    (users) => {
    debugger;
    return users.filter(u=>true);
});
*/

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}

export const getFake = (state) => {
    //debugger;
    return state.profilePage.fake;
}
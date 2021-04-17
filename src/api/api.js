import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "9106630e-3486-4ac4-bef3-d310e40ec944"
    }
});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then (responce => responce.data);
    },
    follow (userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile (userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId);
            //.then (responce => responce.data);
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status});
    }
} 

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
            .then(responce => responce.data);
    },
    logIn (email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe});
    },
    logOut () {
        return instance.post(`auth/logout`);
    }
}
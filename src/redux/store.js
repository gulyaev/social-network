import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi! How are you?', likesCount: 18},
                {id: 2, message: 'It is my first post', likesCount: 35},
                {id: 3, message: 'Blabla', likesCount: 21},
                {id: 4, message: 'Dada', likesCount: 64}
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'John'},
                {id: 2, name: 'Pall'},
                {id: 3, name: 'Jeff'},
                {id: 4, name: 'Mike'},
                {id: 5, name: 'Alex'},
                {id: 6, name: 'Den'},
            ],

            messagesData: [
                {id: 1, name: 'John', message: 'Hi'},
                {id: 2, name: 'Pall', message: 'How are you?'},
                {id: 3, name: 'Jeff', message: 'Yo!'},
                {id: 4, name: 'Mike', message: 'Yo!'},
                {id: 5, name: 'Alex', message: 'Yo!'}
            ],
            newMessageText: ''
        }
    },
    _rerenderEntireTree() {
        console.log('state is changed - state изменен');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._rerenderEntireTree(this._state);
    }
}

export default store;
window.store = store;
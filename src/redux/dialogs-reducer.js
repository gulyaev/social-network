const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case  ADD_MESSAGE:
        {
            let newMessage = {
                id: 6,
                name: 'Lev Letto',
                message: action.newMessageText,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, name: 'Lev Letto', message: action.newMessageText,}]
            };
        }

        default:
        return state;
    }
}

export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;
import {profileReducer, addPostActionCrator} from "./profile-reducer";

it('length of posts should be incremented', ()=>{
    //1.test data
    let action = addPostActionCrator("it-kamasutra.com");
    let state = {
        postsData: [
            {id: 1, message: 'Hi! How are you?', likesCount: 18},
            {id: 2, message: 'It is my first post', likesCount: 35},
            {id: 3, message: 'Blabla', likesCount: 21},
            {id: 4, message: 'Dada', likesCount: 64}
        ]
    };

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect (newState.postsData.length).toBe(5);
});
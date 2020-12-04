import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => { //App - это переменная, являющаяся функцией, которая возвращает нам некую JSX - разметку (JSX - это джаваскриптовый HTML)
    /*let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 2, message: 'Blabla', likesCount: 23},
        {id: 2, message: 'Dada', likesCount: 23},
    ];*/

    /*let dialogs = [
        {id: 1, name: 'Slava'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Viktor'},
        {id: 7, name: 'Valera'}
    ];*/

    /*let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ];*/
    return (//div, который оборачивает весь сайт

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            */}


                    <Route path='/dialogs'
                           render={() => <Dialogs
                               store={props.store} /> }/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch = {props.dispatch}/>}/>
                    {/*<Route path='/news' render={ () => <News posts={props.posts} />}/>
            <Route path='/music' render={ () => <Music posts={props.posts} />}/>
            <Route path='/settings' render={ () => <Settings posts={props.posts} />}/>*/}

                </div>
            </div>

    );
}//функция которая возвращает JSX - разметку называется компонентой. Мы никогда ее не вызываем. Сейчас у нас здесь App - компонента. И компоненту эту мы вставляем  в index.js как тег.

export default App;

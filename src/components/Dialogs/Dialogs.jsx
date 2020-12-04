import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./ Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    /*let dialogs = [
        {id: 1, name: 'Slava'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Viktor'},
        {id: 7, name: 'Valera'}
    ];*/

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    /*let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ];*/
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);//новый массив из самих сообщений
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialogs}> {/*целиком страничка "сообщения"*/}
            <div className={s.dialogsItems}> {/*список контактов-сообщений*/}

                {dialogsElements}{/*вывод массива списока контактов-сообщений*/}

                {/*
                <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>
                <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>
                <DialogItem name={dialogs[4].name} id={dialogs[4].id}/>
                <DialogItem name={dialogs[5].name} id={dialogs[5].id}/>
                <DialogItem name={dialogs[6].name} id={dialogs[6].id}/>
                */}


                {/*
                <DialogItem name="Dima" id="2"/>
                <DialogItem name="Andrey" id="3"/>
                <DialogItem name="Sveta" id="4"/>
                <DialogItem name="Sasha" id="5"/>
                <DialogItem name="Viktor" id="6"/>
                <DialogItem name="Valera" id="6"/>
                */}

            </div>

            <div className={s.messages}> {/*само сообщение*/}
                <div>
                    {messagesElements} {/*вывод массива списока самих сообщений*/}
                </div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
                {/*
                <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>
                <Message message={messages[3].message}/>
                <Message message={messages[4].message}/>
                */}


                {/*
                <Message message="How is your IT-kamasutra?"/>
                <Message message="Yo"/>
                */}

            </div>
        </div>
    )
}

export default Dialogs;
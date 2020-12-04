import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => { //компонента отображающая сами сообщения
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;
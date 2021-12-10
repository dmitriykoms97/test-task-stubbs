import React from 'react';
import s from './chat.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {deleteMessage} from "../../redux/chat-reducer";

const Chat = () => {

    const message = useSelector((state: AppStateType) => state.chat.messageData)
    const dispatch = useDispatch()

    const onDeleteMessageClick = (id: string) => {
        dispatch(deleteMessage(id))
    }

    return (
        <div className={s.container}>
            {message.map(item => (
                <div className={s.messageBlock} onClick={() => onDeleteMessageClick(item.id)}>
                    <div className={s.messageText}>
                        {item.messageText}
                    </div>
                    <div className={s.timeOfSending}>
                        {item.timeOfSending}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chat;
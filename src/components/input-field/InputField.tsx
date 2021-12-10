import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import s from './inputField.module.css';
import send from './../../img/send.svg'
import {useDispatch} from "react-redux";
import {setNewMessage} from "../../redux/chat-reducer";

const InputField = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const addZero = (d: any) => {
        return (d < 10) ? '0' + d : d;
    }

    const getCurrentTime = (t: any) => {
        let h = addZero(t.getHours())
        let m = addZero(t.getMinutes())
        return `${h}:${m}`
    }

    const currentTime = getCurrentTime(new Date(Date.now()))

    const sendMessage = () => {
        dispatch(setNewMessage(value, currentTime))
        setValue('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            sendMessage();
        }
    }

    return (
        <div className={s.container}>
            <input
                placeholder='Message'
                className={s.inputField}
                value={value}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}/>
            <img src={send} alt="send" className={s.iconSend} onClick={sendMessage}/>
        </div>
    );
};

export default InputField;
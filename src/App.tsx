import React from 'react';
import './App.module.css';
import s from './App.module.css';
import Chat from "./components/chat/Chat";
import InputField from "./components/input-field/InputField";

function App() {
    return (
        <div className={s.container}>
            <Chat/>
            <InputField/>
        </div>
    );
}

export default App;

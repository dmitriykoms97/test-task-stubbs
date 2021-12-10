import {chatReducer} from "./chat-reducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    chat: chatReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
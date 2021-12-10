import {v1} from 'uuid';

type MessageDataType = {
    id: string
    timeOfSending: string
    messageText: string
}

const initialState = {
    messageData: [
        {
            id: '1',
            timeOfSending: '12:45',
            messageText: 'Hello worlddcwe wedfw ef ewfw efw fwe fw!',
        }
    ] as Array<MessageDataType>
}
export type InitialStateType = typeof initialState;

export const chatReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessageDataType = {
                id: v1(),
                timeOfSending: action.payload.time,
                messageText: action.payload.newMessageText,
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage]
            }
        case 'DELETE-MESSAGE':
            return {
                ...state,
                messageData: state.messageData.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export const setNewMessage = (newMessageText: string, time: string) => {
    return {
        type: 'ADD-MESSAGE',
        payload: {newMessageText, time}
    } as const
}

export const deleteMessage = (id: string) => {
    return {
        type: 'DELETE-MESSAGE',
        payload: {id}
    } as const
}

type ActionsTypes = ReturnType<typeof setNewMessage> | ReturnType<typeof deleteMessage>
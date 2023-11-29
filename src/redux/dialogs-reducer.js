
//Постоянные для работы с диалогами
const SELECT_DIALOG = 'SELECT-DIALOG';
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE';
const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';

// функция нахождения и присвоения нового id 
const newId = (arr) => {
    let workArr = arr;
    if (workArr.length === 0) {
        let idMax = 1;
        return idMax
    } else {
        let idMax = Math.max(...workArr.map(i => i.id));
        idMax = idMax + 1;
        return idMax
    }
}

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SELECT_DIALOG:
            state.dialogsData.forEach(element => {
                if (element.id === action.userId) {
                    let indexEl = state.dialogsData.indexOf(element);
                    state.dialogRenderData = state.dialogsData[indexEl];
                }
            })
            state.dialogFormActive = true;
            return state;
        case UPDATE_DIALOG_MESSAGE:
            state.dialogNewText = action.messageText;
            return state;
        case ADD_DIALOG_MESSAGE:
            let userId = state.dialogRenderData.id
            let messageObj = {
                id: newId(state.dialogRenderData.messagesUserData),
                message: state.dialogNewText,
            }

            state.dialogsData.forEach(element => {
                if (element.id === userId) {
                    element.messagesUserData.push(messageObj)
                }
            })
            state.dialogNewText = '';
            return state;

        default:
            return state;
    }
}

// Работа с диалогами - выбор диалога, обновление ввода сообщения, добавление сообщения
export const selectDialogCreator = (userId) => ({ type: SELECT_DIALOG, userId: userId })
export const updateTextMessageCreator = (newTextMessage) => ({ type: UPDATE_DIALOG_MESSAGE, messageText: newTextMessage })
export const addMessageCreator = () => ({ type: ADD_DIALOG_MESSAGE })

export default dialogsReducer
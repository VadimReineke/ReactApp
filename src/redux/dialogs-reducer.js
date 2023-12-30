
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

let initialState =  {
    // Массив в котором хранятся данные Пользователей для списка диалогов
    dialogsData: [
        {
            id: 1,
            name: 'User1',
            avatar: 'data:image/png;base64,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',
            messagesUserData: [
                { id: 1, message: 'Message 1' },
                { id: 2, message: 'Message 2' },
                { id: 3, message: 'Message 3' },
                { id: 4, message: 'Message 4' },
                { id: 5, message: 'Message 5' }
            ]
        },
        {
            id: 2,
            name: 'User2',
            avatar: 'data:image/jpeg;base64,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',
            messagesUserData: [
                { id: 6, message: 'Message 6' },
                { id: 7, message: 'Message 7' },
                { id: 8, message: 'Message 8' },
                { id: 9, message: 'Message 9' },
                { id: 10, message: 'Message 10' }
            ]
        },
        {
            id: 3,
            name: 'User3',
            avatar: 'data:image/jpeg;base64,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',
            messagesUserData: [
                { id: 11, message: 'Message 11' },
                { id: 12, message: 'Message 12' },
                { id: 13, message: 'Message 13' },
                { id: 14, message: 'Message 14' },
                { id: 15, message: 'Message 15' }
            ]
        },
        {
            id: 40,
            name: 'User4',
            avatar: 'data:image/png;base64,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',
            messagesUserData: [
                { id: 16, message: 'Message 16' },
                { id: 27, message: 'Message 27' },
                { id: 38, message: 'Message 38' },
                { id: 49, message: 'Message 49' },
                { id: 50, message: 'Message 50' }
            ]
        }
    ],
    // Отрисовка сообщений для каждого пользователя и заголовок по умолчанию если диалогов нет
    dialogRenderData: {
        id: 1,
        name: 'User1',
        avatar: '',
        messagesUserData: [
            { id: 1, message: 'Выберете пользователя что бы начать переписку' },
        ]
    },

    dialogNewText: '',
    dialogFormActive: false
}

const dialogsReducer = (state = initialState, action) => {

switch (action.type) {
        case SELECT_DIALOG: {
            state.dialogsData.forEach(element => {
                if (element.id === action.userId) {
                    state.dialogRenderData = element
                }
            })
           
            return {
                ...state,
                dialogFormActive: true,
                
            }
           
        }

        case UPDATE_DIALOG_MESSAGE: {
            return {
                ...state,
            dialogNewText: action.messageText
            }
        }

        case ADD_DIALOG_MESSAGE: {                
           return  {
                ...state,
                  dialogsData: state.dialogsData.map(element => {
                    if (element.id === state.dialogRenderData.id ) {  
                                         
                       return {...element,
                               messagesUserData: [...element.messagesUserData, {id: newId(element.messagesUserData), message: state.dialogNewText}]
                            }
                  }
                  return element
                }),

                dialogRenderData: { 
                    ...state.dialogRenderData,
                    messagesUserData: [...state.dialogRenderData.messagesUserData, {id:newId(state.dialogRenderData.messagesUserData), message: state.dialogNewText}]
                },

                dialogNewText: ''
            }  
        }


        default:
            return state;
    }
}

// Работа с диалогами - выбор диалога, обновление ввода сообщения, добавление сообщения
export const selectDialogCreator = (userId) => ({ type: SELECT_DIALOG, userId: userId})
export const updateTextMessageCreator = (newTextMessage) => ({ type: UPDATE_DIALOG_MESSAGE, messageText: newTextMessage })
export const addMessageCreator = () => ({ type: ADD_DIALOG_MESSAGE})

export default dialogsReducer
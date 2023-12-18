import React from "react";
import { addMessageCreator, selectDialogCreator, updateTextMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


// const DialogsContainer = (props) => {

//      let state = props.store.getState()

//      // для формы
//        let onMessageUpdate = (newTextMessage) => {
//         props.store.dispatch(updateTextMessageCreator(newTextMessage))
//        }

//        let onAddMessage = () => {
//         props.store.dispatch(addMessageCreator())
//        }

//        let stateForm = state.dialogsPage.dialogFormActive

//        // для рендеринга дилогов по пользователям
//        let usersDialog = state.dialogsPage.dialogsData // показывает все пользователей с которыми у нас есть диалоги
//        let userMessages = state.dialogsPage.dialogRenderData.messagesUserData // показывает все сообщения для выбранного пользователя

//        // Отображение диалога выбранного пользователя
//        let showUserDialog = (userId) => {
//         props.store.dispatch(selectDialogCreator(userId));
//     }

//     return (
//             <Dialogs 
//             //updateNewMessageText = {onMessageUpdate} 
//                      addMessage = {onAddMessage} 
//                      //initialMessageText = {state.dialogsPage.dialogNewText}
//                      //stateForm = {stateForm}
//                     // usersDialog = {usersDialog} 
//                     // userMessages = {userMessages} 
//                      showUserDialog = {showUserDialog}/>
//     )
// }

let mapStateToProps = (state) => {
  return {
    initialMessageText: state.dialogsPage.dialogNewText,
    stateForm: state.dialogsPage.dialogFormActive,
    usersDialog: state.dialogsPage.dialogsData, // показывает все пользователей с которыми у нас есть диалоги
    userMessages: state.dialogsPage.dialogRenderData.messagesUserData // показывает все сообщения для выбранного пользователя
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (newTextMessage) => {
      dispatch(updateTextMessageCreator(newTextMessage))
    },

    addMessage: () => {
      dispatch(addMessageCreator())
    },

    showUserDialog: (userId) => {
      dispatch(selectDialogCreator(userId))
    }

  }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;
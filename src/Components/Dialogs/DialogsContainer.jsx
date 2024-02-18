import { compose } from "redux";
import { withAuthNavigate } from "../../HOC/AuthNavigate";
import { addMessageCreator, selectDialogCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    initialMessageText: state.dialogsPage.dialogNewText,
    stateForm: state.dialogsPage.dialogFormActive,
    usersDialog: state.dialogsPage.dialogsData, // показывает все пользователей с которыми у нас есть диалоги
    userMessages: state.dialogsPage.dialogRenderData.messagesUserData, // показывает все сообщения для выбранного пользователя
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (messageText) => {
      dispatch(addMessageCreator(messageText))
    },

    showUserDialog: (userId) => {
      dispatch(selectDialogCreator(userId))
    }

  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Dialogs);
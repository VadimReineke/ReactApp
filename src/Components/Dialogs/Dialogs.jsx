import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./Message/DialogMessage";
import MessageForm from "./MessageForm/MessageForm";



//Создаем массив объектов пользователей и сообщений
// Используя map, преобразовываем эти массивы в новый в котором сразу будет массив и компонент с необходимыми пропсами

const Dialogs = (props) => {

    let dialogsArr = props.dialogsPage.dialogsData.map((el) =>  <DialogItem userName={el.name} id={el.id} userAvatar ={el.avatar} key={el.id} dispatch = {props.dispatch} />)   
    let messagesArr = props.dialogRenderData.messagesUserData.map((el) => <DialogMessage message = {el.message} key={el.id} />)

    let renderForm = () => {
                   if ( props.dialogsPage.dialogFormActive === true) {
                return <MessageForm  dispatch = {props.dispatch}
                                     initialMessageText = {props.dialogsPage.dialogNewText}
                                     />
           }
       }

    return (
   <div className={classes.dialogs}>
    <h2 className={classes.maintitle}>Dialogs</h2>
       <div className={classes.dialogsWrapper}>
        <ul className={`${classes.column} ${classes.leftColumn} ${classes.dialogList}`}>
               {dialogsArr}
        </ul>

        <div className={classes.dialogMessagesModule}>
        <ul className={`${classes.column} ${classes.dialogsMessages}`}>
                {messagesArr}               
        </ul>
                {renderForm()}
        </div>

       </div>

   </div> 
    )

}

export default Dialogs;
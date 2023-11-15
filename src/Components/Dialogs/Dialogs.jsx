import React from "react";
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


// вынесли чать кода в компоненты для упрощения. Используем пропсы для передачи данных id и userName
const DialogItem = (props) => {
    return (
        <li className={classes.dialogItem}><NavLink to={`/dialogs/${props.id}`}>{props.userName} </NavLink></li>
    )
}

const DialogMessage = (props) => {
    return (
        <li className={classes.dialogMessage} >{props.message}</li>
    )
}

//Создаем массив объектов пользователей и сообщений
// Используя map, преобразовываем эти массивы в новый в котором сразу будет массив и компонент с необходимыми пропсами

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'},
        {id: 3, name: 'User3'},
        {id: 4, name: 'User4'}
    ]

    let dialogsArr = dialogsData.map((el) =>  <DialogItem userName={el.name} id={el.id} />)

    let messagesData = [
        {id: 1, message: 'Message 1'},
        {id: 2, message: 'Message 2'},
        {id: 3, message: 'Message 3'},
        {id: 4, message: 'Message 4'},
        {id: 5, message: 'Message 5'}
    ]

    let messagesArr = messagesData.map((el) => <DialogMessage message = {el.message} />)

    return (
   <div className={classes.dialogs}>
    <h2 className={classes.maintitle}>Dialogs</h2>
       <div className={classes.dialogsWrapper}>
        <ul className={`${classes.column} ${classes.leftColumn} ${classes.dialogList}`}>
               {dialogsArr}
        </ul>

        <ul className={`${classes.column} ${classes.rightColumn} ${classes.dialogsMessages}`}>
                {messagesArr}
        </ul>
       </div>

   </div> 
    )

}

export default Dialogs;
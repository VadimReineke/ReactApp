import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./Message/DialogMessage";



//Создаем массив объектов пользователей и сообщений
// Используя map, преобразовываем эти массивы в новый в котором сразу будет массив и компонент с необходимыми пропсами

const Dialogs = (props) => {


    let dialogsArr = props.dialogsData.map((el) =>  <DialogItem userName={el.name} id={el.id} key={el.id} />)
    let messagesArr = props.messagesData.map((el) => <DialogMessage message = {el.message} key={el.id} />)

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
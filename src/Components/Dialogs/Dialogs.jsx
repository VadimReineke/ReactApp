import React from "react";
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialogs = () => {
    return (
   <div className={classes.dialogs}>
    <h2 className={classes.maintitle}>Dialogs</h2>
       <div className={classes.dialogsWrapper}>
        <ul className={`${classes.column} ${classes.leftColumn} ${classes.dialogList}`}>
            <li className={classes.dialogItem}><NavLink to="/dialogs/1">User1 </NavLink></li>
            <li className={classes.dialogItem}><NavLink to="/dialogs/2">User2 </NavLink></li>
            <li className={classes.dialogItem}><NavLink to="/dialogs/3">User3 </NavLink></li>
            <li className={classes.dialogItem}><NavLink to="/dialogs/4">User4 </NavLink></li>
        </ul>

        <ul className={`${classes.column} ${classes.rightColumn} ${classes.dialogsMessages}`}>
            <li className={classes.dialogMessage} >Message11</li>
            <li className={classes.dialogMessage} >Message21</li>
            <li className={classes.dialogMessage} >Message31</li>
            <li className={classes.dialogMessage} >Message41</li>

        </ul>
       </div>

   </div> 
    )

}

export default Dialogs;
import React from "react";
import classes from './Form.module.css'

const Form = (props) => {
    return (
        <form className={classes.form}>
            <textarea className={classes.textarea}></textarea>
            <button className={`${classes.addButton} ${classes.btnReset}`} type="button">{props.nameBtn}</button>
        </form>
    )
}

Form.defaultProps = {nameBtn: 'test'}


export default Form;
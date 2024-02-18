import React from "react";
import classes from './FormsControls.module.css';

export const Textarea = (props) => {
  const hasError = props.meta.error && props.meta.touched;
    return (
        <div className={classes.formControl}>
            <textarea {...props.input} className={classes.textarea + " " + (hasError ? classes.error : "")}/>
            { hasError &&
            <div className={classes.errorWrapper}>
                 <span>{props.meta.error}</span>
            </div>
            }
        </div>
    )
}

export const Input = ( props) => {
    const hasError = props.meta.error && props.meta.touched;
    return (
        <div>
            <input {...props.input} className={classes.input + " " + (hasError ? classes.error : "")}/>
            { hasError &&
            <div className={classes.errorWrapper}>
                 <span>{props.meta.error}</span>
            </div>
            }
        </div>
    )
}
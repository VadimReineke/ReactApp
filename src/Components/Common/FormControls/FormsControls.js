import React from "react";
import classes from './FormsControls.module.css';

const FormControl = ({input, ...props}) => {
    const hasError = props.meta.error && props.meta.touched;
    return (
        <div className={classes.formControl}>
            <div {...props.input} className={classes.textarea + " " + (hasError ? classes.error : "")}>
               {props.children}
            </div>
            { hasError &&
            <div className={classes.errorWrapper}>
                 <span>{props.meta.error}</span>
            </div>
            }
        </div>
    )

}

export const Textarea = (props) => {
  const {input,meta, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = ( props) => {
    const {input,meta, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}



// export const Textarea = (props) => {
//   const hasError = props.meta.error && props.meta.touched;
//     return (
//         <div className={classes.formControl}>
//             <textarea {...props.input} className={classes.textarea + " " + (hasError ? classes.error : "")}/>
//             { hasError &&
//             <div className={classes.errorWrapper}>
//                  <span>{props.meta.error}</span>
//             </div>
//             }
//         </div>
//     )
// }

// export const Input = ( props) => {
//     const hasError = props.meta.error && props.meta.touched;
//     return (
//         <div>
//             <input {...props.input} className={classes.input + " " + (hasError ? classes.error : "")}/>
//             { hasError &&
//             <div className={classes.errorWrapper}>
//                  <span>{props.meta.error}</span>
//             </div>
//             }
//         </div>
//     )
// }
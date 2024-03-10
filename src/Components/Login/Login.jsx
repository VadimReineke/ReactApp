import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormControls/FormsControls";
import { maxLengthCreator, requeired,} from "../../utils/validators/validators";
import { connect } from "react-redux";
import {login} from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom";
import classes from '../Common/FormControls/FormsControls.module.css';

let maxLengthLogin = maxLengthCreator(30);
let maxLengthPassword = maxLengthCreator(15);

const LoginForm = (props) => {
   return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[requeired, maxLengthLogin]} name="email" placeholder="email" />
            </div>
            <div>
                <Field component={Input} validate={[requeired, maxLengthPassword]} name="password" type="password" placeholder="Password" />
            </div>
            <div>
                <Field component={Input} name="rememberMe" type="checkbox" /> remember me
            </div>
            {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'}) (LoginForm)

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Navigate to="/profile" />
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}



export default connect(mapStateToProps, {login})(Login);
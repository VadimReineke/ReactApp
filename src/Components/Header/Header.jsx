import React from "react";
import classes from'./Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {

    return (
    <header className={classes.header}>
        <div className={classes.container}>
        <img src="https://w7.pngwing.com/pngs/1008/532/png-transparent-wolf-logo-symbol-thumbnail.png" alt="logo.png"></img>
        <p className={`${classes.text} ${classes.descr}`}>Заголовок страницы</p>
        <div className={classes.loginWrapper}>
        {props.isAuth ? <NavLink to={'/profile'} className={classes.loginLink}>{props.login}</NavLink> : <NavLink to={'/login'} className={classes.loginLink}>Логин</NavLink>}
        </div>
        </div>
      </header>
    )
}

export default Header;
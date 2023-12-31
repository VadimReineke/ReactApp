import React from "react";
import classes from'./Header.module.css';

const Header = () => {
    return (
    <header className={classes.header}>
        <div className={classes.container}>
        <img src="https://w7.pngwing.com/pngs/1008/532/png-transparent-wolf-logo-symbol-thumbnail.png" alt="logo.png"></img>
        <p className={`${classes.text} ${classes.descr}`}>Заголовок страницы</p>
        </div>
      </header>
    )
}

export default Header;
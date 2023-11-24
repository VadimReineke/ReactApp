import React from "react";
import classes from './Nav.module.css';
import {NavLink } from "react-router-dom";
import NavItemFriends from "./NavItemFriends/NavItemFriends";


//  Создаем переменную в которую приходит значение есть ли класс active при активной ссылке
// если есть то подставляем классы актив и простой если нет, то только простой
// classNameActive не заработал

const linkClasses = ({isActive}) => (isActive ? `${classes.activeLink} ${classes.link}` : `${classes.link}`);


const Nav = (props) => {

 let friendsArr = props.sidebarFriends().map((el) => <NavItemFriends userName={el.name} id={el.id} userAvatar ={el.avatar} key={el.id} />)  

    return (
              <nav className={classes.nav}>
                <div className={classes.container}>
                  <ul className={classes.list}>
                    <li className={classes.item}><NavLink to="/profile" className = {linkClasses}>Profile</NavLink></li>
                    <li className={classes.item}><NavLink to="/dialogs" className = {linkClasses}>Messages</NavLink></li>
                    <li className={classes.item}><NavLink to="/news" className = {linkClasses}>News</NavLink></li>
                    <li className={classes.item}><NavLink to="/music" className = {linkClasses}>Music</NavLink></li>
                    <li className={classes.item}><NavLink to="/settings" className = {linkClasses}>Settings</NavLink></li>
                    <li className={classes.item}><NavLink to="/friends" className = {linkClasses}>Friends</NavLink></li>
                    <li className={`${classes.item} ${classes.friendsList}` }>
                           {friendsArr}
                    </li>
                  </ul>                
                </div>
            </nav>
    )

}

export default Nav;
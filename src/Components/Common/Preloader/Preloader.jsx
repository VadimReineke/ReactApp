import React from "react";
import classes from './Preloader.module.css'
import spinner from '../../../assets/img/Spinner-1.3s-330px.svg';


const Preloader = (props) => {
    return  <div className={classes.spinnerContainer} >
    <img src={spinner} alt='spinner img'/>
  </div> 
}

export default Preloader;
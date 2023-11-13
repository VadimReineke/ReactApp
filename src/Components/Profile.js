import React from "react";
import classes from './Profile.module.css'

const Profile= () => {
    return (
        <main className={classes.main}>
            <div className={classes.hero}>
               <div className={classes.container}>
                <img className={classes.img} alt="123" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
       
               </div>
            </div>
        </main>
    )
}

export default Profile;
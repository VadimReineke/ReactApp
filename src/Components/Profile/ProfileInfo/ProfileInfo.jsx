import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile) {
       return <Preloader/>
    }

    let userContact = props.profile.contacts;
    let contactsArray = []
    const keys = Object.keys(userContact)
    keys.forEach(el => {
        if (userContact[el] != null) {
            contactsArray.push(`${el} : ${userContact[el]}`)
        }
    })   


    let contactsArrayRender = contactsArray.map((el) => <li key= {Math.ceil(Math.random()*100 + Math.random()*10)}>{el}</li>)
    return (
        <div className={classes.profileInfo}>
            <div className={classes.profileInfoContainer}>
            <img className={classes.profileInfoWallPaper} alt="123" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
            <div className={classes.profileInfoUserWrapper}>
                <img className={classes.profileInfoUserAvatar} alt='avatar' src={props.profile.photos.small}/>
                <div className={classes.profileInfoContactsWrapper}>
                <p className={classes.profileInfoText}>Обо мне: <span className={classes.profileInfoTextDescr}>{props.profile.aboutMe}</span></p>
                    <p className={classes.profileInfoText}>Контакты:</p>
                <ul className={classes.profileInfoContactList}>
                  {contactsArrayRender }
                </ul>
                </div>

            </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
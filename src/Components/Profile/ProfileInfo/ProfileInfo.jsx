import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

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
            {/* <img className={classes.profileInfoWallPaper} alt="123" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" /> */}
            <div className={classes.profileInfoUserWrapper}>
                <img className={classes.profileInfoUserAvatar} alt='avatar' src={props.profile.photos.small  != null ? props.profile.photos.small : 'https://i.pinimg.com/736x/e0/68/70/e0687019a95d869ff1d58a867b9bd66b.jpg'}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
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
import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile} from '../../redux/profile-reducer';
import { useParams} from 'react-router-dom';
import { profileAPI } from "../../api/api";


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 } 

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = 2
        }
        profileAPI.getProfile(userId).then(data => { 
             this.props.setUserProfile(data)
        }
        )
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)

    }
}

let stateToProps = (state) => {
        return {profile: state.profilePage.profile}
}

 let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(stateToProps, {setUserProfile})(WithUrlDataContainerComponent )
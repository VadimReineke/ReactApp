import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import { useParams} from 'react-router-dom';
// import { withAuthNavigate } from "../../HOC/AuthNavigate";
import { compose } from "redux";

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
            userId = 30579
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>)
    }
}

let stateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(stateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthNavigate
)(ProfileContainer)
import Friends from "./Friends";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        friendsData: state.friendsPage.friendsData
    }
}

let mapDistatchToProps = (dispatch) => {
    return {

    }
}

const FriendsContainer = connect(mapStateToProps, mapDistatchToProps) (Friends)

export default FriendsContainer;
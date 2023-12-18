import { connect } from "react-redux";
import Nav from "./Nav";



const mapStateToProps = (state) => {
    return {
        sidebarFriendsData: state.sidebarFriends.sidebarFriendsData
    }
}

const mapDistatchToProps = (dispatch) => {
    return {

    }
}

const NavContainer = connect(mapStateToProps, mapDistatchToProps) (Nav)
export default NavContainer
import { connect } from "react-redux"
import SidebarFriends from "./SidebarFriends"



const mapStateToProps = (state) => {
    return {
        sidebarFriendsData: state.sidebarFriends.sidebarFriendsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const SidebarFriendsContainer = connect(mapStateToProps, mapDispatchToProps) (SidebarFriends)

export default SidebarFriendsContainer
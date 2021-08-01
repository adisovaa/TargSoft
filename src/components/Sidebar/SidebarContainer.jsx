import React from 'react'
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import Sidebar from "./Sidebar";
import {setPostsThunkCreator} from "../../redux/sidebar-reducer";

class SidebarContainer extends React.Component {

    componentDidMount() {
        this.props.setPostsThunkCreator()
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Sidebar posts={this.props.posts}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.sidebar.posts,
    isFetching: state.sidebar.isFetching
})

export default connect(mapStateToProps, {setPostsThunkCreator})(SidebarContainer)
import React from 'react'
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import {getPostsThunkCreator} from "../../redux/content-reducer";
import Content from "./Content";
import {withRouter} from "react-router-dom"

class ContentContainer extends React.Component {

    componentDidMount() {
        let postId = this.props.match.params.postId
        this.props.getPostsThunkCreator(postId)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Content posts={this.props.posts}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.content.posts,
    isFetching: state.sidebar.isFetching
})

const withURLDataContainerComponent = withRouter(ContentContainer)

export default connect(mapStateToProps, {getPostsThunkCreator})(withURLDataContainerComponent)
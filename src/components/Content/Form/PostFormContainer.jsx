import React from 'react'
import {connect} from "react-redux";
import PostForm from "./PostForm";
import {addPostAC} from "../../../redux/content-reducer";


const mapStateToProps = (state) => {
    return {
        newPostText: state.content.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostAC(newPostText))
        }
    }
}


const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)

export default PostFormContainer
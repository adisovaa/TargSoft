import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import s from './../Content.module.css'

const maxLength10 = maxLengthCreator(10)
const maxLength30 = maxLengthCreator(30)

const PostForm = (props) => {

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className='content'>
            <AddPostReduxForm onSubmit={onAddPost}/>
        </div>
    )
}

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>Add New Post</p>
            <div className={s.inputForm}>
                <Field name='title'
                       type='text'
                       placeholder='Title'
                       validate={[required, maxLength10]}
                       component='input'/>
            </div>
            <div className={s.inputForm}>
                <Field name='title'
                       type='textarea'
                       placeholder='Text'
                       validate={[required, maxLength30]}
                       component='textarea'/>
            </div>
            <button className={s.btn}>Add Post</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'post'})(addPostForm)

export default PostForm
import React from 'react'
import s from './Content.module.css'
import PostForm from "./Form/PostForm";

const Content = (props) => {
    return (
        <>
            <div className={s.content}>
                <div className={s.contentContainer}>
                    <div className={s.textTitle}>{props.posts.title}</div>
                    <div className={s.textBody}>{props.posts.body}</div>
                    <div className={s.textId}>{props.posts.id}</div>
                </div>
                <div className={s.line}></div>
                <PostForm/>
            </div>
        </>
    )
}

export default Content
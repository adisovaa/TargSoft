import {postAPI} from "../api/api";
import {setPostAC, toggleIsFetchingAC} from "./sidebar-reducer";

const ADD_POST = 'ADD_POST'
const GET_POST = 'GET_POST'
const DELETE_POST = 'DELETE_POST'

const initialState = {
    posts: [],
    newPosts: [
        {id: null, textTitle: '', text: ''}
    ]
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST:
            return {...state, posts: action.posts}
        case ADD_POST: {
            let newPost = {
                id: 101,
                textTitle: 'hello' ,
                text: action.newPostText,
            }
            return {...state, posts: {...state.posts, newPost}, newPostText: '' }
        }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        default:
            return state
    }
}

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText})
export const getPostAC = (posts, userId) => ({type: GET_POST, posts, userId})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const getPostsThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    postAPI.getPosts(userId)
        .then(response => {
            dispatch(getPostAC(response.data))
        })
    dispatch(toggleIsFetchingAC(false))
}

export default contentReducer
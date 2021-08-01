import {postAPI} from "../api/api";

const SET_POST = 'SET_POST'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
    posts: [],
    isFetching: true
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST:
            return {...state, posts: action.posts}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const setPostAC = (posts) => ({type: SET_POST, posts})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const setPostsThunkCreator = () => (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    postAPI.setPosts()
        .then(response => {
            dispatch(setPostAC(response.data))
        })
    dispatch(toggleIsFetchingAC(false))
}

export default sidebarReducer
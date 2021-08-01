import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const postAPI = {
    setPosts() {
        return instance.get(`posts`)
    },
    getPosts(postId) {
        return instance.get(`posts/` + postId)
    }
}
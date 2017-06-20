import postIndex from './components/indexPost.vue'
import postIndexTitle from './components/indexPostTitle.vue'
import newPost from './components/newPost.vue'

export default [
    {path: '/', component: postIndexTitle},
    {path: '/posts', component: postIndex},
    {path: '/posts/new', component: newPost}
]
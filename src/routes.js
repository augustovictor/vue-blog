import postIndex from './components/indexPost.vue'
import postIndexTitle from './components/indexPostTitle.vue'
import newPost from './components/newPost.vue'
import showPost from './components/showPost.vue'

import moviesIndex from './components/movies/index.vue'
import moviesNew from './components/movies/new.vue'

export default [
    {path: '/', component: postIndexTitle},
    {path: '/posts', component: postIndex},
    {path: '/posts/new', component: newPost},
    {path: '/posts/:id', component: showPost},
    {path: '/movies', component: moviesIndex},
    {path: '/movies/new', component: moviesNew}
]
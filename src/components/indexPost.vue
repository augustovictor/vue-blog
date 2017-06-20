<template>
    <div>
        <h3>Posts</h3>

        <div id="search-container">
            <input v-model="search" type="text" placeholder="search for a post...">
        </div>

        <div v-if="errorPresent">
            <h3>Something went wrong</h3>
            {{errors}}
        </div>
        
        <div v-theme:columns="'narrow'" v-for="post in filteredPosts" class="post-container">
            <router-link :to="`/posts/${post.id}`"><h2 v-rainbow>{{post.title | toUppercase}}</h2></router-link>
            <p>{{post.body | snippet}}</p>
            <p>Id: {{post.id}}</p>
        </div>
    </div>
</template>

<script>
import api from '../api'
import searchMixin from '../mixins/searchMixin'

export default {
    data() {
        return {
            posts: [],
            errorPresent: false,
            errors: null,
            search: ''
        }
    },
    computed: {
       
    },
    created() {
        api.get('/posts')
        .then(res => {
            this.posts = res.data.slice(0, 20);
        }).catch(err => {
            this.errorPresent = true;
            this.errors = err;
        });
    },
    filters: {
        toUppercase (value) {
            // value = the value passed to the filter
            return value.toUpperCase();
        }
    },
    directives: {
        'rainbow': {
            bind(el, binding, vnode) {
                el.style.color = `#${Math.random().toString().slice(2,8)}`
            }
        }
    },
    mixins: [
        searchMixin
    ]
}
</script>

<style scoped>
.post-container {
    background: lightgray;
    padding: 10px;
    margin: 10px 0;
}
</style>


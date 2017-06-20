<template>
    <div>
        <h3>Posts</h3>

        <div v-if="errorPresent">
            <h3>Something went wrong</h3>
            {{errors}}
        </div>
        
        <div v-theme:columns="'narrow'" v-for="post in posts" class="post-container">
            <h2 v-rainbow>{{post.title | to-uppercase}}</h2>
            <p>{{post.body | snippet}}</p>
            <p>Id: {{post.id}}</p>
        </div>
    </div>
</template>

<script>
import api from '../api'

export default {
    data() {
        return {
            posts: [],
            errorPresent: false,
            errors: null
        }
    },
    created() {
        api.get('/posts')
        .then(res => {
            this.posts = res.data.slice(0, 20);
        }).catch(err => {
            this.errorPresent = true;
            this.errors = err;
        });
    }
}
</script>

<style scoped>
.post-container {
    background: lightgray;
    padding: 10px;
    margin: 10px 0;
}
</style>


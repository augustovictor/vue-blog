<template>
    <div>
        <h3>Posts</h3>

        <div v-if="errorPresent">
            <h3>Something went wrong</h3>
            {{errors}}
        </div>
        
        <div v-for="post in posts" class="post-container">
            <p>{{post.title}}</p>
            <p>{{post.body}}</p>
            <p>Id: {{post.id}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: [],
            errorPresent: false,
            errors: null
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.posts = res.data.slice(0, 10);
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


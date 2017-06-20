<template>
    <div id="show-post-container">
        <h1>{{post.title}}</h1>
        <article>{{post.body}}</article>
    </div>    
</template>
<script>
import api from '../api'

export default {
    data() {
        return {
            id: this.$route.params.id,
            post: {}
        }
    },
    created() {
        api.get(`/posts/${this.id}`)
        .then(res => {
            this.post = res.data;
        }).catch(err => {
            console.log(err);
        });
    }
}
</script>

<style scoped>
    
</style>
<template>
    <div>
        <new-post></new-post>
        <index-post></index-post>
        <back-to-top></back-to-top>
    </div>
</template>

<script>

import NewPost from './components/newPost.vue'
import IndexPost from './components/indexPost.vue'

export default {
    components: {
        'new-post': NewPost,
        'index-post': IndexPost
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>

</style>

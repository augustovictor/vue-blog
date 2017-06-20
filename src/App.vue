<template>
    <div>
        <new-post></new-post>
        <index-post></index-post>
        <index-post-title></index-post-title>
        <back-to-top></back-to-top>
    </div>
</template>

<script>

import NewPost from './components/newPost.vue'
import IndexPost from './components/indexPost.vue'
import IndexPostTitle from './components/indexPostTitle.vue'

export default {
    components: {
        'new-post'        : NewPost,
        'index-post'      : IndexPost,
        'index-post-title': IndexPostTitle
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

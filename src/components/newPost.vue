<template>
    <div id="new-post-container">
        <h2>Add a new post</h2>
        <form>
            <div>
                <label for="title">Title</label>
                <br>
                <input v-model.lazy="post.title" type="text" id="title" name="title" />
            </div>

            <div>
                <label for="content">Content</label>
                <br>
                <textarea v-model="post.content" id="content" name="content" rows="5" cols="50" />
            </div>
        </form>
        <div id="preview">
            <h3>Preview post</h3>
            <p>Title: {{post.title}}</p>
            <p>Content:</p>
            <p>{{post.content}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title  : null,
                content: null
            }
        }
    }
}
</script>

<style>

</style>

<template>
    <nav>
        <ul>
            <li><router-link exact to="/">Posts Title</router-link></li>
            <li><router-link exact to="/posts">Full Posts</router-link></li>
            <li><router-link exact to="/posts/new">New Post</router-link></li>
            <li><router-link exact to="/movies">Movies</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {}
</script>
<style scoped>
.router-link-active {
    background: black;
    color: white;
    text-transform: uppercase;
}
</style>
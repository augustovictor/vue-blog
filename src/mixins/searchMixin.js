export default {
    computed: {
        filteredPosts: function() {
            return this.posts.filter((post) => {
                return post.title.match(this.search);
            });
        }
    }
}
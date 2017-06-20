<template>
    <div id="new-post-container">
        <div v-if="errorPresent">
            <h3>Something went wrong</h3>
            {{errors}}
        </div>
        <div v-if="!submitted" id="form-container">
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

                <div id="checkboxes">
                    <p>Post category</p>
                    <div>
                        <div>
                            <input id="tech" value="tech" type="checkbox" v-model="post.categories" />
                            <label for="tech">Tech</label>
                        </div>

                        <div>
                            <input id="movies" value="movies" type="checkbox" v-model="post.categories" />
                            <label for="movies">Movies</label>
                        </div>

                        <div>
                            <input id="tvshows" value="tvshows" type="checkbox" v-model="post.categories" />
                            <label for="tvshows">Tv shows</label>
                        </div>

                        <div>
                            <input id="games" value="games" type="checkbox" v-model="post.categories" />
                            <label for="games">Games</label>
                        </div>
                    </div>

                    <div id="authors">
                        <p>Authors</p>
                        <select v-model="post.author">
                            <option v-for="author in authors">{{author.name}}</option>
                        </select>
                    </div>


                </div>
            </form>
        </div>
        
        <div id="preview">
            <h3 v-if="submitted">Post submitted successfully!</h3>
            <h3>Preview post</h3>
            <p>Title: {{post.title}}</p>
            <p>Content:</p>
            <p>{{post.content}}</p>
            <p>Categories:</p>
            <ul>
                <li v-for="category in post.categories">{{category}}</li>
            </ul>
            <p>Author: {{post.author}}</p>
        </div>
        
        <div v-if="!submitted">
            <!-- <button @click.prevent="submitPost">Create post</button> -->
            <button @click.prevent="submitPostWithAxios">Create post</button>
        </div>
    </div>
</template>

<script>
import api from '../api'

export default {
    data() {
        return {
            authors: [
                {name: 'Victor'},
                {name: 'Tuno'},
                {name: 'Tuna'}
            ],
            post: {
                title     : null,
                content   : null,
                categories: [],
                author    : null
            },
            submitted: false,
            errorPresent: false,
            errors: null
        }
    },
    methods: {
        submitPost: function() {
            this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.post.title,
                body: this.post.content
            }).then((data) => {
                console.log(data);
                this.submitted = true;
            });
        },
        submitPostWithAxios: function() {
            api.post('/posts', {
                title: this.post.title,
                body: this.post.content
            }).then(data => {
                console.log(data);
                this.submitted = true;
            }).catch(err => {
                this.errorPresent = true;
                this.errors = err;
                console.log('Something went wrong')
            });
        }
    }
}
</script>

<style>

</style>

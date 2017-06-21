<template>
    <form-helper>
        <div slot="form-header">
            <h1>New movie</h1>
        </div>

        <div slot="form-fields">
            <div>
                <label for="title">Title</label>
                <input id="title" name="title" type="text" v-model="movie.title" />
            </div>

            <div>
                <label for="description">Description</label>
                <input id="description" name="description" type="text" v-model="movie.description" />
            </div>
        </div>

        <div slot="form-controls">
            <button @click.prevent="submitMovie">Create</button>
        </div>
    </form-helper>
</template>

<script>
import FormHelper from '../helpers/form.vue'
import {apiMovies} from '../../api'
import axios from 'axios'

export default {
    components: {
        'form-helper': FormHelper
    },
    data() {
        return {
            movie: {}
        }
    },
    methods: {
        submitMovie() {
            apiMovies.post('/movies', this.movie)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err)
            });
        }
    }
}
</script>

<style scoped>
</style>
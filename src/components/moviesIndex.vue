<template>
    <div id="movies-index-container">
        <h1>Movies list</h1>
        <div v-for="movie in movies">
        </div>
    </div>
</template>

<script>
import apiMovies from '../api'
export default {
    data() {
        return {
            movies: []
        }
    },
    created() {
        apiMovies.get('/movies')
        .then(data => {
            console.log('Movies: ', data);
            this.movies = data;
        })
        .catch(err => {
            console.log('Error in fetching movies: ', err)
        })
    }
}
</script>

<<style scoped>
    
</style>
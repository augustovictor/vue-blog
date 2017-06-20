<template>
    <div id="movies-index-container">
        <h1>Movies list</h1>
        <div v-for="movie in movies">
            <h3>{{movie.title}}</h3>
            <p>{{movie.description}}</p>
            <p>Added on {{movie.created_date}}</p>
        </div>
    </div>
</template>

<script>
import {apiMovies} from '../../api'

export default {
    data() {
        return {
            movies: []
        }
    },
    created() {
        apiMovies.get('/movies')
        .then(res => {
            this.movies = res.data;
        })
        .catch(err => {
            console.log('Error in fetching movies: ', err)
        })
    }
}
</script>

<<style scoped>
    
</style>
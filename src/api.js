import axios from 'axios'


let api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    headers: {'Content-type': 'application/json'}
});

let apiMovies = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
});

// export default api;
export default apiMovies;
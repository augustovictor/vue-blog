import axios from 'axios'


let api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    headers: {'Content-type': 'application/json'},
});

export default api;
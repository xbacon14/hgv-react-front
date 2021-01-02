import axios from 'axios';

var baseURL = 'https://51.15.192.116:3000/api/v1/ciudades';


const api = axios.create({
    baseURL: baseURL
});

export default api;
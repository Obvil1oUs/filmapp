import axios from 'axios';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = '82367e0f312d2993c4c7250494809cfe'

export function fetchPopularMovies(page = 1) {
    return axios
        .get(`${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}&page=${page}`)
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
            return [];
        });
}

export function fetchMovies(page = 1) {
    return axios
        .get(`${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&page=${page}`)
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
            return [];
        });
}
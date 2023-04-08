import axios from 'axios';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = '82367e0f312d2993c4c7250494809cfe'

const fetchPopularMovies = async (page = 1) => {
    return await axios
        .get(`${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}&page=${page}`)
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
            return [];
        });
}

const fetchMovies = async (page = 1) => {
    return await axios
        .get(`${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&page=${page}`)
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
            return [];
        });
}

const fetchGenres = async (type) => {
    return await axios
        .get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=82367e0f312d2993c4c7250494809cfe&language=en-US`)
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
            return [];
        });
}

export { fetchMovies, fetchPopularMovies, fetchGenres };
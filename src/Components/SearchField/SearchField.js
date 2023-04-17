import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MoviePage from '../../Pages/MoviePage/MoviePage';
import './SearchField.css';

const SearchField = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (query) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=82367e0f312d2993c4c7250494809cfe&language=en-US&query=${query}&page=1&include_adult=false`;
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
    };

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query.trim() !== '') {
            searchMovies(query);
        } else {
            setMovies([]);
        }
    };

    return (
        <div className="search-field">
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <Button variant="outline-primary">Search</Button>
            </Form>
            {movies.length > 0 && (
                <div className="movie-results">
                    {movies.slice(0, 4).map((movie) => (
                        <MoviePage key={movie.id} movie={movie} />
                    ))}
                    {movies.length > 4 && (
                        <div className="scrollable-movie-results">
                            {movies.slice(4).map((movie) => (
                                <MoviePage key={movie.id} movie={movie} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchField;

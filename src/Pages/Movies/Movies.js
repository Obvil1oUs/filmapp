import React, { useState, useEffect } from "react";
import SingleMovie from "../../Components/SingleMovie/SingleMovie";
import { fetchMovies } from "../../config/MovieServices";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import Genres from "../../Components/Genres/Genres";
import "./Movies.css";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        if (page === 1) {
            setMovies([]);
        }
        fetchMovies(page, selectedGenres).then((data) => {
            setMovies((prevMovies) => [
                ...data.results.filter((movie) => !prevMovies.some((m) => m.id === movie.id)),
            ]);
            setTotalPages(data.total_pages);
        });
    }, [page, selectedGenres]);


    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <h2>Movies</h2>
            <Genres
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="gallery">
                {movies &&
                    movies.map((c) => (
                        <div className="gallery_item" key={c.id}>
                            <SingleMovie
                                id={c.id}
                                poster={c.poster_path}
                                title={c.title || c.name}
                                date={c.first_air_data || c.release_date}
                                media_type={c.media_type}
                                vote_average={c.vote_average}
                            />
                        </div>
                    ))}
            </div>
            <CustomPagination
                currentPage={page}
                totalPages={totalPages}
                setCurrentPage={handlePageChange}
            />
        </div>
    );
}

export default Movies;

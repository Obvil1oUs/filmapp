import React, { useState, useEffect } from "react";
import SingleMovie from "../../Components/SingleMovie/SingleMovie";
import { fetchSeries } from "../../services/MovieServices";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import Genres from "../../Components/Genres/Genres";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const totalPages = 500;

    useEffect(() => {
        if (page === 1) {
            setMovies([]);
        }
        fetchSeries(page, selectedGenres).then((data) => {
            setMovies((prevMovies) => [
                ...data.results.filter((movie) => !prevMovies.some((m) => m.id === movie.id)),
            ]);
            console.log(data);
        });
    }, [page, selectedGenres]);


    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <h2>TV Series</h2>
            <Genres
                type="tv"
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
                                date={c.first_air_date || c.release_date}
                                media_type="tv"
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

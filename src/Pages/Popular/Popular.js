import React, { useState, useEffect } from "react";
import SingleMovie from "../../Components/SingleMovie/SingleMovie";
import { fetchPopularMovies } from "../../services/MovieServices";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import "./Popular.css";

function Popular() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const totalPages = 10;

    useEffect(() => {
        if (page === 1) {
            setMovies([]);
        }
        fetchPopularMovies(page).then((data) => {
            setMovies((prevMovies) => [
                ...data.results.filter((movie) => !prevMovies.some((m) => m.id === movie.id)),
            ]);
        });
    }, [page]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <h2>Popular</h2>
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

export default Popular;
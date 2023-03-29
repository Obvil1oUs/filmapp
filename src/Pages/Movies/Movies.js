import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import SingleMovie from "../../Components/SingleMovie/SingleMovie";
import { fetchMovies } from "../../config/MovieServices";
import "./Movies.css";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showBackToTopButton, setShowBackToTopButton] = useState(false);

    useEffect(() => {
        fetchMovies(page).then((data) => {
            setMovies((prevMovies) => [...prevMovies, ...data.results]);
            setTotalPages(data.total_pages);
        });
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);

            if (window.pageYOffset > 300) {
                setShowBackToTopButton(true);
            } else {
                setShowBackToTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    useEffect(() => {
        if (
            window.innerHeight + scrollPosition >=
            document.body.offsetHeight - 1000 // load more movies when user has scrolled within 1000 pixels of the bottom of the page
        ) {
            if (page < totalPages) {
                setPage((prevPage) => prevPage + 1);
            }
        }
        // eslint-disable-next-line
    }, [scrollPosition]);

    return (
        <div>
            <h2>Movies</h2>
            <div className="gallery">
                {movies.map((c) => (
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
            {showBackToTopButton && (
                <Button variant="primary" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Back to top
                </Button>
            )}
        </div>
    );
};

export default Movies;
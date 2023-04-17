import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { fetchMovie } from "../../services/MovieServices";
import { img_300, unavailable } from '../../services/config'


import "./MoviePage.css"

const MoviePage = () => {
    const { movieId } = useParams();

    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetchMovie(1033219).then((data) => {
            setFilm(data);
        });
    }, [movieId]);

    if (!film) {
        return null;
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={film.poster_path ? `${img_300}/${film.poster_path}` : unavailable}
                            alt={film.title} />
                    </Card>
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>{film.title}</Card.Title>
                        <Card.Text className="mt-2 mb-2">{film.overview}</Card.Text>
                        <div className="label-container">
                            <div className="label">{film.vote_average.toFixed(1)}</div>
                            <div className="label">{film.adult ? '18+' : 'PG-13'}</div>
                        </div>
                        <Card.Text className="mt-2">Release Date: {film.release_date}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default MoviePage;
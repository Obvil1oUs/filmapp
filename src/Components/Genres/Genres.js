import React, { useEffect } from 'react';
import { Form, FormGroup, FormCheck } from 'react-bootstrap';
import { fetchGenres } from '../../config/MovieServices';

const Genres = ({ selectedGenres, setSelectedGenres, genres, setGenres, type, setPage }) => {

    useEffect(() => {
        fetchGenres('movie').then((data) => {
            setGenres(data.genres);
        });
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Form>
                <Form.Label>Genres</Form.Label>
                <FormGroup className="d-flex flex-wrap mb-4">
                    {genres.map((genre) => (
                        <FormCheck
                            key={genre.id}
                            type="checkbox"
                            label={genre.name}
                            checked={selectedGenres.includes(genre.id)}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setSelectedGenres([...selectedGenres, genre.id]);
                                } else {
                                    setSelectedGenres(selectedGenres.filter((id) => id !== genre.id));
                                }
                                setPage(1);
                            }} 
                            className="mr-4 form-check-inline"
                        />
                    ))}
                </FormGroup>
            </Form>
        </div>
    );
};

export default Genres;

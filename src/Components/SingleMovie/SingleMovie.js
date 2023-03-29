import React from 'react';
import { Badge } from 'react-bootstrap';
import { img_300, unavailable } from '../../config/config'
import './SingleMovie.css';

const SingleMovie = ({
    id, poster, title, date, media_type, vote_average
}) => {
    return (
        <div className='media'>
            <Badge bg={vote_average>7 ? 'primary' : 'secondary'} pill={true} bsPrefix='badge'>{vote_average}</Badge>
            <img
                className='poster'
                src={poster ? `${img_300}/${poster}` : unavailable}
                alt={title}
            />
            <h3 className='title'>{title}</h3>
            <div className='info'>{media_type === 'tv' ? "TV Series" : "Movie"}</div>
            <div className='info'>{date}</div>
        </div>
    );
};

export default SingleMovie;
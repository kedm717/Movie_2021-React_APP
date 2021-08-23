import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title,year,summary, poster,genres}) {
    return (
        <div className = "movie">
        <div className = "movie__data">
            <img src ={poster} alt={title} title={title}/>
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className ="movie__genres">
                {genres.map((genres, index)=>{
                    return <li key = {index} className = "movie__genre">{genres}</li>;
                })}
            </ul>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
        </div>
    );
}

Movie.prototype = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
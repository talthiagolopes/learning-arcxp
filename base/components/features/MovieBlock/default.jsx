import React from 'react';
import { useContent } from 'fusion:content'
import propTypes from 'prop-types';
import movieFilter from '../../../content/filters/MovieFilter'

const MovieBlock = (props) => {

    const { config } = props.customFields;
    let movieData = {};

    movieData = useContent({
        source: config.contentService,
        query: config.contentConfigValues,
        filter: movieFilter
    })
    
    console.log(movieData, "movieData");

    return (
        movieData ?
        <div>
            <h1>Movie Title: {movieData.Title}</h1>
            <p>Code: {movieData.imdbID}</p>
            <p>Year: {movieData.Year}</p>
            <p>Rated: {movieData.Rated}</p>
            <p>Released: {movieData.Released}</p>
            <p>Runtime: {movieData.Runtime}</p>
            <img src={movieData.Poster} />
        </div>
        : null
    )
}

MovieBlock.propTypes = {
    customFields: propTypes.shape({
        config: propTypes.contentConfig()
    })
}

export default MovieBlock;
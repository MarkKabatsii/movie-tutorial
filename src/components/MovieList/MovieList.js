import React from 'react'
import styles from './MovieList.module.css'

function MovieList(props) {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
            {props.movies.map((movie, index) => (
                <div key={index} className={`${styles.imageContainer} d-flex justify-content-start m-3`}>
                    <img src={movie.Poster} alt='movie' />
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className={`${styles.overlay} d-flex align-items-center justify-content-center`}>
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieList
import {useEffect, useState} from 'react'

import MovieList from "./MovieList/MovieList";
import MovieListHeading from "./MovieListHeading/MovieListHeading";
import SearchBox from "./SearchBox/SearchBox";

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('')

    const getMovieRequest = async (searchValue) => {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=bf34c702`
        const response = await fetch(url)
        const responseJson = await response.json()
        console.log(responseJson)

        if(responseJson.Search) setMovies(responseJson.Search)
    }

    useEffect( () => {
        getMovieRequest(searchValue)
    }, [searchValue])

    return (
        <div className={`container-fluid ${styles.movieApp}`}>
            <div className="row">
                <MovieListHeading heading="Movies"/>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
                <MovieList key="" movies={movies}/>
            </div>
        </div>
    );
}

export default App;

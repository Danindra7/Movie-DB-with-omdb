import React, { useContext } from 'react'
import styled, { } from 'styled-components'
import { MovieContext } from '../context/MoviesListContext'
import MovieCard from './MovieCard'

const MovieListStyled = styled.div`
    background-color: black;
    color: white;
    padding-top: 2vh;
    min-height: 100vh;
    width: 100%;
    padding-bottom: 5vh;
    bottom: 0;
`

function MovieList() {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <MovieListStyled>
            {movies ?
                movies.map(data => {
                    return (
                        <MovieCard
                            key={data.imdbID}
                            Poster={data.Poster}
                            imdbID={data.imdbID}
                            Title={data.Title}
                            Year={data.Year}
                        />
                    )
                })
                : ""
            }
        </MovieListStyled>

    )
}

export default MovieList

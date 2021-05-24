import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import styled, { } from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'

const MovieDetailPageStyled = styled.div`
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`

const MovieDetail = styled.div`
    color: white;
    background-color: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* padding: 5rem; */
    width: 60%;
    .movie-detail{
        display: flex;
        flex-direction: row;
    }
    h1{
        margin-top: 0;
    }
    .label{
        color: gray;
    }
    img{
        height: 50vh;
    }
    .card-body{
        margin-left: 20px;
        text-align: left;
    }
    .rating-container{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`

function useGetMovie(movieID) {
    const [results, setResults] = useState([])
    function searchMovie() {
        axios.get(`http://www.omdbapi.com?apikey=acb5892c&i=${movieID}`)
            .then(response => {
                setResults(response.data)
            })
            .catch(e => console.log(e))
    }
    useEffect(() => {
        console.log(movieID)
        if (movieID !== '') {
            searchMovie()
        }
    }, [movieID])
    return results
}

function MovieDetailPage() {
    const { movieID } = useParams()
    const singleMovie = useGetMovie(movieID)

    return (
        <MovieDetailPageStyled>
            {singleMovie ?
                <MovieDetail>
                    <h1>Movie Detail</h1>
                    <div className="movie-detail">
                        <img src={singleMovie.Poster} />
                        <div className="card-body">
                            <h3 className="label">Name</h3>
                            <h3>{singleMovie.Title}</h3>
                            <h3 className="label">Year</h3>
                            <h3>{singleMovie.Year}</h3>
                            <h3 className="label">Genre</h3>
                            <h3>{singleMovie.Genre}</h3>
                            <h3 className="label">Language</h3>
                            <h3>{singleMovie.Language}</h3>
                        </div>
                    </div>
                    <p>{singleMovie.Plot}</p>
                    <div className="rating-container">
                        <div>
                            <h5>IMDB Rating</h5>
                            <h4>{singleMovie.imdbRating}</h4>
                        </div>
                        <div>
                            <h5>IMDB Votes</h5>
                            <h4>{singleMovie.imdbVotes}</h4>
                        </div>
                    </div>
                    <div className="btn-container">
                        <Link to='/'>
                            <Button > Back To Movies </Button>
                        </Link>
                    </div>
                </MovieDetail>
                :
                <h1>Error</h1>
            }

        </MovieDetailPageStyled>
    )
}

export default MovieDetailPage

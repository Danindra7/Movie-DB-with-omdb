import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import styled, { } from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'
import MovieModal from './MovieModal'

const MovieCardStyled = styled.div`
    display: flex;
    /* margin: 20px; */
    margin: 20px 10vw;
    padding: 10px 0 30px 0;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    img{
        height: 50vh;
        width: 17vw;
    }
    .card-body{
        min-width: 20vw;
        text-align: left;
        margin-left: 20px;
        p{
            color: gray;
        }
        .btn-container{
            display: flex;
            justify-content: space-between;
            min-width: 20vw;
        }
    }
    
`

const ModalStyle = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
        color: "white",
        backgroundColor: '#2b2b29',
        border: 'none',
        minWidth: "50%",
        minHeight: "50%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
}

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

Modal.setAppElement('#root')
function MovieCard(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedMovieId, setSelectedMovieId] = useState("")
    const singleMovie = useGetMovie(selectedMovieId)

    const handleClick = (movieId) => {
        setModalIsOpen(true)
        setSelectedMovieId(movieId)
    }

    return (
        <MovieCardStyled key={props.imdbID}>
            <img src={props.Poster} />
            <div className="card-body">
                <h3>{props.Title}</h3>
                <p> {props.Year} </p>
                <div className="btn-container">
                    <Button onClick={() => handleClick(props.imdbID)}>See Sumary</Button>
                    <Link to={`/movie-detail/${props.imdbID}`} onClick={() => setSelectedMovieId(props.imdbID)}><Button>Movie Details</Button></Link>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                style={ModalStyle}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <MovieModal
                    Poster={singleMovie.Poster}
                    Title={singleMovie.Title}
                    Plot={singleMovie.Plot}
                    imdbRating={singleMovie.imdbRating}
                    imdbVotes={singleMovie.imdbVotes}
                    onClick={() => setModalIsOpen(false)} />
            </Modal>
        </MovieCardStyled >
    )
}

export default MovieCard

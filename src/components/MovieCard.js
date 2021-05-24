import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import styled, { } from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'

const MovieCardStyled = styled.div`
    display: flex;
    /* margin: 20px; */
    margin: 20px 10vw;
    img{
        height: 50vh;
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
            
        }
    }
    
`

const ModalContainerStyled = styled.div`
    display: flex;
    img{
        height: 30vh;
    }
    .card-body{
        min-width: 20vw;
        text-align: left;
        margin-left: 20px;
        p{
            color: white;
        }
    }
    .btn-container{
        position: absolute;
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .rating-container{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
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
                <ModalContainerStyled>
                    <img src={singleMovie.Poster} />
                    <div className="card-body">
                        <h3>{singleMovie.Title}</h3>
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
                    </div>
                    <div className="btn-container">
                        <Button onClick={() => setModalIsOpen(false)}>Close Modal</Button>
                    </div>
                </ModalContainerStyled>
            </Modal>
        </MovieCardStyled >
    )
}

export default MovieCard

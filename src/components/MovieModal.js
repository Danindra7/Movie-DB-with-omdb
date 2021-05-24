import React from 'react'
import styled, { } from 'styled-components'
import Button from './Button'

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

function MovieModal(props) {
    return (
        <ModalContainerStyled>
            <img src={props.Poster} />
            <div className="card-body">
                <h3>{props.Title}</h3>
                <p>{props.Plot}</p>
                <div className="rating-container">
                    <div>
                        <h5>IMDB Rating</h5>
                        <h4>{props.imdbRating}</h4>
                    </div>
                    <div>
                        <h5>IMDB Votes</h5>
                        <h4>{props.imdbVotes}</h4>
                    </div>
                </div>
            </div>
            <div className="btn-container">
                <Button onClick={props.onClick}>Close Modal</Button>
            </div>
        </ModalContainerStyled>
    )
}

export default MovieModal

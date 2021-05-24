import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled, { } from 'styled-components'
import { Link } from 'react-router-dom'

const SearchListStyled = styled.ul`
    position: absolute;
    list-style: none;
    padding-left: 0;
    background-color: white;
    color: black;
    width: 60%;
    border-radius: 4px;
    /* margin: 0px auto; */
    left: 20%;
    margin-top: 3px;
    padding: 0px 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    .links{
        text-decoration: none;
        color: black;
        width: 100%;
        &:hover{
            cursor: pointer;
            background-color: lightgray;
            transition: 0.5s all ease;
    }
    li{
        margin: 0;
        padding: 0;
        width: 100%;
        padding : 7px 2px;
        border-radius: 4px;
        }
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

function SearchList(props) {
    return (
        <SearchListStyled>
            {props.movie.map(data => {
                return (
                    <Link className="links" to={`movie-detail/${data.imdbID}`} key={data.imdbID}><li >{data.Title}</li></Link>
                )
            })}
        </SearchListStyled>
    )
}

export default SearchList

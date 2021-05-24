import React, { useContext, useEffect, useState } from 'react'
import styled, { } from 'styled-components'
import axios from 'axios'
import SearchList from './SearchList'
import { MovieContext } from '../context/MoviesListContext'

const SearchBarStyled = styled.div`
    background-color: transparent;
    padding: 2rem 0rem;
    width: 100%;
    align-items: center;
    input{
        width: 60%;
        font-size: 1rem;
        height: 2rem;
        border-radius: 4px;
        
    }
`

function useSearchMovie(query) {
    const [results, setResults] = useState([])
    function searchMovie() {
        axios.get(`http://www.omdbapi.com?apikey=acb5892c&s=${query}`)
            .then(response => {
                setResults(response.data.Search)
            })
            .catch(e => console.log(e))
    }
    useEffect(() => {
        console.log(query)
        if (query !== '') {
            searchMovie()
        }
    }, [query])
    return results
}

function SearchBar() {
    const [movies, setmovies] = useContext(MovieContext)
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("")
    const movieAutoComplete = useSearchMovie(search)
    useEffect(() => {
        setmovies(movieAutoComplete)
    }, [query])
    // console.log(query)


    return (
        <SearchBarStyled>
            <form onSubmit={e => {
                e.preventDefault()
                setQuery(search)
            }}>
                <input
                    placeholder="Search a Movie..."
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
            </form>
            {/* TODO styling */}
            {search && movieAutoComplete ? <SearchList movie={movieAutoComplete} /> : ""}
        </SearchBarStyled>


    )
}

export default SearchBar

import React from 'react'
import styled, { } from 'styled-components'
import HeroSection from '../components/HeroSection'
import MovieList from '../components/MovieList'
import { MovieListProvider } from '../context/MoviesListContext'




const HomeStyled = styled.div`
    background-color: transparent;
    width: 100%;
`

function Home() {
    return (
        <HomeStyled>
            <MovieListProvider>
                <HeroSection></HeroSection>
                <MovieList></MovieList>
            </MovieListProvider>

        </HomeStyled>
    )
}

export default Home

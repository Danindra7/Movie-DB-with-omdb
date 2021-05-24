import React from 'react'
import styled, { } from 'styled-components'
import SearchBar from './SearchBar'

const HeroSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: transparent;
    img{
        size: 100%;
        width: 100%;
        height: 50vh;
        object-fit: cover;
        position: absolute;
        top: 0;
        z-index: -1;
        /* filter: brightness(70%); */
        filter: contrast(120%) brightness(50%);
    }
    h1{
        font-size: 44px;
    }
`

function HeroSection() {
    return (
        <HeroSectionStyled>
            <img src="/images/header.jpg" alt="img no source" />
            <h1>Movie Database</h1>
            <h3>Get to know more about yout favorite movie!</h3>
            <SearchBar />

        </HeroSectionStyled>
    )
}

export default HeroSection

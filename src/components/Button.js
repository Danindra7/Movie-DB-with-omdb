import React from 'react'
import styled, { } from 'styled-components'

const ButtonStyled = styled.button`
    background-color: transparent;
    color: white;
    outline: none;
    border: 1px solid white;
    font-size: 15px;
    padding: 8px 20px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover{
        transition: all 0.3s ease-out;
        background: white;
        color: #242424;
        transition: 250ms;
    }
    .btn-white{
        background-color: white;
        color: black;
        border-radius: 2px;
    }
`

const STYLES = ['btn-white']

function Button(props) {


    return (
        <div>
            <ButtonStyled onClick={props.onClick}>{props.children}</ButtonStyled>
        </div >
    )
}

export default Button

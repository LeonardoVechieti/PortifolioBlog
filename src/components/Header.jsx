import React from 'react'
import styled from 'styled-components'

const Header = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: start;
    
    font-size: 1.5rem;
    margin-top: 70px;
    h2 {
        font-family: 'Monserat', sans-serif;
        margin: 5px;
    }
    h1 {
        margin: 5px;
        font-family: 'Monserat', sans-serif;
        font-size: 5rem;
    }
    @media (max-width: 768px) {
        h1 {
            font-size: 3rem;
        }
    }
    

`
export default () => {
    return (
        <Header>
            <h2>Olá, eu sou</h2>
            <h1>Leonardo Vechieti</h1>
            <h2>Desenvolvedor Full Stack</h2>
        </Header>
    )
}

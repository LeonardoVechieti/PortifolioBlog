import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #eee8e8;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 0;
    padding: 5px;
    margin-bottom: 2em;
    border-radius: 0.5em;


    a { 
        padding: 4px;
        margin: 4px;

        border-radius: 0.5em;
        color: #201f1f;
        background-color: #d1cece;
        font-size: 20px;
        font-style: italic;
    }
    p {
        font-size: 25px;
        padding: 0;
    }
`
export default ({resume}) => {
  return (
    <Container>
        <a>Resumo:</a>
        <p>{resume}</p>
    </Container>
  )
}


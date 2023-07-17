import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Tags = styled.div`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    display: inline-block;
    padding: 0.5em 1em;
    margin: 0.2em 0.2em;
    background-color: transparent;
    border: 2px solid #c2c0c0;
    border-radius: 15px;
    color: #343333;
    font-size: 18px;
    
    text-transform: uppercase;
    &:hover {
      background-color: #c2c0c0;
      color: #0d0c0c;
      cursor: pointer;
    }
    p{
      margin-right: 0.5em;
    }
    span {
      font-weight: bold;
    }
`
export default (props) => {
    return (
        <div>
            {props.tags && props.tags.map((tag) => (
                <Link to={`/blog/search?q=` + tag} key={tag}>
                    <Tags>{tag}</Tags>
                </Link>
            ))}
        </div>
    )
}

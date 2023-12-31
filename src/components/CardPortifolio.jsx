import React from 'react'
import styled from 'styled-components'
import { Link, Route, NavLink } from 'react-router-dom'
import ProjectTechnology from './ProjectTechnology'


const Card = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 0px 50px 0px rgba(149, 149, 149, 0.75);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    width: auto;
    max-width: 400px;
    min-width: 300px;

    max-height: 500px;
    min-height: 550px;
    padding: 50px;
    @media only screen and  (max-width: 768px) {
        flex-direction: column;
        padding: 1em;
        h3 {
            margin-top: 20px;
        }
    }
    h3 {
        text-align: center;
        font-size: 2em;
        font-weight: 500;
        width: 100%;font-weight: 600;
    }
    p {
        text-indent: 0.7em;
        font-size: 23px;
        
    }

    img {
        align-self: center;
        max-width: 340px;
        max-height: 270px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2%;
        border: 1px solid #ccc7c7;
    }
    
    a {
        margin-top: 1em;
        align-self: end; 
    }
    &:hover {
        img {
            transform: scale(1.050);
            transition: 0.5s;
        }
    }
`
const Tecnologia = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:space-between;
    
    div {
        width: 100%;
        justify-content: center;
    }
    svg {
        width: 45px;
        height: 45px;
    }
`

export default ({ post }) => {
    return (
        <NavLink to={`/blog/${post.id}`} >
        <Card>
            <h3>{post.title}</h3>
            <p>{post.resumo}</p>
            <img src={post.imageMiniatura} alt={post.title} />
            <Tecnologia>
                <div>
                    <ProjectTechnology tags={post.tagsArray} />
                </div>
                <Link to={`/blog/${post.id}`} >
                    <button className="secondary-button">Ver mais</button>
                </Link>
            </Tecnologia>
        </Card>
        </NavLink>
    )
}


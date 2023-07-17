import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ProjectTechnology from './ProjectTechnology'


const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    width: 100%;
    max-width: 300px;
    max-height: 500px;
    min-height: 550px;
    padding: 1.5em;
    @media only screen and  (max-width: 768px) {
        flex-direction: column;
        padding: 1em;
    }
    h3 {
        text-align: center;
        font-size: 2em;
        font-weight: 500;
        margin: 0;
        padding: 0;
        min-height: 50px;
        width: 100%;
        border-bottom: 3px solid #ee2626;
    }
    p {
        font-size: 25px;
        padding: 0;
        max-width: 100%;
        max-height: 100%;
    }
    img {
        align-self: center;
        max-width: 290px;
        max-height: 200px;
        /* para ajustar o tamanho */
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2%;
        border: 1px solid #ee2626;
    }
    a {
        margin-top: 1em;
        align-self: end; 
    }
`
const Tecnologia = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
    border-bottom: 3px solid #ee2626;
    svg {
        width: 45px;
        height: 45px;
    }
`



export default ({ post }) => {
    return (
        <Card>
            <h3>{post.title}</h3>
            <p>{post.resumo}</p>
            <img src={post.imageMiniatura} alt={post.title} />
            <Tecnologia>
                <ProjectTechnology tags={post.tagsArray} />
                <Link to={`/blog/${post.id}`} className="secondary-button">Ver mais</Link>
            </Tecnologia>
        </Card>
    )
}


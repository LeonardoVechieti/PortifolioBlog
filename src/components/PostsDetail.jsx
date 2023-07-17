import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Github from '../assets/svg/github'
import ProjectTechnology from './ProjectTechnology'
import Netlify from '../assets/svg/Netlify'
import Tags  from './Tags'

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
    padding-bottom: 25px;
    border-bottom: 2px solid #c4c2c2;
 

    img {
      border-radius: 0.5em;
      border: 1px solid #c4c2c2;
      max-width: 600px;
      height: 400px;
      object-fit: cover;
      margin-top: 10px;
      margin-bottom: 25px;
      @media screen and (max-width: 768px) {
        max-width: 350px;
        height: 200px;
      }
    }
    
    h2 {
      font-size: 35px;
      color: #201f1f;
      margin-bottom: 0.4em;
      white-space: nowrap;
    }
    p, h4 {
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 25px;
        margin-bottom: 0.5em;
        padding: 0;
        margin: 10px;
    }
    h4 {
      font-size: 15px;
      color: #5e5b5b;
    }
`

const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 25px;
    a {
      margin: 0 0.5em;
    }
    svg {
      width: 55px;
      height: 55px;
      &:hover {
        cursor: pointer;
      } 
    }
`
export default ({ post }) => {
  const date = new Date(post.createdAt.seconds * 1000)
  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  return (
    <Page>
      <Container>
        <h2>{post.title}</h2>
        <div>
          <ProjectTechnology tags={post.tagsArray} />
        </div>
        <img src={post.image} alt={post.title} />
        <p>{post.resumo}</p>
        <h4 >Criado por {post.createdBy} em {formattedDate} </h4>
        <Tags tags={post.tagsArray}/>
        <Links>
          {post.urlRepository && (
            <a href={post.urlRepository} title='Repositório' className='tooltip' target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          )}
          {post.deploy && (
            <a href={post.deploy} title='Deploy' className='tooltip' target="_blank" rel="noopener noreferrer">
              <Netlify />
            </a>
          )}
          <Link to={`/blog/${post.id}`} className="secondary-button">Ver Post</Link>
        </Links>
      </Container>
    </Page>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Github from '../assets/svg/github'
import ProjectTecnology from './ProjectTecnology'
import Netlify from '../assets/svg/Netlify'

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
    padding-bottom: 20px;
    border-bottom: 2px solid #c4c2c2;
    @media screen and (max-width: 768px) {
      width: 60%;
    }

    img {
      border-radius: 0.5em;
      border: 1px solid #c4c2c2;
      max-width: 600px;
      height: 400px;
      object-fit: cover;
      margin-top: 10px;
      margin-bottom: 25px;
      @media screen and (max-width: 768px) {
        max-width: 500px;
      height: 300px;
      }
    }
    
    h2 {
      font-size: 35px;
      color: #201f1f;
      margin-bottom: 0.4em;
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
const Tags = styled.span`
    display: inline-block;
    padding: 0.5em;
    margin-bottom: 20px;
    color: #343333;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
      background-color: transparent;
      color: #ee2626;
      cursor: pointer;
    }
    p{
      margin-right: 0.5em;
    }
    span {
      font-weight: bold;
    }
`
const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
          <ProjectTecnology tags={post.tagsArray} />
        </div>
        <img src={post.image} alt={post.title} />
        <p>{post.resumo}</p>
        <h4 >Criado por {post.createdBy} em {formattedDate} </h4>
        <div>
          {post.tagsArray && post.tagsArray.map((tag) => (
            <Link to={`/ search / ${tag}`} key={tag} >
              <Tags>#{tag}</Tags>
            </Link>
          ))}
        </div>
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

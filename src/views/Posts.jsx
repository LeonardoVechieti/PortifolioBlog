import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Github from '../assets/svg/github'
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../hooks/useFatchDocument'
import CardResume from '../components/CardResume'
import Netlify from '../assets/svg/Netlify'
import Tags from '../components/Tags'

const Page = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Sobrepondo o container do css global */
  .container {
    width: 75%;
    margin-top: 50px;
    @media screen and (max-width: 767px) {
    width: 90%;
  }
  }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-bottom: 2em;
    border-bottom: 2px solid #c4c2c2;
    h2 {
      font-size: 35px;
      color: #201f1f;
      margin: 0;
    }
    p, h4 {
        display: flex;
        justify-content: start;
        width: 100%;
        font-size: 25px;
        margin-bottom: 0.5em;
        padding: 0;
        margin: 10px;
    }
    h4 {
      font-size: 15px;
      color: #797474;
      margin-bottom: 20px;
    }
`
const Image = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 0.5em;
      border: 1px solid #c4c2c2;
      max-width: 600px;
      height: 400px;
    }
`
const Paragraph = styled.div`
    width: 100%;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    p {
      text-indent: 2em;
      line-height: 1.5em;
      font-size: 25px;
      margin-bottom: 0.5em;
      padding: 0;
    }
`
const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    a {
      margin: 1em;
    }
    svg {
      width: 55px;
      height: 55px;
      &:hover {
        cursor: pointer;
      } 
    }
`
const MenuRepo = styled.div`
    margin-left: 3px;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: start;
      margin: 0;
    }
`
const Repository = styled.div`
    border: 1px solid #c4c2c2;
    border-radius: 0.5em;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    &:hover {
      cursor: pointer;
      background-color: #c4c2c2;
    }
`


export default () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id)

  let formattedDate = '';
  let paragraphs = [];
  if (post) {
    // Formata a data para o padrão brasileiro
    const date = new Date(post.createdAt.seconds * 1000)
    formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    // Split da string do body 
    paragraphs = post.body.split(".");
    // Adiciona um ponto no final de cada paragrafo
    paragraphs = paragraphs.map((paragraph) => `${paragraph}.`)
    // Remove o ultimo ponto do ultimo paragrafo
    paragraphs[paragraphs.length - 1] = paragraphs[paragraphs.length - 1].replace(".", "")
  }

  return (
    <Page>
      <div className='container'>
        <Container>
          {post && (
            <>
              <h2>{post.title}</h2>
              <h4 >Criado por {post.createdBy} em {formattedDate} </h4>
              <CardResume resume={post.resumo} />
              <Image>
                <img src={post.image} alt={post.title} />
              </Image>
              <Paragraph>
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </Paragraph>
              <h4 >Criado por {post.createdBy} em {formattedDate} </h4>
              <Tags tags={post.tagsArray} />
              <Links>
                <MenuRepo>
                  {post.urlRepository && (
                    <a href={post.urlRepository} target="_blank" rel="noopener noreferrer">
                      <Repository>
                        <Github />
                        <button className='primary-button'>Repositório</button>
                      </Repository>
                      
                    </a>
                  )}
                  {post.deploy && (
                    <a href={post.deploy} target="_blank" rel="noopener noreferrer">
                      <Repository>
                         <Netlify />
                        <button className='primary-button'>Deploy</button>
                      </Repository>
                     
                    </a>
                  )}
                </MenuRepo>
                <div>
                  <Link to={`/blog`}>
                    <a className='secondary-button'>Voltar</a>
                  </Link>
                </div>
              </Links>
            </>
          )}
        </Container>
      </div>
    </Page>
  )
}


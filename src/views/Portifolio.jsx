import React from 'react'
import styled from 'styled-components'
import CardPortifolio from '../components/CardPortifolio'

//hoks
import { Link } from 'react-router-dom'
import { useFetchDocuments } from '../hooks/useFetchDocuments'

const Page = styled.section`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* Complemente o css 'section' do index */
    .container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 20px;
      margin-bottom: 20px;
      max-width: 100%;
      @media only screen and  (max-width: 768px) {
        flex-direction: column;
        flex-wrap: nowrap;
      }
    }
`
export default () => {
  const { documents: posts } = useFetchDocuments("posts")
  return (
    <Page>
      <div className='container'>
        {posts && posts
          .filter(post => post.tagsArray && post.tagsArray.includes('portifolio'))
          .map((post) => (
            <CardPortifolio key={post.id} post={post} />
          ))}
        {posts && posts.length === 0 && (
          <div>
            <p>Não foram encontrados posts!</p>
            <Link className={"primary-button"} to="/login">Login</Link>
          </div>
        )}
      </div>
    </Page>
  )
}

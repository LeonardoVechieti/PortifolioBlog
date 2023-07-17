import React from 'react'
import styled from 'styled-components'

const Page = styled.section`
    padding-top: 50px;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 500px;
      padding: 0 12em;
      @media only screen and  (max-width: 1023px) {
        flex-direction: column;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 4em;
    }
  }
`
const Image = styled.div`
    border-radius: 1%;
    background-color: #fff;
    padding: 6px;
    img {
        width: 100%;
        border-radius: 4%;
        height: 300px;
        width: 300px;
        @media (max-width: 768px) {
            width: 200px;
            height: 200px;
        }
    }
    img:hover {
        /* aumenta */
        transform: scale(1.010);
    }
`
const AboutContainer = styled.div`
    width: 100%;
    margin-left: 2em;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 0;
      
    }
    h2 {
        font-family: 'Inter', sans-serif;
        font-size: 2.5em;
        margin-top: 25px;
    }
    h3 {
        font-family: 'Inter', sans-serif;
        font-size: 1.5em;
        font-weight: 500;
        margin-bottom: 25px;    
    }
    p {
        font-size: 1.3em;
        padding: 0;
        margin: 10px;
        @media screen and (max-width: 768px) {
          text-indent: 2em;
        }
    }
    div {
      padding-top: 2em;
    }
`

const About = () => {

  return (
    <Page>
      <div className='container'>
        <Image>
          <img src="https://avatars.githubusercontent.com/u/92764500?v=4" />
        </Image>
        <AboutContainer>
          <h2>Leonardo Vechieti</h2>
          <h3>Desenvolvedor de Software</h3>
          <p>
            Trabalho com tecnologia desde 2013 e desenvolvimento de software desde 2019, sempre utilizando ferramentas e tecnologias modernas e seguindo o padrão do mercado.
          </p>
          <p>
            Atualmente trabalho com ferramentas Adobe e desenvolvimento de softweares ERP.
          </p>
          <p>
            Cientista da computação pela Universidade Regional Integrada (URI).
          </p>
          <div>
            <a className="secondary-button" href='mailto:leonardovechieti@outlook.com' >CONTACT ME</a>
          </div>
        </AboutContainer>
      </div>
    </Page>
  )
}

export default About
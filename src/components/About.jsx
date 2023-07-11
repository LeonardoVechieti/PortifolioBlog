import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  padding-left: 10em;
  padding-right: 10em;
  /* border-bottom: 3px solid #e6e4e4; */
  @media only screen and  (max-width: 1023px) {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 4em;
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
`
const AboutContainer = styled.div`
    margin-left: 2em;
    h2 {
        font-family: 'Inter', sans-serif;
        font-size: 2.5em;
        margin-bottom: 0.5em;
    }
    h3 {
        font-family: 'Inter', sans-serif;
        font-size: 1.5em;
        font-weight: 500;
        margin-bottom: 0.5em;
    }
    p {
        font-size: 1.3em;
        padding: 0;
        margin: 10px;
    }
    div {
      padding-top: 2em;
    }
`

const About = () => {

  return (
    <AboutWrapper>
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
    </AboutWrapper>
  )
}

export default About
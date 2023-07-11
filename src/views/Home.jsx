import React from 'react'
import Header from '../components/Header'
import Social from '../components/Social'
import styled from 'styled-components'

const Home = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

    div {
        width: 80%;
    }
    a {
        margin: 10px 10px;
    }

`

export default () => {
    return (
        <Home>
            <div>
                <Header />
                <Social />
                <a className="secondary-button" href='mailto:exemplo@exemplo.com' > CONTACT ME</a>
                <a className="secondary-button" href='src\assets\Leonardo Gomes Vechieti.pdf' download> DOWLOAD CV</a>
            </div>
        </Home>
    )
}

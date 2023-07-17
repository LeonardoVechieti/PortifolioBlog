import React from 'react'
import Header from '../components/Header'
import Social from '../components/Social'
import styled from 'styled-components'

const Page = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 10rem;
    margin-bottom: 3rem;
    a {
        margin: 10px 10px;
    }
`
export default () => {
    return (
        <Page>
            <div className='container'>
                <Header />
                <Social />
                <a className="secondary-button" href='mailto:exemplo@exemplo.com' > CONTACT ME</a>
                <a className="secondary-button" href='src\assets\Leonardo Gomes Vechieti.pdf' download> DOWNLOAD CV</a>
            </div>
        </Page>
    )
}

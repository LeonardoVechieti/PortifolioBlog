import React from 'react'
import Button from '../components/Button'
import styled from 'styled-components'

const NotFound = styled.section`
    padding-top: 3em;
    padding-left: 10em;
    padding-right: 10em;
    padding-bottom: 3em;
    text-align: center;
    h1 {
        font-size: 8em;
        margin: 0;
    }
    h2 {
        font-size: 2em;
        margin: 0;
    }
    Button {
        margin-top: 3em;
    }
`

export default () => {
  return (
    <NotFound>
        <h1>404</h1>
        <h2>Page not found</h2>
        <Button name="Go to Home" style="secondary-button" onChange={() => window.location.href = '/'} />
    </NotFound>
  )
}
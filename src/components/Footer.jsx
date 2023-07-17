import React from 'react'
import styled from 'styled-components'
import Social from './Social'
import { NavLink } from 'react-router-dom'

const Footer = styled.footer`
    width: 100;
    background-color: transparent;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 30px;
   ;

    svg {
        width: 70px;
        height: 70px;
        @media screen and (max-width: 768px) {
          width: 50px;
          height: 50px;
        }
    }
`
const Copyright = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #201f1f;
    margin-top: 25px;

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }
    
    div {
        display: flex;
        flex-direction: row;
    }
    a {
        color: #d43030;
        text-decoration: none;
        margin-left: 15px;
    }
    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        font-size: 15px;
        white-space: nowrap;
      }
      a {
        white-space: nowrap;
        margin: 0;
        margin-top: 15px;
        font-size: 18px;
      }
    }
`

export default ({style}) => {
  return (
    <Footer>
      <Social />
      <Copyright>
        <div className={style}>
          <div>
            Copyright 2023 &copy;
          </div>
          <NavLink to='/'>
            Leonardo Vechieti
          </NavLink>
        </div>
      </Copyright>
    </Footer>
  )
}
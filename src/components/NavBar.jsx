import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'

//import da autenticação
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'
import { Logo } from './Logo'

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
`
const Header = styled.header`
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        text-decoration: none;
    }
`

const Nav = styled.nav`
  
    ul {     
        display: flex;
        justify-content: space-between;
        list-style: none;  
        white-space: nowrap;
        @media screen and (max-width: 1023px) {
        /* display: none; */
        position: absolute;
        top: 8vh;
        right: 0;
        width: 50vw;
        height: 92vh;
        background-color: #ffffff;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        }
        li {
            margin: 0 10px;
            @media screen and (max-width: 1023px) {
                margin: 0;
            }
        }
    }
`
const MobileMenu = styled.div`
    cursor: pointer;
    margin-left: 25px; ;
    div{
        width: 32px;
        height: 2px;
        background-color: #000000;
        margin: 8px;
    }
    @media screen and (min-width: 1023px) {
        display: none;
    }
`
const NavBar = () => {

    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <Page>
            <Header>
                <NavLink to="/">
                    <Logo />
                </NavLink>
                <Nav>
                    <MobileMenu>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </MobileMenu>
                    <ul>
                        <li>
                            <NavLink to="/" className={"primary-button"}> Home </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={"primary-button"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portifolio" className={"primary-button"}>Portifólio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className={"primary-button"}>Blog</NavLink>
                        </li>
                        {/* {!user && (
                        <>
                            <li>
                                <NavLink to="/login" className={"primary-button"}>Login</NavLink>
                            </li>
                        </>
                    )} */}
                        {user && (
                            <>
                                <li>
                                    <NavLink to="/posts/create" className={"primary-button"}>New Post</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard" className={"primary-button"}>Dashboard</NavLink>
                                </li>
                            </>
                        )}
                        {user && (
                            <li>
                                <button onClick={logout} className={"primary-button"}>Logout</button>
                            </li>
                        )}

                    </ul>
                </Nav>
            </Header>
        </Page>

    )
}

export default NavBar
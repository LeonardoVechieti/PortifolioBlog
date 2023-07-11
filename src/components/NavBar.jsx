import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'

//import da autenticação
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'
import { Logo } from './Logo'

const Header = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 10em 0.5em 10em;
    @media only screen and  (max-width: 1023px) {
        flex-direction: column;
        padding: 0.5em 0 0.5em 0;
    }

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
    }
    
`

const NavBar = () => {

    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <Header>    
            <NavLink to="/">
                <Logo />
            </NavLink>
            <Nav>
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

    )
}

export default NavBar
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthValue } from '../../../context/AuthContext';
import { useAuthentication } from '../../../hooks/useAuthentication';


const Menu = styled.div`
    
    .desktop{
        display: flex;
        justify-content: space-between;
        list-style: none;  
        white-space: nowrap;
        @media screen and (max-width: 1023px) {
            display: none;
        }
        ul {
            display: flex;
            justify-content: space-between;
            list-style: none;  
            white-space: nowrap;
        }
    }
    .mobile{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;  
        white-space: nowrap;
        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            list-style: none;  
            white-space: nowrap;
        }
        li {
            margin-top: 20px;justify-content: center;
            margin-bottom: 20px;
            a {
                align-items: center;
                
                margin: 0;
                padding: 0;
                font-size: 23px;
            }
        }
    }
    
`
export default ({ type, closeMenu , button}) => {
    // Seta o default das props
    type = type || 'desktop';
    closeMenu = closeMenu || (() => { });
    button = button || 'primary-button';

    const { user } = useAuthValue();
    const { logout } = useAuthentication();
    return (
        <Menu>
            <ul className={type}>
                <li onClick={closeMenu}>
                    <NavLink to="/" className={button}> Home </NavLink>
                </li>
                <li onClick={closeMenu}>
                    <NavLink to="/about" className={button}>About</NavLink>
                </li>
                <li onClick={closeMenu}>
                    <NavLink to="/portifolio" className={button}>Portifólio</NavLink>
                </li>
                <li onClick={closeMenu}>
                    <NavLink to="/blog" className={button}>Blog</NavLink>
                </li>
                {/* {!user && (
                        <>
                            <li>
                                <NavLink to="/login" className={button}>Login</NavLink>
                            </li>
                        </>
                    )} */}
                {user && (
                    <>
                        <li onClick={closeMenu}>
                            <NavLink to="/posts/create" className={button}>New Post</NavLink>
                        </li >
                        <li onClick={closeMenu}>
                            <NavLink to="/dashboard" className={button}>Dashboard</NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <li onClick={closeMenu}>
                        <button onClick={logout} className={button}>Logout</button>
                    </li>
                )}
            </ul>
        </Menu>

    )
}
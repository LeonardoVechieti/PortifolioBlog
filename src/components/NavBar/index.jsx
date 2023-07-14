import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { MenuMobile } from './MenuMobile'
import { Logo } from '../Logo'
import Menu from './Menu'

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
    display: flex;
`

const MobileMenu = styled.div`
    cursor: pointer;
    margin-left: 25px; ;
    div{
        width: 32px;
        height: 2px;
        background-color: #e03737;
        margin: 8px;
    }
    @media screen and (min-width: 1023px) {
        display: none;
    }
    &.active div:nth-child(1) {
        transform: rotate(-45deg) translate(-8px, 8px);
    }
    &.active div:nth-child(2) {
        opacity: 0;
    }
    &.active div:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -7px);
    }

`
const NavBar = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <Page>
            <Header>
                <NavLink to="/">
                    <Logo />
                </NavLink>
                <Nav>
                    <MobileMenu
                        className='mobile-menu'
                        onClick={() => {
                            setMenuIsVisible(!menuIsVisible);
                        }}
                    >
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </MobileMenu>
                    <MenuMobile
                        menuIsVisible={menuIsVisible}
                        setMenuIsVisible={setMenuIsVisible}
                    />
                    <Menu type='desktop' />
                </Nav>
            </Header>
        </Page>
    )
}


export default NavBar
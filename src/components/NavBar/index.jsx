import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { MenuMobile } from './MenuMobile'
import { Logo } from '../Logo'
import Menu from './Menu'

const Page = styled.div`
    position: fixed;
    z-index: 1;
    background-color: #FFFFFF;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.45);
`
const Header = styled.header`
    /* position: relative; */
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MobileMenu = styled.div`
    cursor: pointer;
    margin-right: 15px;
    border: 1px solid #d4cccc;
    border-radius: 5px;
    div{
        width: 32px;
        height: 2px;
        background-color: #696262;
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
                {/* Menu Hamburguer */}
                <MobileMenu
                    className='mobile-menu'
                    onClick={() => {
                        setMenuIsVisible(!menuIsVisible);
                    }}
                >
                    <>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </>
                </MobileMenu>

                {/* Logo */}
                <NavLink to="/">
                    <Logo />
                </NavLink>
                {/* Menu versão desktop */}
                <Menu type='desktop' />
                {/* Menu versão mobile (Modal)*/}
                <MenuMobile
                    menuIsVisible={menuIsVisible}
                    setMenuIsVisible={setMenuIsVisible}
                />
            </Header>
        </Page>
    )
}
export default NavBar
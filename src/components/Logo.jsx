import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.div`
    background-color: transparent;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 2em;
    letter-spacing: 0.1em;
    
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .name {
        color: #000;
        border-bottom: 3px solid #ec2626;
    }
    .sub-name {
        color: #1d1b1b;
        font-weight: 600;
        border-top: 3px solid #ec2626;
    }
    /* animate */
    .name {
        animation: name 1s ease-in-out;
    }
    .sub-name {
        animation: sub-name 1s ease-in-out;
    }
    @keyframes name {
        0% {
            transform: translateX(-100px);
            opacity: 0;
        }
        100% {
            transform: translateX(0px);
            opacity: 1;
        }
    }
    @keyframes sub-name {
        0% {
            transform: translateX(100px);
            opacity: 0;
        }
        100% {
            transform: translateX(0px);
            opacity: 1;
        }
    }

`


export const Logo = () => {
    return (
        <LogoWrapper>
            <div>
                <div className='name'>Leonardo</div>
                <div className='sub-name'>Vechieti</div>
            </div>
        </LogoWrapper>
    )
}

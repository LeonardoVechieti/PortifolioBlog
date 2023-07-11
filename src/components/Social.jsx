import React from 'react'
import styled from 'styled-components'
import Linkedin from  '../assets/svg/linkedin'
import Github from  '../assets/svg/github'
import Instagram from  '../assets/svg/instagram'


const SocialWrapper = styled.div`

    display: flex;
    justify-content: start;
    margin-top: 20px;
    margin-bottom: 20px;

    a {
        margin: 0 10px;
    }
    

`

const Social = () => {
    return (
        <SocialWrapper>
            <a href="https://www.linkedin.com/in/leonardo-vechieti-a111a8238/" title="Linkedin" className='tooltip'>
                <Linkedin />
            </a>
            <a href="https://github.com/LeonardoVechieti" title="Github" className='tooltip'>
                <Github />
            </a>
            <a href="https://www.instagram.com/leonardovechieti/" title="Instagram" className='tooltip'>
                <Instagram />
            </a>

        </SocialWrapper>
    )
}

export default Social
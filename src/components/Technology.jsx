import styled from 'styled-components'
import Javascript from '../assets/svg/Javascript'
import Reactjs from '../assets/svg/React'
import Vuejs from '../assets/svg/Vuejs'
import Nodejs from '../assets/svg/Nodejs'
import Kotlin from '../assets/svg/Kotlin'
import Sass from '../assets/svg/Sass'
import Javax from '../assets/svg/.Javax'


const TecnologyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 400px;
    @media only screen and  (max-width: 768px) {    
        height: 100%;
        margin-top: 50px;
        margin-bottom: 100px;
    }
    h2 {
        font-size: 2.5em;
        letter-spacing: 0.1em;
        @media screen and (max-width: 768px) {
        font-size: 2em;
        }
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        @media screen and (max-width: 1024px) {
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
        }
        @media only screen and  (max-width: 768px) {
            flex-direction: column;
        }
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 144px;
        min-height: 162px;
    }
    svg {
        width: 130px;
        height: 130px;
        @media only screen and  (max-width: 768px) {
            width: 100px;
            height: 100px;
        }
    }
    svg:hover {
        width: 160px;
        height: 160px;
        @media only screen and  (max-width: 768px) {
            width: 130px;
            height: 130px;
        }
    }

    
`

export default () => {
    return (
        <TecnologyWrapper>
            <h2>Tecnologias</h2>
            <div className='container'> 
                <a title='Javascript' className='tooltip'>
                    <Javascript />
                </a>
                <a title='React' className='tooltip'>
                    <Reactjs />
                </a>
                <a title='Vue' className='tooltip'>
                    <Vuejs />
                </a>
                <a title='Node' className='tooltip'>
                    <Nodejs />
                </a>
                <a title='Kotlin' className='tooltip'>
                    <Kotlin />
                </a>
                <a title='Sass' className='tooltip'>
                    <Sass />
                </a>
                <a title='Java' className='tooltip'>
                    <Javax />
                </a>
                
            </div>

        </TecnologyWrapper>
    )
}

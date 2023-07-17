import styled from 'styled-components'
import Vuejs from '../assets/svg/Vuejs'
import Reactjs from '../assets/svg/React'
import Javascript from '../assets/svg/Javascript'
import Nodejs from '../assets/svg/Nodejs'
import Kotlin from '../assets/svg/Kotlin'
import Android from '../assets/svg/Android'
import Ios from '../assets/svg/Ios'
import Sass from '../assets/svg/Sass'


const TechnologyWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    margin: 0;
    padding: 0;
    a ,svg {
        width: 45px;
        height: 45px;
    }
`

export default ({ tags }) => {
  return (
    <TechnologyWrapper>
      {tags.includes('android') ? <a title="Android" className='tooltip'><Android /> </a> : null}
      {tags.includes('ios') ? <a title="Ios" className='tooltip'><Ios /> </a> : null}
      {tags.includes('java') ? <a title="Java" className='tooltip'><Javax /> </a> : null}
      {tags.includes('vue') ? <a title="Vuejs" className='tooltip'><Vuejs /> </a> : null}
      {tags.includes('react') ? <a title="React" className='tooltip'><Reactjs /> </a> : null}
      {tags.includes('react-native') ? <a title="React Native" className='tooltip'><Reactjs /> </a> : null}
      {tags.includes('javascript') ?  <a title="Javascript" className='tooltip'><Javascript /> </a> : null}
      {tags.includes('sass') ? <a title="Sass" className='tooltip'><Sass /> </a> : null}
      {tags.includes('node') ? <a title="Nodejs" className='tooltip'><Nodejs /> </a> : null}
      {tags.includes('kotlin') ? <a title="Kotlin" className='tooltip'><Kotlin /> </a> : null}
    </TechnologyWrapper>
  )
}


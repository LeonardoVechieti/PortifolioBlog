import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import Menu from '../Menu';
import Footer from '../../Footer';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);
  // Essa função e passada para o componente Menu
  const closeMenu = () => {
    setMenuIsVisible(false);
  };
  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <div>
        <Menu type={'mobile'} closeMenu={closeMenu} button={'primary-button'} />
        <Footer style={'menu'}/>
      </div>

    </Container>
  )
}

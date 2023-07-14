import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import Menu from '../Menu';

export default ({ menuIsVisible, setMenuIsVisible }) => {
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
      <Menu type={'mobile'} closeMenu={closeMenu} button={'secondary-button'} />
    </Container>
  )
}
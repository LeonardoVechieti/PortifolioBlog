import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 600px;
  top: 100px;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #d4cccc;;
  opacity: 0;
  pointer-events: none;
  transform: translateX(-50px);
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  transition: .5s;

  > svg {
    color: #696262;
    position: absolute;
    top: 1.7rem;
    left: 1.7rem;
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }
  `}
`;
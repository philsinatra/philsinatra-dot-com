import styled from 'styled-components'
import crossword from '../assets/ui/crossword.png'
const Header = styled.header`
  align-items: center;
  background: url(${crossword}) repeat;
  border-bottom: 1px solid var(--color-gray-800);
  box-shadow: var(--material-shadow);
  color: var(--black);
  display: flex;
  height: 6rem;
  justify-content: space-between;
  left: 0;
  padding: 0 1.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;

  a {
    text-decoration: none;
    transition: transform var(--duration-100) ease-in-out;

    &:hover,
    &:focus {
      transform: translateY(-0.15rem) rotate(-3deg);
    }
  }

  #menu-button {
    background-color: transparent;
    border: 0;
    color: var(--black);
    height: 2.5rem;
    padding: 0;
    transition: background-color var(--duration-100) ease-in-out;
    width: 2.5rem;

    svg {
      fill: currentColor;
      height: 2rem;
      width: 2rem;
    }

    &:hover,
    &:focus {
      background-color: hsla(210, 1%, 56%, 0.1);
    }

    &:hover {
      cursor: pointer;
    }
  }
`

export default Header

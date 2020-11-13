import styled from 'styled-components'

const NavStyles = styled.nav`
  align-items: center;
  background: var(--dark-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  transform: translateX(100%);
  transition: transform var(--duration-200) cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 300;

  &.is-open {
    transform: translateX(0);
  }

  @media screen and (min-width: 23.8125em) {
  }

  @media screen and (min-width: 48em) and (min-height: 56.25em) {
    border-left: 1px solid var(--red);
    max-width: 23.75rem;
  }

  button {
    background-color: transparent;
    border: 0;
    color: var(--white);
    padding: 8px;
    position: absolute;
    right: 1.875rem;
    top: 3.4375rem;
    z-index: 310;

    svg {
      color: var(--white);
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

  ul {
    list-style: none;
    margin: 0;
    max-height: 90vh;
    overflow-y: scroll;
    padding: 5rem 2.25rem 2.25rem;
    position: relative;
    text-align: center;
    width: 100%;

    @media screen and (min-width: 48em) and (min-height: 56.25em) {
      padding: 2.5rem;
    }

    li {
      margin-bottom: 2.5rem;

      a {
        color: var(--color-gray-800);
        font-size: 1.5rem;
        text-decoration: none;
        text-transform: uppercase;
        transition: color var(--duration-100) ease-in-out;

        &:hover,
        &:focus {
          color: var(--white);
        }

        &[aria-current='page'] {
          color: var(--red);
        }

        @media screen and (min-width: 48em) {
          font-size: 2rem;
        }
      }
    }
  }
`

export default NavStyles

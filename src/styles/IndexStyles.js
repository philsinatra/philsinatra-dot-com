import styled from 'styled-components'
import avatar from '../assets/images/avatar.jpg'
import crossword from '../assets/ui/crossword.png'

const IndexStyles = styled.div`
  align-items: center;
  background-color: var(--dark-gray);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  /* overflow: hidden; */

  .aside,
  .avatar,
  .email,
  .monogram,
  .nav-overflow,
  .social {
    display: none;
  }

  a {
    transition: background-color var(--duration-100) ease-in-out;

    &:hover,
    &:focus {
      background-color: hsla(210, 1%, 56%, 0.1);
    }

    &:hover {
      cursor: pointer;
    }
  }

  header {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    left: 0;
    padding: 55px 30px 0 0;
    position: fixed;
    top: 0;
    width: 100%;

    #menu-button {
      background-color: transparent;
      border: 0;
      color: var(--white);
      height: 2.5rem;
      padding: 0;
      transition: background-color var(--duration-100) ease-in-out,
        color var(--duration-100) ease-in-out;
      width: 2.5rem;

      svg {
        fill: currentColor;
        height: 2rem;
        width: 2rem;
      }

      &:hover,
      &:focus {
        background-color: hsla(210, 1%, 56%, 0.1);
        color: var(--red);
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  section {
    color: var(--gray);
    max-width: 31.25rem;
    padding: 0 2.6875rem;

    a {
      color: var(--red);
    }

    h1 {
      color: var(--white);
      font-size: 4rem;
      font-weight: lighter;
      margin: 0;
      text-transform: uppercase;
    }

    .hr {
      background-color: var(--red);
      height: 2px;
      margin: 4.0625rem 0 1.625rem;
      width: 65%;
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.6;
    }

    .signature {
      align-items: center;
      display: flex;
      justify-content: flex-end;

      svg {
        height: 84px;
        max-width: 60%;
      }
    }
  }

  @media screen and (min-width: 48em) {
    header {
      align-items: center;
      display: flex;
      justify-content: flex-end;
      left: 0;
      padding: 55px 30px 0 0;
      position: fixed;
      top: 0;
      width: 100%;
    }

    .nav-overflow {
      align-items: center;
      display: flex;
      justify-content: flex-end;
      width: 100%;

      ul {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;

        li {
          margin-right: 4.25rem;

          a {
            color: var(--white);
            font-family: var(--type-sans-medium);
            font-size: 1rem;
            letter-spacing: 0.6rem;
            padding: 0.25rem 0.25rem 0.25rem 0.85rem;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            transition: background-color var(--duration-100) ease-in-out,
              color var(--duration-100) ease-in-out;

            &:hover,
            &:focus {
              color: var(--red);
            }
          }
        }
      }
    }

    main {
      display: grid;
      grid-template-columns: 160px 1fr auto;
      width: 100%;
    }

    section {
      grid-column: 2;
      grid-row: 1;
      max-width: 27rem;
      padding: 0;
      transform: translateY(50px);

      h1 {
        font-size: 6rem;
      }

      .hr {
        max-width: 157px;
      }

      .signature {
        transform: translate(-100px, 0);

        svg {
          max-width: 8.6875rem;
        }
      }
    }

    .email {
      grid-row: 1;
      grid-column: 3;
      display: block;
      position: absolute;
      bottom: 160px;
      right: -73px;
      transform: rotate(-90deg);

      a {
        color: var(--gray);
        font-size: 0.75rem;
        letter-spacing: 6px;
        text-decoration: none;
        text-transform: lowercase;
        transition: background-color var(--duration-100) ease-in-out,
          color var(--duration-100) ease-in-out;

        &:hover,
        &:focus {
          background-color: transparent !important;
          color: var(--red);
        }
      }
    }
  }

  @media screen and (min-width: 64em) {
    /* background: linear-gradient(
      90deg,
      #e4e5e4 0%,
      #ebebe9 15%,
      var(--dark-gray) 15%,
      var(--dark-gray) 100%
    ); */
    background: var(--dark-gray);

    main {
      grid-template-columns: 0.5fr 0.7fr 1rem 2fr 78px;
      grid-template-rows: 140px auto;
      margin-top: 0;
      height: 100vh;
      width: 100vw;
    }

    aside {
      background: linear-gradient(#e4e5e4 0%, #efefef 100%);
      background: url(${crossword}) repeat;
      display: block;
      grid-row: 1 / 3;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .avatar {
      background: url(${avatar}) no-repeat;
      background-size: cover;
      border-radius: 50%;
      display: block;
      height: 11.5rem;
      width: 11.5rem;
      transform: translateX(50%);
    }

    .social {
      align-items: center;
      bottom: 3.6rem;
      display: block;
      display: flex;
      height: 2rem;
      justify-content: center;
      left: 2.8rem;
      position: absolute;

      a {
        color: var(--white);
        display: block;
        height: 2rem;
        margin-right: 0.5rem;
        transition: color var(--duration-100) ease-in-out;
        width: 2rem;

        @media (any-hover: hover) {
          color: var(--color-gray-700);
        }

        &:hover,
        &:focus {
          background-color: transparent;
          color: var(--red);
        }

        svg {
          height: 2rem;
          width: 2rem;
        }
      }
    }

    section {
      align-self: center;
      grid-column: 4;
      grid-row: 2;
      transform: none;
    }

    .email {
      grid-column: 5;
      grid-row: 2;
      left: auto;
      right: -74px;
      transform: rotate(90deg);
    }
  }

  @media screen and (min-width: 72em) {
    main {
      grid-template-columns: 1fr 0.7fr 1rem 2fr 78px;

      aside {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .monogram {
          color: var(--black);
          display: block;
          left: 42px;
          position: absolute;
          top: 58px;
          z-index: 20;

          p {
            font-family: var(--type-sans-semibold);
            font-size: 2rem;
            font-size: clamp(1.75rem, 2vw, 2.5rem);
            margin: 0;
            text-transform: uppercase;

            span {
              color: var(--dark-red);
              display: inline-block;
              margin-right: 0.5rem;
            }
          }
        }
      }

      .avatar {
        height: 22rem;
        width: 22rem;
        /* transform: none; */
      }
    }
  }
`

export default IndexStyles

import styled from 'styled-components'
import wave from '../assets/ui/wave-blue.svg'

const DesignStyles = styled.div`
  --text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);

  .mast {
    background: url(${wave}) no-repeat;
    background-size: cover;
    height: 40vh;
    min-height: 26.25rem;
    width: 100vw;
    align-items: center;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 3000px) {
      background-position: center -150px;
    }

    h1 {
      color: var(--black);
      font-family: var(--type-sans-semibold);
      font-size: clamp(3rem, 3vw, 6rem);
      margin: 0;
    }
  }

  .logos {
    background-color: var(--color-gray-100);

    .logo-grid {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: 1fr;
      padding: 1.5rem;

      > div {
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 1.5rem;

        @media (any-hover: hover) {
          transition: all var(--duration-100) ease-in-out;

          &:hover {
            box-shadow: var(--material-shadow);
            transform: translateY(-8px);
          }
        }
      }

      > div:nth-child(3) {
        img {
          max-width: 15.625rem;
        }
      }

      > div:nth-child(4) {
        img {
          width: 21.875rem;
        }
      }

      @media screen and (min-width: 48em) {
        grid-template-columns: repeat(2, 1fr);
        margin: 0 auto;
        max-width: 62.5rem;
        width: 90%;

        &::before {
          content: '';
          width: 0;
          padding-bottom: 100%;
          grid-row: 1 / 1;
          grid-column: 1 / 1;
        }

        > *:first-child {
          grid-row: 1 / 1;
          grid-column: 1 / 1;
        }

        > div {
          align-items: center;
          display: flex;
          justify-content: center;
        }

        > div:nth-child(3) {
          grid-column: 2;
          grid-row: 2;
        }

        > div:nth-child(4) {
          img {
            width: 18.75rem;
          }
        }

        > div:nth-child(5),
        > div:nth-child(7),
        > div:nth-child(8),
        > div:nth-child(9),
        > div:nth-child(10),
        > div:nth-child(11) {
          img {
            width: 25rem;
          }
        }

        > div:nth-child(9) {
          background-image: linear-gradient(
            180deg,
            #82f8b7 0%,
            #b7f856 100%
          ) !important;
        }

        > div:nth-child(10) {
          border-top: 5px solid #ff4800;
        }
      }

      @media screen and (min-width: 64em) {
        gap: 3rem;
        padding: 3rem;
      }

      @media screen and (min-width: 75em) {
        > div {
          height: 28.125rem;
          width: 28.125rem;
        }
      }
    }
  }
`

export default DesignStyles

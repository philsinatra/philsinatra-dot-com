import styled from 'styled-components'
import waveSteps from '../assets/ui/wave-steps-001.svg'
import wave from '../assets/ui/wave.svg'

const AboutStyles = styled.div`
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

  .stack {
    background-color: var(--dark-gray);
    color: var(--white);
    /* padding: 8.125rem 0; */
    padding: 1.5rem;

    .stack-grid {
      margin: 0 auto;
      max-width: 1300px;

      > div {
        @media (any-hover: hover) {
          transition: all var(--duration-200);

          &:hover {
            background-color: var(--color-gray-300);
            transform: scale(105%);
          }
        }
      }

      @media screen and (min-width: 48em) {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);

        div:nth-child(1) {
          grid-column: 1 / 3;
        }
      }

      @media screen and (min-width: 64em) {
        grid-template-columns: repeat(3, 1fr);

        div:nth-child(1) {
          grid-column: 1;
        }
      }

      div {
        background-color: var(--color-gray-200);
        border-radius: 4px;
        padding: 1.5rem;
        text-align: center;

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      }
    }
  }

  .about-details {
    > .mast {
      background: url(${waveSteps}) repeat-x;
      height: auto;
      min-height: 5.25rem;
      width: 100vw;
      align-items: center;
      display: flex;
      justify-content: center;

      @media screen and (min-width: 48em) {
        min-height: 14.25rem;
      }
    }

    .container {
      font-size: 1rem;
      font-size: clamp(1rem, 1.5vw, 125%);
      margin: 3rem auto;
      max-width: 55ch;
      padding: 0 1.5rem;
    }
  }
`

export default AboutStyles

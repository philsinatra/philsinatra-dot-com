import styled from 'styled-components'
import wave from '../assets/ui/wave-jagged-001.svg'

const WorkStyles = styled.div`
  --teal: rgb(60, 191, 192);
  --green: rgb(25, 193, 150);
  --text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);

  @media screen and (min-width: 64em) {
    .intro-grid {
      grid-template-columns: auto 1fr 1fr;
      gap: 1.5rem;
    }
  }

  a {
    color: var(--green) !important;

    &:hover,
    &:focus {
      background-color: var(--teal);
      color: var(--white) !important;
      outline: 1px dashed var(--color-gray-700);
    }
  }

  .mast {
    background: url(${wave}) repeat-x;
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

  .details {
    background: var(--dark-gray);
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 3rem;

    .details-grid {
      margin: 0 auto;
      padding: 3rem;

      > div {
        margin-bottom: 3rem;
      }

      div:first-child {
        align-items: center;
        display: flex;
        justify-content: center;
      }

      @media screen and (min-width: 48em) {
        > div {
          margin: 0;

          p {
            margin-bottom: 0;
          }
        }

        div:first-child {
          margin-bottom: 3rem;
        }
      }

      @media screen and (min-width: 64em) {
        direction: rtl;
        display: grid;
        gap: 3rem;
        grid-template-columns: repeat(2, 1fr);
        max-width: 1000px;
        width: 90%;

        > div {
          direction: ltr;
        }

        div:first-child {
          margin-bottom: 0;
        }
      }
    }
  }

  .work-resume {
    background: var(--color-gray-1000);
    padding: 3rem;
  }

  .work-resume-container {
    margin: 0 auto;
    max-width: 1000px;

    @media screen and (min-width: 48em) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1.5rem;
    }

    h2,
    h3 {
      margin-top: 0;
    }

    h2 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    h3 {
      margin-bottom: 0;
    }

    ul {
      padding-left: 1.2rem;

      @media screen and (min-width: 31.25em) {
        padding-left: 2.5rem;
      }
    }

    ul ul {
      padding-left: 1rem;
      list-style-type: square;
    }
  }
`

export default WorkStyles

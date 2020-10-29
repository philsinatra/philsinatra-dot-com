import styled from 'styled-components'

const IntroGridStyles = styled.section`
  padding: 8.125rem 0;

  .intro-grid {
    margin: 0 auto;
    max-width: 55ch;
    width: 80%;

    h2 {
      font-size: 2.375rem;
      line-height: 1.2;
      letter-spacing: -0.04;
      margin: 0.5rem 0 1.5625rem 0;
      word-wrap: break-word;
    }

    h3 {
      font-size: 0.875rem;
      font-weight: normal;
      color: var(--color-gray-700);
      letter-spacing: 0;
      margin: 0;
      word-wrap: break-word;
    }

    p {
      margin-top: 0;
    }

    a {
      white-space: nowrap;
    }

    @media screen and (min-width: 64em) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5em;
      max-width: 1000px;
      width: 90vw;
    }
  }
`

export default IntroGridStyles

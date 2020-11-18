import styled from 'styled-components'

const ArticleStyles = styled.article`
  --background: var(--white);
  --color: var(--black);

  /* @media (prefers-color-scheme: dark) {
    --background: var(--dark-gray);
    --color: var(--white);
  } */

  background: var(--background);
  color: var(--color);
  font-family: var(--type-article);
  font-size: 1rem;
  line-height: 1.6875;
  min-height: 100vh;
  padding: 6rem 0 0;

  a {
    color: var(--dark-red);
    transition: all var(--duration-100) ease-in-out;

    &:hover,
    &:focus {
      background-color: var(--red);
      color: var(--white);
    }
  }

  .contain {
    margin: 0 auto;
    max-width: 75ch;
    padding: 0 1.5rem;

    @media screen and (min-width: 48em) {
      padding: 0 3rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-style: normal;
    font-weight: bold;
  }

  h1 {
    letter-spacing: -0.011em;
    line-height: 3.75rem;
    margin: 0.14em 0 -0.27em;

    @media screen and (min-width: 48em) {
      font-size: 3rem;
    }
  }
`

export default ArticleStyles

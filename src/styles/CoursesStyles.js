import styled from 'styled-components'

const CoursesStyles = styled.section`
  > .mast {
    align-items: center;
    background: linear-gradient(var(--drexel-blue), hsl(211, 83%, 10%));
    display: flex;
    height: 40vh;
    justify-content: center;
    max-height: none;
    overflow: hidden;
    position: relative;
    width: 100vw;
  }

  blockquote {
    color: var(--white);
    font-family: var(--type-serif);
    font-size: 2rem;
    font-size: clamp(1.75rem, 3vw, 3.5rem);
    font-style: italic;
    font-weight: lighter;
    line-height: 1.2;
    position: relative;
    text-shadow: var(--text-shadow);
    width: 35ch;
    z-index: 20;
  }

  .dragon {
    left: 0;
    opacity: 0.2;
    position: absolute;
    z-index: 10;
  }

  .classes {
    font-size: 1rem;
    font-size: clamp(1rem, 2vw, 1.25rem);
    margin: 0 auto;
    max-width: 65ch;
    padding: 3rem 1.5rem;
  }
`

export default CoursesStyles

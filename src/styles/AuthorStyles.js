import styled from 'styled-components'
import wave from '../assets/ui/wave-orange.svg'

const AuthorStyles = styled.div`
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

  .author-details {
    .container {
      font-size: 1rem;
      font-size: clamp(1rem, 1.5vw, 125%);
      margin: 3rem auto;
      max-width: 55ch;
      padding: 0 1.5rem;
    }

    .logo {
      margin-bottom: 3rem;
    }

    .puppy {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 3rem auto;
    }

    .video {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 5rem auto 3rem auto;
      max-width: 80rem;
      position: relative;

      .kitty {
        max-width: 200px;
        position: absolute;
        right: 1rem;
        top: -72px;
        z-index: 50;
      }
    }
  }
`

export default AuthorStyles

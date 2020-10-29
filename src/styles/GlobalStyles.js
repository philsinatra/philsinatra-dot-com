import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: hsla(0, 0%, 0%, 1);
    --blue-muted: #95dce6;
    --color-gray-100: #1e1e1e;
    --color-gray-200: #2c2c2c;
    --color-gray-300: #393939;
    --color-gray-400: #494949;
    --color-gray-50: #080808;
    --color-gray-500: #5c5c5c;
    --color-gray-600: #7c7c7c;
    --color-gray-700: #a2a2a2;
    --color-gray-75: #1a1a1a;
    --color-gray-800: #c8c8c8;
    --color-gray-900: #efefef;
    --dark-blue-muted: #7ebac3;
    --dark-gray: hsla(330, 4%, 11%, 1);
    --dark-red-muted: #ca7553;
    --dark-red: hsla(4, 64%, 41%, 1);
    --red: hsl(349, 100%, 50%);
    --dark-yellow-muted: #d5ab5d;
    --drexel-blue: hsl(211, 83%, 16%);
    --drexel-gold: #fcc600;
    --gold: hsla(54, 33%, 65%, 1);
    --gray: hsla(210, 1%, 56%, 1);
    --red-muted: #ed8962;
    --white: hsla(0, 0%, 100%, 1);
    --yellow-muted: #fac96d;
    --duration-100: 130ms;
    --duration-200: 160ms;
    --duration-300: 190ms;
    --duration-400: 220ms;
    --material-shadow:
      0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14),
      0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  html {
    box-sizing: border-box;
    font-size: 100%;

    @supports (font-kerning: normal)
      and (font-variant-ligatures: common-ligatures contextual)
      and (font-variant-numeric: oldstyle-nums proportional-nums) {
      font-feature-settings: normal;
      font-kerning: normal;
      font-variant-ligatures: common-ligatures contextual;
      font-variant-numeric: oldstyle-nums proportional-nums;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: var(--type-sans);
  }

  a {
    white-space: nowrap;
  }

  abbr {
    font-feature-settings: 'kern', 'liga', 'clig', 'calt', 'c2sc', 'smcp';
    @supports (font-variant-caps: all-small-caps) {
      font-feature-settings: normal;
      font-variant-caps: all-small-caps;
    }
  }

  b, strong {
    font-weight: bold;
  }

  [hidden] { display: none; }

  i, em {
    font-style: italic;
  }

  img, object, video { max-width: 100%; }

  small {
    display: inline-block;
    line-height: 1.1;
  }

  svg use { pointer-events: none; }

  .visually-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    width: 1px;
  }

  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } */

  .shroud {
    background-color: hsla(0, 0%, 0%, .8);
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 25;
  }
`

export default GlobalStyles

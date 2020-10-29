import { createGlobalStyle } from 'styled-components'
import PoppinsBold from '../assets/fonts/Poppins-Bold.woff2'
import PoppinsItalic from '../assets/fonts/Poppins-Italic.woff2'
import Poppins from '../assets/fonts/Poppins-Regular.woff2'
import ralewayLight from '../assets/fonts/Raleway-Light.woff2'
import ralewayMedium from '../assets/fonts/Raleway-Medium.woff2'
import ralewayRegular from '../assets/fonts/Raleway-Regular.woff2'
import ralewaySemiBold from '../assets/fonts/Raleway-SemiBold.woff2'

const Typography = createGlobalStyle`
  @font-face {
    font-family: Raleway;
    src: url(${ralewayRegular});
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Raleway;
    src: url(${ralewayLight});
    font-weight: light;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: RalewayMedium;
    src: url(${ralewayMedium});
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: RalewaySemiBold;
    src: url(${ralewaySemiBold});
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url(${PoppinsBold}) format('woff2');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
src: url(${Poppins}) format('woff2');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
src: url(${PoppinsItalic}) format('woff2');
      font-weight: normal;
      font-style: italic;
      font-display: swap;
  }

  :root {
    --type-serif: Georgia, Times, Times New Roman, serif;
    --type-sans: Raleway,
                -apple-system,
                BlinkMacSystemFont,
                'Segoe UI',
                Roboto,
                Helvetica,
                Arial,
                sans-serif,
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol';
    --type-sans-medium: RalewayMedium, var(--type-sans);
    --type-sans-semibold: RalewaySemiBold, var(--type-sans);
    --type-article: Poppins, var(--type-sans);
  }
`

export default Typography

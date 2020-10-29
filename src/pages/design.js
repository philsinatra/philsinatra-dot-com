import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import logoBST from '../assets/images/logo-BST.svg'
import logoLauren from '../assets/images/logo-boldizar.svg'
import logoBrisco from '../assets/images/logo-brisco-woodworks.svg'
import logoDreamBig from '../assets/images/logo-dream-big.svg'
import logoGSC from '../assets/images/logo-gsc.svg'
import logoGWSI from '../assets/images/logo-gwsi.svg'
import logoMGF from '../assets/images/logo-meangreen-fitness.svg'
import logoGerace from '../assets/images/logo-mgerace.svg'
import logoPerformanceDance from '../assets/images/logo-performance-dance.svg'
import logoPinelands from '../assets/images/logo-pinelands-repair.svg'
import logoRBA from '../assets/images/logo-riverbend-art-company.svg'
// import logoSourceSetr from '../assets/images/logo-sourcesetr.svg'
import logoVGL from '../assets/images/logo-vertical-global-logistics.png'
import { SEO } from '../components'
import { DesignStyles, IntroGridStyles } from '../styles'
import Article from '../templates/Article'

const DesignPage = props => {
  const logos = [
    { src: logoMGF, alt: 'Mean Green Fitness', bg: 'white' },
    { src: logoRBA, alt: 'River Bend Art Company', bg: 'black' },
    { src: logoGerace, alt: 'M. Gerace', bg: 'white' },
    { src: logoGWSI, alt: 'GWSI', bg: 'black' },
    { src: logoGSC, alt: 'GSC', bg: 'white' },
    { src: logoPerformanceDance, alt: 'Performance Dance', bg: 'black' },
    { src: logoBrisco, alt: 'Briscoe Wood Works', bg: 'white' },
    { src: logoVGL, alt: 'Vertical Global Logistics', bg: 'white' },
    { src: logoLauren, alt: 'Lauren Boldizar', bg: 'white' },
    { src: logoPinelands, alt: 'Pinelands Repair', bg: 'white' },
    { src: logoDreamBig, alt: 'Dream Big', bg: 'white' },
    // { src: logoSourceSetr, alt: '', bg: 'white' },
    { src: logoBST, alt: 'BST Blackstone Stewart', bg: 'black' },
  ]

  return (
    <>
      <SEO title="Design" />
      <Article pathName={props.location.pathName}>
        <DesignStyles>
          <section aria-labelledby="mast-heading" className="mast">
            <h1 id="mast-heading">Design</h1>
          </section>
          <IntroGridStyles id="intro">
            <div className="intro-grid">
              <div>
                <h3>Some logos I've made</h3>
                <h2>Digital Design</h2>
              </div>
              <div>
                <p>
                  I am primarily a front end developer, which means I spend a
                  ton of time working with code. I always get excited when I get
                  to do some creative design work, whether it is interface
                  development, or some graphic design work for print or on
                  screen.
                </p>
              </div>
              <div>
                <p>
                  Below are some logos I have recently designed in no particular
                  order. I've also done a lot of print design over the years,
                  for weddings and family events, apparel and other marketing
                  materials.
                </p>
              </div>
            </div>
          </IntroGridStyles>
          <section id="logos" className="logos">
            <div className="logo-grid">
              {logos.map(({ alt, bg, src }) => (
                <div
                  css={css`
                    background: ${bg};
                  `}
                  key={uuidv4()}
                >
                  <img src={src} alt={`${alt} logo`} />
                </div>
              ))}
            </div>
          </section>
        </DesignStyles>
      </Article>
    </>
  )
}

export default DesignPage

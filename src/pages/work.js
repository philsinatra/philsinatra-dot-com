import React from 'react'
import epvCloud from '../assets/images/epv-cloud.png'
import { SEO } from '../components'
import { IntroGridStyles, WorkStyles } from '../styles'
import Article from '../templates/Article'

const WorkPage = props => {
  const getYear = () => {
    const start = 2005
    const year = new Date().getFullYear()
    return year - start
  }
  return (
    <>
      <SEO title="Courses I Teach" />
      <Article pathName={props.location.pathName}>
        <WorkStyles>
          <section aria-labelledby="mast-heading" className="mast">
            <h1 id="mast-heading">Work</h1>
          </section>
          <IntroGridStyles id="intro">
            <div className="intro-grid">
              <div>
                <h3>Where I work</h3>
                <h2>EP Visual Design</h2>
              </div>
              <div>
                <p>
                  For the past {getYear()} years I have worked with an extremely
                  talented group of professionals at{' '}
                  <a
                    href="http://epvisual.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EP Visual Design
                  </a>
                  . I wear many hats at EPV, including lead front end developer,
                  lead designer as well as serving as project manager for a
                  number of our clients.
                </p>
              </div>
              <div>
                <p>
                  I lead in the design and development of websites, web and
                  native mobile apps, web based training and mobile learning
                  solutions and custom content management systems.
                </p>
              </div>
            </div>
          </IntroGridStyles>
          <section className="details">
            <img src={epvCloud} alt="EPV client and app logos" />
          </section>
        </WorkStyles>
      </Article>
    </>
  )
}

export default WorkPage

import { Link } from 'gatsby'
import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Nav, SEO } from '../components'
import AppContext from '../state'
import { IndexStyles } from '../styles'

export default function Home() {
  const [state, setState] = useContext(AppContext)

  useEffect(() => {
    setState({ ...state, navOpen: false })
  }, [])

  return (
    <>
      <SEO title="Home" />
      <Helmet>
        <html className="home" lang="en" />
      </Helmet>
      <IndexStyles>
        <header role="banner">
          {/* <nav role="nav" className="nav-overflow">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav> */}
          <button
            id="menu-button"
            onClick={() => setState({ ...state, navOpen: true })}
          >
            <svg>
              <use xlinkHref="#menu-icon" />
            </svg>
          </button>
        </header>
        {state.navOpen ? <Nav /> : null}
        <main role="main">
          <aside role="sidebar">
            <div className="monogram">
              <p>
                <span>Phil</span>Sinatra
              </p>
            </div>
            <div className="avatar" />
            <div className="social">
              <a
                href="https://github.com/philsinatra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg>
                  <use xlinkHref="#github-icon" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/philsinatra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg>
                  <use xlinkHref="#linkedin-icon" />
                </svg>
              </a>
              <a
                href="https://twitter.com/philsinatra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg>
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </a>
            </div>
          </aside>
          <section id="intro">
            <h1>Phil Sinatra</h1>
            <div className="hr" />
            <p>
              I'm a full stack developer, digital media engineer, instructor,
              designer and author. You can{' '}
              <Link to="/about">read more about me here</Link>.
            </p>
            <div className="signature">
              <svg>
                <use xlinkHref="#signature" />
              </svg>
            </div>
          </section>
          <div className="email">
            <a href="mailto:phil@philsinatra.com">phil@philsinatra.com</a>
          </div>
        </main>
      </IndexStyles>
    </>
  )
}

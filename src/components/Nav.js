import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useContext, useEffect, useState } from 'react'
import { useLockBodyScroll } from '../hooks'
import AppContext from '../state'
import { NavStyles } from '../styles'
import SocialLinks from './SocialLinks'

const Nav = () => {
  const [state, setState] = useContext(AppContext)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setOpen(state.navOpen), 10)
    return () => {
      clearTimeout(t)
    }
  }, [state.navOpen])

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  useLockBodyScroll()

  return (
    <>
      <NavStyles className={open ? 'is-open' : ''}>
        <button onClick={() => setState({ ...state, navOpen: false })}>
          <svg>
            <use xlinkHref="#close-icon" />
          </svg>
        </button>
        <ul>
          {site.siteMetadata.menuLinks.map(({ link, name }) => (
            <li key={`link-${name}`}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
        <SocialLinks />
      </NavStyles>
      <div
        className="shroud"
        hidden={state.navOpen ? false : true}
        onClick={() => setState({ ...state, navOpen: false })}
      />
    </>
  )
}

export default Nav

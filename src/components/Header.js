import { Link } from 'gatsby'
import React, { useContext, useEffect } from 'react'
import AppContext from '../state'
import { HeaderStyles } from '../styles'
import Monogram from './Monogram'
import Nav from './Nav'

const Header = () => {
  const [state, setState] = useContext(AppContext)

  useEffect(() => {
    setState({ ...state, navOpen: false })
  }, [])

  return (
    <>
      <HeaderStyles>
        <Link to="/">
          <Monogram />
        </Link>
        <button
          id="menu-button"
          onClick={() => setState({ ...state, navOpen: true })}
        >
          <svg>
            <use xlinkHref="#menu-icon-bold" />
          </svg>
        </button>
        {/* brand menu button links on big screens */}
      </HeaderStyles>
      {state.navOpen ? <Nav /> : null}
    </>
  )
}

export default Header

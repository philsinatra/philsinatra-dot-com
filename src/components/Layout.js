import 'normalize.css'

import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Spritesheet from './Spritesheet'

const Layout = ({ children }) => (
  <>
    <Typography />
    <GlobalStyles />
    <Spritesheet />
    {children}
  </>
)

export default Layout

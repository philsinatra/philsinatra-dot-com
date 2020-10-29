import React, { useState } from 'react'

const AppContext = React.createContext()

export function AppProvider({ children }) {
  const [state, setState] = useState({
    navOpen: false,
  })
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext

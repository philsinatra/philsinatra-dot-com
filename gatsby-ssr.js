import React from 'react'
import Layout from './src/components/Layout'
import { AppProvider } from './src/state'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <AppProvider>{element}</AppProvider>
}

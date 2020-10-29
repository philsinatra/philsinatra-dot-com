import React from 'react'
import { Footer, Header } from '../components'
import { ArticleStyles } from '../styles'

const Article = ({ children, location }) => {
  return (
    <>
      <Header location={location} />
      <main role="main">
        <ArticleStyles>{children}</ArticleStyles>
      </main>
      <Footer role="contentinfo" />
    </>
  )
}

export default Article

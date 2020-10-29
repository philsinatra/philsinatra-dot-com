import { Link, navigate } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { SEO } from '../components'
import Article from '../templates/Article'

const NotFoundPage = props => {
  const [seconds, setSeconds] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds - 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })

  useEffect(() => {
    if (seconds <= 0) navigate('/')
  }, [seconds])

  return (
    <>
      <SEO title="Page Not Found" />
      <Article pathName={props.location.pathName}>
        <section
          aria-labelledby="page-heading"
          css={css`
            padding-top: 4rem;
          `}
        >
          <div className="contain">
            <h1
              id="page-heading"
              css={css`
                margin-bottom: 1.5rem !important;
              `}
            >
              Page Not Found
            </h1>
            <p
              css={css`
                color: var(--color-gray-400);
                font-size: 90%;
              `}
            >
              Error: 404
            </p>
            <p>Looks like the page you're looking for doesn't exist.</p>
            <p>Returning home in {seconds} seconds&hellip;</p>
            <p>
              <Link to="/">Go Home Now!</Link>
            </p>
          </div>
        </section>
      </Article>
    </>
  )
}

export default NotFoundPage

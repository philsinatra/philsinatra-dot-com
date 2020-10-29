import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWindowResize } from '../hooks'

const MonogramStyles = styled.div`
  color: var(--black);
  display: block;

  p {
    font-family: var(--type-sans-semibold);
    font-size: 2rem;
    font-size: clamp(1.75rem, 2vw, 2.5rem);
    margin: 0;
    text-transform: uppercase;

    span {
      color: var(--dark-red);
      display: inline-block;
    }
  }
`

const Monogram = () => {
  const [brand, setBrand] = useState({
    first: '',
    last: '',
  })

  const size = useWindowResize()

  useEffect(() => {
    const breakPoint = 768
    const { width } = size

    setBrand({
      ...brand,
      first: width < breakPoint ? 'P' : 'Phil',
      last: width < breakPoint ? 'S' : 'Sinatra',
    })
  }, [size])

  return (
    <MonogramStyles>
      <p>
        <span>{brand.first}</span>
        {brand.last}
      </p>
    </MonogramStyles>
  )
}

export default Monogram

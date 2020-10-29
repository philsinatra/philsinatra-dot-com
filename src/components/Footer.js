import React from 'react'
import styled from 'styled-components'
import SocialLinks from './SocialLinks'

const FooterStyles = styled.footer`
  align-items: center;
  background-color: var(--color-gray-50);
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1.5rem;
  position: relative;

  > div {
    margin-bottom: 0.75rem;

    p {
      margin: 0;
    }
  }

  div > ul {
    position: static;
  }

  @media screen and (min-width: 37.5em) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0.75rem 1.5rem;

    > div {
      margin: 0;
    }
  }
`

const Footer = () => (
  <FooterStyles>
    <div>
      <p>Phil Sinatra &copy; {new Date().getFullYear()}</p>
    </div>
    <div>
      <SocialLinks />
    </div>
  </FooterStyles>
)

export default Footer

import React from 'react'
import styled from 'styled-components'

const SocialLinkStyles = styled.ul`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0 !important;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;

  li {
    a {
      color: var(--white);

      @media (any-hover: hover) {
        color: var(--color-gray-700);
      }

      &:hover,
      &:focus {
        color: var(--white);
      }

      svg {
        height: 2rem;
        width: 2rem;
      }
    }

    &:nth-child(2) {
      a {
        margin: 0 1rem;
      }
    }
  }
`

const SocialLinks = () => (
  <SocialLinkStyles className="social">
    <li>
      <a
        href="https://github.com/philsinatra"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg>
          <use xlinkHref="#github-icon" />
        </svg>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/philsinatra/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg>
          <use xlinkHref="#linkedin-icon" />
        </svg>
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/philsinatra"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg>
          <use xlinkHref="#twitter-icon" />
        </svg>
      </a>
    </li>
  </SocialLinkStyles>
)

export default SocialLinks

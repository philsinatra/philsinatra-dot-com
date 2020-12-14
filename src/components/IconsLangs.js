import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import IconCreativeCloud from '../assets/icons/icon-creative-cloud.svg'
import IconBootstrap from '../assets/icons/logos_bootstrap.svg'
import IconJavascript from '../assets/icons/logos_javascript.svg'
// import IconJquery from '../assets/icons/logos_jquery.svg'
import IconNodejs from '../assets/icons/logos_nodejs.svg'
import IconWebpack from '../assets/icons/logos_webpack.svg'
import IconWordpress from '../assets/icons/logos_wordpress-icon.svg'
import IconBash from '../assets/icons/simple-icons_gnubash.svg'
import IconCSS from '../assets/icons/vscode-icons_file-type-css.svg'
import IconGatsby from '../assets/icons/vscode-icons_file-type-gatsby.svg'
import IconGraphql from '../assets/icons/vscode-icons_file-type-graphql.svg'
import IconGulp from '../assets/icons/vscode-icons_file-type-gulp.svg'
import IconHtml from '../assets/icons/vscode-icons_file-type-html.svg'
import IconLess from '../assets/icons/vscode-icons_file-type-less.svg'
import IconStylus from '../assets/icons/vscode-icons_file-type-light-stylus.svg'
import IconMysql from '../assets/icons/vscode-icons_file-type-mysql.svg'
import IconPhp from '../assets/icons/vscode-icons_file-type-php.svg'
import IconPython from '../assets/icons/vscode-icons_file-type-python.svg'
import IconReactjs from '../assets/icons/vscode-icons_file-type-reactjs.svg'
import IconScss from '../assets/icons/vscode-icons_file-type-scss2.svg'
import IconSvelte from '../assets/icons/vscode-icons_file-type-svelte.svg'

const IconSlideStyles = styled.div`
  display: none;

  @media screen and (min-width: 48em) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 2rem;
    max-width: 95rem;
    width: 100%;

    img {
      height: 2rem;
    }
  }
  @media screen and (min-width: 64em) {
    img {
      height: 2.75rem;
    }
  }
  @media screen and (min-width: 68em) {
    img {
      height: 3rem;
    }
  }
`

const IconSlide = () => {
  const icons = [
    IconHtml,
    IconCSS,
    IconJavascript,
    IconReactjs,
    IconSvelte,
    IconGatsby,
    IconGraphql,
    // IconJquery,
    IconNodejs,
    IconPhp,
    IconMysql,
    IconCreativeCloud,
    IconWebpack,
    IconGulp,
    IconBash,
    IconPython,
    IconScss,
    IconLess,
    IconStylus,
    IconWordpress,
    IconBootstrap,
  ]

  return (
    <IconSlideStyles>
      {icons.map(icon => (
        <img key={uuidv4()} src={icon} alt="" />
      ))}
    </IconSlideStyles>
  )
}

export default IconSlide

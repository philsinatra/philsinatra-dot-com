import React from 'react'
import dragon from '../assets/images/dragon_yellow.svg'
import { SEO } from '../components'
import { CoursesStyles } from '../styles'
import Article from '../templates/Article'

const CoursesPage = props => {
  return (
    <>
      <SEO title="Courses I Teach" />
      <Article pathName={props.location.pathName}>
        <CoursesStyles className="drexel">
          <div className="mast">
            <blockquote>
              At Drexel's Westphal College of Media Arts & Design we go about
              teaching design, media, and the performing arts in a different
              way.
            </blockquote>
            <div className="dragon">
              <img src={dragon} alt="" />
            </div>
          </div>
          <div className="classes">
            <p>
              I teach several classes in{' '}
              <a
                href="https://drexel.edu/westphal/academics/undergraduate/IDM/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Drexel's Interactive Digital Media program
              </a>
              .
            </p>
            <ul>
              <li>IDM100: Wordpress</li>
              <li>IDM221: Web Authoring I</li>
              <li>IDM222: Web Authoring II</li>
              <li>IDM231: Scripting I</li>
              <li>IDM232: Scripting II</li>
              <li>IDM364: Interactive App Design IV</li>
              <li>IDM-T380: Workflow Optimization Techniques</li>
              <li>DIGM491: Senior Project Studio</li>
            </ul>
            <p>
              Topics range from beginners skills in basic HTML5, CSS3 and
              JavaScript, to more advanced topics and app development concepts
              including React, PHP, MySQL, Bash scripting, bundlers and task
              runners.
            </p>
            <p>
              I also serve as a faculty advisor for senior project groups, where
              I've seen some truly amazing work being done by the next
              generation of designers and developers.
            </p>
          </div>
        </CoursesStyles>
      </Article>
    </>
  )
}

export default CoursesPage

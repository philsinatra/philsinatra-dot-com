import { Link } from 'gatsby'
import React from 'react'
import { SEO } from '../components'
import { AboutStyles, IntroGridStyles } from '../styles'
import Article from '../templates/Article'
import { getYearTotal } from '../utils/getYearTotal'

const AboutPage = props => {
  return (
    <>
      <SEO title="About Me" />
      <Article pathName={props.location.pathName}>
        <AboutStyles>
          <section aria-labelledby="mast-heading" className="mast">
            <h1 id="mast-heading">About Me</h1>
          </section>
          <IntroGridStyles id="intro" className="intro">
            <div className="intro-grid">
              <div>
                <h3>Something about me</h3>
                <h2>Full stack web developer</h2>
              </div>
              <div>
                <p>
                  I'm Phil Sinatra, a full stack web developer and designer from
                  New Jersey. I currently work full time with{' '}
                  <a
                    href="http://epvisual.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EP Visual Design
                  </a>{' '}
                  as a developer, designer and project manager. I also teach at{' '}
                  <a
                    href="https://drexel.edu/westphal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Drexel University
                  </a>{' '}
                  in the Westphal College of Media Arts &amp; Design.
                </p>
              </div>
              <div>
                <p>
                  I've been involved with design and development for{' '}
                  {getYearTotal()} years. I spend most of my development time
                  working with JavaScript, CSS3, and HTML5. I love to learn and
                  share with the web development community.
                </p>
              </div>
            </div>
          </IntroGridStyles>
          <section id="stack" className="stack">
            <div className="stack-grid">
              <div>
                <h3>Primary Core Skills</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS (SCSS / LESS / Stylus, Styled Components)</li>
                  <li>JavaScript</li>
                  <li>Node.js</li>
                  <li>PHP</li>
                  <li>SQL, MySQL, GraphQL, PDO</li>
                  <li>Web-based Training</li>
                  <li>CMS & Database Development</li>
                  <li>Shell Scripting (Bash, Python, Fish etc)</li>
                  <li>Mobile & Responsive Design</li>
                  <li>Accessibility</li>
                </ul>
              </div>
              <div>
                <h3>Libraries</h3>
                <ul>
                  <li>React</li>
                  <li>Express</li>
                  <li>Gulp/Webpack</li>
                  <li>GatsbyJS</li>
                  <li>Wordpress</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                </ul>
              </div>
              <div>
                <h3>Additional Skills</h3>
                <ul>
                  <li>UI & UX Design & Development</li>
                  <li>Graphic Design</li>
                  <li>Instructional Design</li>
                  <li>Animation</li>
                  <li>Video Editing &amp; Compositing</li>
                  <li>Audio Editing</li>
                </ul>
              </div>
            </div>
          </section>
          <section
            id="about-details"
            className="about-details"
            aria-label="More details"
          >
            <div className="mast" />
            <div className="container">
              <p>
                I graduated from Drexel University's{' '}
                <a
                  href="https://drexel.edu/westphal/academics/undergraduate/IDM/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Interactive Digital Media
                </a>{' '}
                program, where I learned not only web based development and
                design, but also 3D modeling, animation, video production and
                web based gaming. I am proud to still be a part of this program
                as an instructor.
              </p>
              <p>
                I recently begin studies for another degree from the University
                of Florida in{' '}
                <a
                  href="http://education.ufl.edu/educational-technology/online-masters/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Educational Technology
                </a>
              </p>
              <p>
                Besides all that fun stuff, I am a co-author and creator with my
                wife of a children's book series called{' '}
                <a
                  href="http://myscruffypuppy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Scruffy Puppy
                </a>
                . I do some graphic design, video and animation work on the side
                when I have some time to spare.
              </p>
              <p>
                When I'm not working, I love spending time with my wife, kids,
                pets and family. I love music and shredding 🤘 on my guitar 🎸.
                I also love playing any and all sports, reading, warm weather
                and craft beer.
              </p>
              <p>
                I have a <Link to="/uses">uses page</Link> with information on
                apps and themes I use regularly. If you have any questions, feel
                free to{' '}
                <a
                  href="https://twitter.com/philsinatra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  follow me on Twitter
                </a>
                .
              </p>
            </div>
          </section>
        </AboutStyles>
      </Article>
    </>
  )
}

export default AboutPage

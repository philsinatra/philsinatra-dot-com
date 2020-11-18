import React from 'react'
import epvCloud from '../assets/images/epv-cloud.png'
import { SEO } from '../components'
import { IntroGridStyles, WorkStyles } from '../styles'
import Article from '../templates/Article'

const WorkPage = props => {
  const getYear = () => {
    const start = 2005
    const year = new Date().getFullYear()
    return year - start
  }
  return (
    <>
      <SEO title="Courses I Teach" />
      <Article pathName={props.location.pathName}>
        <WorkStyles>
          <section aria-labelledby="mast-heading" className="mast">
            <h1 id="mast-heading">Work</h1>
          </section>
          <IntroGridStyles id="intro">
            <div className="intro-grid">
              <div>
                <h3>Where I work</h3>
                <h2>EP Visual Design</h2>
              </div>
              <div>
                <p>
                  For the past {getYear()} years I have worked with an extremely
                  talented group of professionals at{' '}
                  <a
                    href="http://epvisual.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EP Visual Design
                  </a>
                  . I wear many hats at EPV, including lead front end developer,
                  lead designer as well as serving as project manager for a
                  number of our clients.
                </p>
              </div>
              <div>
                <p>
                  I lead in the design and development of websites, web and
                  native mobile apps, web based training and mobile learning
                  solutions and custom content management systems.
                </p>
              </div>
            </div>
          </IntroGridStyles>

          <section
            id="work-resume"
            className="work-resume"
            aria-label="Work details"
          >
            <div className="work-resume-container">
              <div className="roles">
                <h2>Roles</h2>
                <h3>Senior Front-End Developer</h3>
                <ul>
                  <li>
                    I work with clients to develop the overall look and design
                    of websites and applications
                  </li>
                  <li>
                    I write all of the website code using modern languages and
                    techniques, while ensuring compatibility within the client
                    delivery environment
                  </li>
                  <li>
                    I produce, maintain and modify all of the user interfaces
                  </li>
                  <li>
                    I incorporate applications, graphics, audio and video clips
                    into client websites and applications
                  </li>
                  <li>I create tools that enhance the user's experience</li>
                  <li>
                    I ensure websites and applications are accessible across
                    platforms and devices
                  </li>
                  <li>
                    I routinely test websites for ease of use, speed and other
                    quality factors
                  </li>
                  <li>I fix and issues or bugs that arise</li>
                </ul>
                <h3>Project Manager</h3>
                <ul>
                  <li>
                    I follow the scope from the proposal stage, to the technical
                    work up and finally to the development and delivery of the
                    product
                  </li>
                  <li>
                    I participate in the initial conception stage along with a
                    client in order to better meet the needs of the consumer and
                    to translate those expectations to my team
                  </li>
                  <li>
                    I lead the design process by working with a team of graphics
                    designers, writers, audio/visual producers and web
                    developers
                  </li>
                  <li>
                    I work to find and solve any problems with the function of a
                    project by implementing testing processes and working with
                    my team to address any issues
                  </li>
                  <li>
                    I supervise a team of professionals by developing effective
                    training procedures, appropriate task assignments, positive
                    client experiences and top quality control processes
                  </li>
                  <li>
                    I aim to meet all project goals within the specified budget,
                    regularly adjusting practices to reflect cost saving
                    measures
                  </li>
                  <li>
                    I have developed additional skills and banks of knowledge by
                    regularly attending and teaching classes at higher education
                    establishments
                  </li>
                </ul>
                <h3>Back-End Developer</h3>
                <ul>
                  <li>I participate in the entire application lifecycle</li>
                  <li>I troubleshoot and debug applications and websites</li>
                  <li>I perform UI tests to optimize performance</li>
                  <li>
                    I manage cutting-edge technologies and improve legacy
                    applications
                  </li>
                  <li>I provide training and support to internal teams</li>
                  <li>I build reusable code and libraries for future use</li>
                </ul>
                <h3>Front-End Designer</h3>
                <ul>
                  <li>
                    I determine the structure and design of websites and
                    applications
                  </li>
                  <li>I ensure user experience determines design choices</li>
                  <li>I develop features that enhance the user experience</li>
                  <li>
                    I build balance between functional and aesthetic design
                  </li>
                  <li>I utilize a variety of markup languages</li>
                  <li>I maintain brand consistency throughout design</li>
                </ul>
                <h3>Junior Instructional Designer</h3>
                <ul>
                  <li>
                    I work to create engaging learning activities and compelling
                    course content that enhances retention and transfer
                  </li>
                  <li>
                    I work with subject matter experts to identify target
                    audience's training needs
                  </li>
                  <li>
                    I state instructional end goals and create content that
                    matches those goals
                  </li>
                  <li>
                    I help to visualize instructional graphics, user interfaces
                    and the finished training product
                  </li>
                  <li>
                    I conduct instructional research and analysis on learners
                    and contexts
                  </li>
                  <li>
                    I apply tested instructional design theories, practices and
                    methods
                  </li>
                  <li>
                    I create supporting material and media in the forms of
                    audio, video, simulations, role plays, games etc.
                  </li>
                  <li>
                    I decide on the criteria used to judge learner's performance
                    and develop assessment instruments
                  </li>
                  <li>I write and maintain projects documentation</li>
                </ul>
              </div>
              <div className="skills">
                <h2>Skills</h2>
                <ul>
                  <li>HTML5, CSS3</li>
                  <li>JavaScript (ES7+), Node.js</li>
                  <li>React, Vue</li>
                  <li>PHP, SQL, MySQL, MongoDB, Firebase</li>
                  <li>Bash, Python, Fish</li>
                  <li>a11y Accessibility</li>
                  <li>
                    Adobe Creative Suite
                    <ul>
                      <li>Photoshop</li>
                      <li>Illustrator</li>
                      <li>After Effects</li>
                      <li>Premier</li>
                      <li>Audition</li>
                      <li>InDesign</li>
                      <li>Acrobat</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="details">
            <img src={epvCloud} alt="EPV client and app logos" />
          </section>
        </WorkStyles>
      </Article>
    </>
  )
}

export default WorkPage

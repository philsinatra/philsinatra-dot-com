import React, { useState } from 'react'
import kittyAnnoyed from '../assets/images/kitty-annoyed.png'
import kittySleeping from '../assets/images/kitty-sleeping.png'
import logo from '../assets/images/logo-scruffy-puppy.png'
import puppy from '../assets/images/puppy-sitting-full.png'
import trailer from '../assets/videos/978-1-7337749-0-1-delivery.mp4'
import { SEO } from '../components'
import { AuthorStyles, IntroGridStyles } from '../styles'
import Article from '../templates/Article'

const AuthorPage = props => {
  const [kittyIs, setKittyIs] = useState(kittySleeping)

  return (
    <>
      <SEO title="Author" />
      <Article pathName={props.location.pathName}>
        <AuthorStyles>
          <section aria-labelledby="mast-heading" className="mast">
            <h1 id="mast-heading">Author</h1>
          </section>

          <IntroGridStyles id="intro" className="intro">
            <div className="intro-grid">
              <div>
                <h3>Stuff I've Written</h3>
                <h2>Books & Code</h2>
              </div>
              <div>
                <p>
                  I love to read. My wife{' '}
                  <a
                    href="https://www.instagram.com/riverbendartco/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Melissa
                  </a>{' '}
                  and I both read a lot to our young boys. Melissa is an
                  extremely{' '}
                  <a
                    href="https://www.instagram.com/riverbendartco/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    talented artist
                  </a>
                  . We decided one day to write our own children's book series
                  based on our cat Hurley and our dog Miller.{' '}
                </p>
              </div>
              <div>
                <p>
                  There are currently two books complete in the{' '}
                  <a
                    href="http://myscruffypuppy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scruffy Puppy
                  </a>{' '}
                  Series,{' '}
                  <a
                    href="https://www.amazon.com/dp/1733774904?ref_=pe_3052080_397514860"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scruffy Puppy Gets A Bath
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.amazon.com/dp/1733774912/ref=sr_1_3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scruffy Puppy's Big Adventure
                  </a>
                  . Melissa and I wrote the stories together, and Melissa did
                  all of the illustrations for the book, website and social
                  media.
                </p>
              </div>
            </div>
          </IntroGridStyles>
          <section className="author-details">
            <div className="container">
              <div className="logo">
                <img src={logo} alt="Scruffy Puppy logo" />
              </div>
              <p>
                We read to our two boys every night, and often we have to read
                the same story over and over, especially to our little guy. One
                of our goals with the Scruffy Puppy stories is to create
                something that is entertaining for children and for parents.
                There is a heavy focus on fun color and large illustrations, and
                a story that engages everyone involved.
              </p>
              <div className="puppy">
                <img src={puppy} alt="Scruffy Puppy" />
              </div>
              <p>
                We are actively working on concepts for the next story. We
                appreciate any support and would love to hear feedback from
                anyone who reads the either of the books.
              </p>
              <p>
                I created a couple animations to go along with the initial
                release of the first book in the series, both of which are
                available to watch on{' '}
                <a
                  href="http://myscruffypuppy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  myscruffypuppy.com
                </a>
                . Here is one of the animations.
              </p>
            </div>
            <div className="video">
              <div className="kitty">
                <img
                  alt="kitty sleeping"
                  src={kittyIs}
                  onMouseOver={() => setKittyIs(kittyAnnoyed)}
                  onMouseOut={() => setKittyIs(kittySleeping)}
                />
              </div>
              <video preload="auto" controls>
                <source src={trailer} type="video/mp4" />
              </video>
            </div>
            <div className="container">
              <h2>Open Source Software</h2>
              <p>
                I've also written a few open source plugins for the development
                community. Here are the details:
              </p>
              <h3>Nest Comments</h3>
              <p>
                This plugin/extension helps with commenting code in text
                editors. If your code contains a comment, and you want to add a
                new comment to temporarily disable a block or portion of code,
                the built in commenting functionality does not actually place
                the comment tags in expected locations. If an existing comment
                is included in the content being commented out, the first
                instance of a --> or */ closing comment tag will end the entire
                comment.
              </p>
              <p>
                This extension will convert pre-existing comments to safe
                characters, allowing a new block comment that includes the
                original comment. It also reverses the effect to uncomment the
                same block of code. It's available for{' '}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=philsinatra.nested-comments"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visual Studio Code
                </a>
                ,{' '}
                <a
                  href="https://packagecontrol.io/packages/HTML%20Nest%20Comments"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sublime Text
                </a>{' '}
                and{' '}
                <a
                  href="https://atom.io/packages/html-nested-comments"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Atom
                </a>
                .
              </p>
              <h3>Sketch Color Vars</h3>
              <p>
                I wrote a Sketch plugin for exporting color values as variables
                for use in various CSS pre-processors called{' '}
                <a
                  href="https://github.com/philsinatra/Sketch-Color-Vars"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sketch Color Vars
                </a>
                .
              </p>
            </div>
          </section>
        </AuthorStyles>
      </Article>
    </>
  )
}

export default AuthorPage

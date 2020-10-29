import React from 'react'
import { SEO } from '../components'
import Article from '../templates/Article'

const UsesPage = props => (
  <>
    <SEO title="Stuff I Use" />
    <Article pathName={props.location.pathName}>
      <section
        aria-labelledby="page-heading"
        css={css`
          padding-top: 4rem;
        `}
      >
        <div className="contain">
          <h1 id="page-heading">Stuff I Use</h1>
          <p>
            Students ask me frequently about what hardware and software I use.
            This page will serve as a living document and place where I'll keep
            a list of what I'm currently using in my day to day development and
            design work.
          </p>
          <h2>Editor</h2>
          <ul>
            <li>
              <a
                href="https://code.visualstudio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visual Studio Code
              </a>{' '}
              is my current editor.
            </li>
            <li>
              I change themes regularly (currently rocking{' '}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cobalt2
              </a>
              ). I have created a few themes, including{' '}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=philsinatra.macos-dark-mode-theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dark Mode
              </a>{' '}
              and{' '}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=philsinatra.popping-and-locking-vscode-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Popping and Locking Black
              </a>{' '}
              . I'm also a fan of{' '}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Night Owl
              </a>
              ,{' '}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode"
                target="_blank"
                rel="noopener noreferrer"
              >
                Monokai Pro
              </a>
              ,{' '}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cobalt2
              </a>{' '}
              and the original{' '}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=hedinne.popping-and-locking-vscode"
                target="_blank"
                rel="noopener noreferrer"
              >
                Popping and Locking
              </a>
              .
            </li>
            <li>
              I'm currently using{' '}
              <a
                href="https://www.typography.com/blog/introducing-operator"
                target="_blank"
                rel="noopener noreferrer"
              >
                Operator Mono
              </a>{' '}
              <a
                href="https://ericlbarnes.com/2018/04/27/operator-mono-with-ligatures/"
                target="_blank"
                rel="noopener noreferrer"
              >
                with ligatures
              </a>
              🔥 for my primary editor font. I also like{' '}
              <a
                href="https://dank.sh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dank Mono
              </a>{' '}
              .
            </li>
            <li>
              I primarily use{' '}
              <a
                href="https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox Nightly
              </a>{' '}
              as my main development browser.
            </li>
            <li>
              I use{' '}
              <a
                href="https://iterm2.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                iTerm2
              </a>{' '}
              as my terminal, and my primary shell is{' '}
              <a
                href="https://fishshell.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fish
              </a>{' '}
              with the{' '}
              <a
                href="https://github.com/oh-my-fish/theme-bobthefish"
                target="_blank"
                rel="noopener noreferrer"
              >
                bobthefish
              </a>{' '}
              prompt. I have versions of the{' '}
              <a
                href="https://github.com/philsinatra/iterm2-dark-mode"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dark Mode
              </a>{' '}
              and{' '}
              <a
                href="https://github.com/philsinatra/iterm2-popping-and-locking"
                target="_blank"
                rel="noopener noreferrer"
              >
                Popping and Locking Black
              </a>{' '}
              themes available for iTerm2 as well.
            </li>
          </ul>
          <h2>Desktop Apps</h2>
          <ul>
            <li>
              I use{' '}
              <a
                href="https://www.alfredapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alfred
              </a>{' '}
              with many workflows. I was able to remove TextExpander from my
              workflow completely with Alfred's{' '}
              <a
                href="https://www.alfredapp.com/help/features/snippets/"
                target="_blank"
                rel="noopener noreferrer"
              >
                snippets and text expansion functionality
              </a>
              .
            </li>
            <li>
              I do my design work in{' '}
              <a
                href="https://www.figma.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figma
              </a>
              . I used to use{' '}
              <a
                href="https://www.sketch.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sketch
              </a>{' '}
              but I've found that I prefer Figma. I wrote a Sketch plugin a
              while back for exporting color values as variables for use in
              various CSS pre-processors called{' '}
              <a
                href="https://github.com/philsinatra/Sketch-Color-Vars"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sketch Color Vars
              </a>
              .
            </li>
            <li>
              I use a nifty emoji picker called{' '}
              <a
                href="https://matthewpalmer.net/rocket/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rocket
              </a>
              .
            </li>
          </ul>
          <h2>Desk Setup</h2>
          <ul>
            <li>
              My primary monitor is a{' '}
              <a
                href="https://www.dell.com/en-us/work/shop/accessories/apd/210-amrc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dell UltraSharp 38" curved monitor
              </a>
            </li>
            <li>
              I currently use a 2018 15" MacBook Pro running macOS Catalina as
              my primary system.
            </li>
            <li>
              I also run a{' '}
              <a
                href="https://system76.com/laptops/lemur"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lemur Pro
              </a>{' '}
              from{' '}
              <a
                href="https://system76.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                System76
              </a>{' '}
              as a secondary coding machine.
            </li>
          </ul>
        </div>
      </section>
    </Article>
  </>
)

export default UsesPage

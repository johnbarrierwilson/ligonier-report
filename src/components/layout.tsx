import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, {
  createGlobalStyle,
  css,
  ThemeProvider,
} from 'styled-components'
import { animateScroll, Link, scrollSpy } from 'react-scroll'

import theme from '../theme'

import DocumentTitle from './documentTitle'
import LeftSidebar from './leftSidebar'
import Logo from './logo'
import RightSidebar from './rightSidebar'
import Share from './share'
import Toggle from './toggle'

const slidesInverted = [1, 6, 10, 12, 16, 18, 23, 25]

const sidebarStatuses = [
  0, // cover
  0, // introduction
  0, // letter
  1, // intro read
  1,
  1,
  0, // ferguson
  1,
  1,
  1,
  0, // godfrey
  1,
  0, // lawson
  2, // intro listen
  2,
  2,
  2,
  0, // nichols
  2,
  3, // intro gather
  3,
  3,
  0, // parsons
  3,
  0, // thomas
  3,
]

const sidebarTitles = [
  '',
  '',
  'A Letter from the President',
  '',
  'Part One / Read',
  'Part One / Read',
  'Teaching Fellows / Ferguson',
  'Part One / Read',
  'Part One / Read',
  'Part One / Read',
  'Teaching Fellows / Godfrey',
  'Part One / Read',
  'Teaching Fellows / Lawson',
  '',
  'Part Two / Listen',
  'Part Two / Listen',
  'Part Two / Listen',
  'Teaching Fellows / Nichols',
  'Part Two / Listen',
  '',
  'Part Three / Gather',
  'Part Three / Gather',
  'Teaching Fellows / Parsons',
  'Part Three / Gather',
  'Teaching Fellows / Thomas',
  'Part Three / Gather',
]

interface LayoutProps {
  inverted?: boolean
}

const Layout: React.FC<LayoutProps> = (props) => {
  const [inverted, setInverted] = React.useState(false)
  const [offset, setOffset] = React.useState(-100)
  const [navigating, setNavigating] = React.useState(false)
  const [, setSlideNumber] = React.useState(0)
  const [sidebarStatus, setSidebarStatus] = React.useState(0)
  const [sidebarTitle, setSidebarTitle] = React.useState('')

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      containerId: 'containerElement',
    })
    setNavigating(false)
  }

  const setActive = (slide: number) => {
    setInverted(slidesInverted.includes(slide))
    setSlideNumber(slide)
    setSidebarStatus(sidebarStatuses[slide])
    setSidebarTitle(sidebarTitles[slide])
  }

  const subNavigation = (id: string) => {
    const container = document.getElementById('containerElement')
    const distance = container.scrollTop
    const offset = window.innerWidth > 1300 ? 920 : 540
    const item =
      document.getElementById(id).getBoundingClientRect().top - offset
    container.scrollTo(0, item + distance)
    setNavigating(!navigating)
  }

  const toggleNavigation = () => {
    setNavigating(!navigating)
    setOffset(navigating ? -200 : 0)
    scrollSpy.update()
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <ThemeProvider theme={theme}>
          <>
            <Logo
              onClick={scrollToTop}
              inverted={navigating || inverted}
              navigating={navigating}
            />
            <DocumentTitle
              inverted={navigating || inverted}
              navigating={navigating}
            />
            <Toggle
              inverted={props.inverted || inverted}
              navigating={navigating}
              onClick={toggleNavigation}
            />
            <LeftSidebar
              inverted={inverted}
              navigating={navigating}
              text={sidebarTitle}
            />
            <RightSidebar
              inverted={inverted}
              navigating={navigating}
              status={sidebarStatus}
            />
            <Share />
            <Container navigating={navigating}>
              <GlobalStyles />
              <Helmet title={data.site.siteMetadata.title}>
                <html lang="en" />

                <meta
                  name="title"
                  content="2020 Ministry Report - Ligonier Ministries"
                />
                <meta
                  name="description"
                  content="Thanks to you, the deep truths of God’s Word are finding their way into more places than ever before, and lives are being transformed by a growing knowledge of God."
                />

                <meta property="og:type" content="website" />
                <meta
                  property="og:url"
                  content="https://report.ligonier.org/"
                />
                <meta
                  property="og:title"
                  content="2020 Ministry Report - Ligonier Ministries"
                />
                <meta
                  property="og:description"
                  content="Thanks to you, the deep truths of God’s Word are finding their way into more places than ever before, and lives are being transformed by a growing knowledge of God."
                />
                <meta
                  property="og:image"
                  content="https://report.ligonier.org/share.jpg"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                  property="twitter:url"
                  content="https://report.ligonier.org/"
                />
                <meta
                  property="twitter:title"
                  content="2020 Ministry Report - Ligonier Ministries"
                />
                <meta
                  property="twitter:description"
                  content="Thanks to you, the deep truths of God’s Word are finding their way into more places than ever before, and lives are being transformed by a growing knowledge of God."
                />
                <meta
                  property="twitter:image"
                  content="https://report.ligonier.org/share.jpg"
                />

                <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cloud.typography.com/6693092/7770812/css/fonts.css"
                />
                <script src="/fitie.js"></script>
              </Helmet>
              <Navigation navigating={navigating}>
                <div>
                  <p>
                    <small>&nbsp;</small>Introduction
                  </p>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(0)}
                    spy={true}
                    to="introduction"
                  >
                    Overview
                  </Link>
                  {/* <Link containerId="containerElement" hashSpy={true} href="#" offset={offset} onClick={toggleNavigation} onSetActive={() => setActive(1)} spy={true} to="teachingfellows">The Teaching Fellows</Link> */}
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(2)}
                    spy={true}
                    to="presidentletter"
                  >
                    A Letter from the President
                  </Link>
                </div>
                <div>
                  <p>
                    <small>Part One</small>Read
                  </p>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(3)}
                    spy={true}
                    to="introductionread"
                  >
                    God Revealed Himself in a Book
                  </Link>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(4)}
                    spy={true}
                    to="storyxavier"
                  >
                    Testimony: Xavier
                  </Link>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(5)}
                    spy={true}
                    to="read01"
                  >
                    <em>Tabletalk</em>
                  </Link>
                  <button onClick={() => subNavigation('ask-ligonier')}>
                    Ask Ligonier
                  </button>
                  <button onClick={() => subNavigation('state-of-theology')}>
                    The State of Theology
                  </button>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(6)}
                    spy={true}
                    to="fellowsinclair"
                  >
                    Teaching Fellow: Sinclair Ferguson
                  </Link>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(7)}
                    spy={true}
                    to="read02"
                  >
                    <em>Reformation Study Bible</em>
                  </Link>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(8)}
                    spy={true}
                    to="read03"
                  >
                    Study Bible Translations
                  </Link>
                  <button onClick={() => subNavigation('bibles-for-africa')}>
                    Study Bibles for Africa
                  </button>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(9)}
                    spy={true}
                    to="read04"
                  >
                    Reformation Trust
                  </Link>
                  <button onClick={() => subNavigation('ligonier-org')}>
                    Ligonier.org
                  </button>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(10)}
                    spy={true}
                    to="fellowgodfrey"
                  >
                    Teaching Fellow: W. Robert Godfrey
                  </Link>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(11)}
                    spy={true}
                    to="read05"
                  >
                    Translations
                  </Link>
                  <button
                    onClick={() => subNavigation('military-prison-chaplains')}
                  >
                    Military &amp; Prison Chaplains
                  </button>
                  <button
                    onClick={() => subNavigation('christology-statement')}
                  >
                    Christology&nbsp;Statement
                  </button>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(12)}
                    spy={true}
                    to="fellowlawson"
                  >
                    Teaching Fellow: Steven Lawson
                  </Link>
                </div>
                <div>
                  <p>
                    <small>Part Two</small>Listen
                  </p>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(13)}
                    spy={true}
                    to="introductionlisten"
                  >
                    Faith Comes By Hearing
                  </Link>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(14)}
                    spy={true}
                    to="storyamy"
                  >
                    Testimony: Amy
                  </Link>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(15)}
                    spy={true}
                    to="listen01"
                  >
                    <em>Renewing Your Mind</em>
                  </Link>
                  <button onClick={() => subNavigation('refnet')}>
                    RefNet
                  </button>
                  {/* <Link containerId="containerElement" hashSpy={true} href="#" offset={offset} onClick={toggleNavigation} onSetActive={() => setActive(16)} spy={true} to="fellowmohler">Teaching Fellow: Albert Mohler</Link> */}
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(17)}
                    spy={true}
                    to="listen02"
                  >
                    Teaching Series
                  </Link>
                  <button onClick={() => subNavigation('ligonier-app')}>
                    The Ligonier App
                  </button>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(18)}
                    spy={true}
                    to="fellownichols"
                  >
                    Teaching Fellow: Stephen J. Nichols
                  </Link>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(19)}
                    spy={true}
                    to="listen03"
                  >
                    Platforms
                  </Link>
                  <button onClick={() => subNavigation('podcasts')}>
                    Podcasts
                  </button>
                </div>
                <div>
                  <p>
                    <small>Part Three</small>Gather
                  </p>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(20)}
                    spy={true}
                    to="introductiongather"
                  >
                    Iron Sharpens Iron
                  </Link>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(21)}
                    spy={true}
                    to="storydoug"
                  >
                    Testimony: Doug
                  </Link>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(22)}
                    spy={true}
                    to="gather01"
                  >
                    National Conference
                  </Link>
                  <button
                    onClick={() =>
                      subNavigation('regionalinternationalconferences')
                    }
                  >
                    Regional and International Conferences
                  </button>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(23)}
                    spy={true}
                    to="fellowparsons"
                  >
                    Teaching Fellow: Burk Parsons
                  </Link>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(24)}
                    spy={true}
                    to="gather02"
                  >
                    Reformation Bible College
                  </Link>
                  <button onClick={() => subNavigation('ligonier-connect')}>
                    Ligonier Connect
                  </button>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(25)}
                    spy={true}
                    to="fellowthomas"
                  >
                    Teaching Fellow: Derek W.H. Thomas
                  </Link>
                  <Link
                    containerId="containerElement"
                    hashSpy={true}
                    href="#"
                    offset={offset}
                    onClick={toggleNavigation}
                    onSetActive={() => setActive(26)}
                    spy={true}
                    to="gather03"
                  >
                    Study Cruises &amp; Tours
                  </Link>
                  <button
                    onClick={() =>
                      subNavigation('institute-expository-preaching')
                    }
                  >
                    The Institute for Expository Preaching
                  </button>
                  <button onClick={() => subNavigation('ask-anything')}>
                    Truth &amp; Consequences
                  </button>
                </div>
                <Button
                  href="https://gift.ligonier.org/835/donate"
                  target="_window"
                  navigating={navigating}
                >
                  Give Now
                </Button>
              </Navigation>
              <ContainerInner
                id="containerElement"
                navigating={navigating}
                onClick={navigating ? toggleNavigation : null}
              >
                {props.children}
              </ContainerInner>
            </Container>

            {/* Marketo */}
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                (function() {
                  var didInit = false;
                  function initMunchkin() {
                    if(didInit === false) {
                      didInit = true;
                      Munchkin.init('189-JLA-216');
                    }
                  }
                  var s = document.createElement('script');
                  s.type = 'text/javascript';
                  s.async = true;
                  s.src = '//munchkin.marketo.net/munchkin.js';
                  s.onreadystatechange = function() {
                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                      initMunchkin();
                    }
                  };
                  s.onload = initMunchkin;
                  document.getElementsByTagName('head')[0].appendChild(s);
                })();
              `,
              }}
            />
          </>
        </ThemeProvider>
      )}
    />
  )
}

export default Layout

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    -webkit-font-smoothing: antialiased;
    font-family: "Mercury Display A", "Mercury Display B", Georgia, "Times New Roman", sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.6;
    @media (min-width: ${(p) => p.theme.breakpoints.large}) {
      font-size: 0.85vw;
      line-height: 1.4;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Chronicle Cond A", "Chronicle Cond B", Georgia, 'Times New Roman', Times, serif;
    font-weight: 600;
    line-height: 1.1;
    margin: 0;
  }
  a {
    border-bottom: 1px solid ${(p) => p.theme.colors.black};
    color: ${(p) => p.theme.colors.black};
    text-decoration: none;
  }
`

const Button = styled.a<{ readonly navigating?: boolean }>`
  background: rgba(255, 255, 255, 0.1) !important;
  border-bottom: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px, rgba(0, 0, 0, 0.1) 0 1px 5px 0;
  display: block;
  font-family: 'Whitney SSm A', 'Whitney SSm B', Arial, Helvetica, sans-serif;
  font-size: 10px !important;
  font-weight: 600;
  letter-spacing: 0.1em !important;
  opacity: ${(p) => (p.navigating ? '1' : '0')};
  padding: 10px;
  text-transform: uppercase;
  text-align: center !important;
  transition: ${(p) => p.theme.transition};
  transition-delay: ${(p) => (p.navigating ? '500ms' : '0')};
  width: 200px !important;
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    bottom: 10px;
    left: 40px;
    margin: auto;
    position: absolute;
    right: 40px;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px, rgba(0, 0, 0, 0.1) 0 5px 25px 0;
    color: #dddddd !important;
  }
`

const Container = styled.div<{ readonly navigating?: boolean }>`
  background: ${(p) => (p.navigating ? '#111111' : p.theme.colors.white)};
  height: 100vh;
  transition: background 0ms ${(p) => (p.navigating ? '0ms' : '500ms')} linear;
  overflow: hidden;
`

const ContainerInner = styled.div<{ readonly navigating?: boolean }>`
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  overflow: auto;
  position: relative;
  transition: ${(p) => p.theme.transition};
  z-index: ${(p) => p.theme.index.containerInner};
  ${(p) =>
    p.navigating
      ? css`
          transform: translateY(500px);
          opacity: 0.5;
          @media (min-width: ${p.theme.breakpoints.large}) {
            transform: translateY(850px);
          }
        `
      : null}
`

const Navigation = styled.nav<{ readonly navigating?: boolean }>`
  -webkit-overflow-scrolling: touch;
  color: ${(p) => p.theme.colors.white};
  display: flex;
  flex-flow: column;
  height: 500px;
  left: 0;
  margin: 0 auto;
  overflow: auto;
  padding: 75px 40px 50px;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: ${(p) => p.theme.index.navigation};
  @media (min-width: ${(p) => p.theme.breakpoints.small}) {
    padding: 100px 20vw 0;
  }
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    flex-flow: row;
    max-height: 850px;
    height: 100%;
    padding: 120px 50px 0;
  }
  a,
  button {
    -webkit-appearance: none;
    background: transparent;
    border: none;
    color: ${(p) => p.theme.colors.gray};
    cursor: pointer;
    display: block;
    font-family: 'Whitney SSm A', 'Whitney SSm B', Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin: 15px auto;
    outline: none;
    text-align: center;
    width: 100%;
    @media (min-width: ${(p) => p.theme.breakpoints.large}) {
      text-align: left;
    }
    &:hover {
      color: ${(p) => p.theme.colors.white};
    }
  }
  div {
    margin-bottom: 30px;
    opacity: ${(p) => (p.navigating ? '1' : '0')};
    transform: ${(p) => (p.navigating ? 'translateY(0%)' : 'translateY(5%)')};
    transition: ${(p) => p.theme.transition};
    @media (min-width: ${(p) => p.theme.breakpoints.large}) {
      margin-bottom: none;
      width: 25%;
    }
    &:nth-child(1) {
      transition-delay: 100ms;
    }
    &:nth-child(2) {
      transition-delay: 200ms;
    }
    &:nth-child(3) {
      transition-delay: 300ms;
    }
    &:nth-child(4) {
      transition-delay: 400ms;
    }
  }
  p {
    font-size: 18px;
    letter-spacing: 0.15em;
    margin-bottom: 15px;
    opacity: 0.5;
    text-align: center;
    text-transform: uppercase;
    @media (min-width: ${(p) => p.theme.breakpoints.large}) {
      margin-bottom: 50px;
      text-align: left;
    }
  }
  small {
    display: block;
    font-family: 'Whitney SSm A', 'Whitney SSm B', Arial, Helvetica, sans-serif;
    font-size: 11px;
    margin-bottom: 5px;
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components'
import { animateScroll, Link, scrollSpy }from 'react-scroll'

import theme from '../theme.js'

import DocumentTitle from './documentTitle'
import LeftSidebar from './leftSidebar'
import Logo from './logo'
import RightSidebar from './rightSidebar'
import Share from './share'
import Toggle from './toggle'

const slidesInverted = [1, 6, 10, 12, 16, 18, 23, 25]

const sidebarStatuses = [
  0, 0, 0, 1, 1, 1, 0, 1, 1,
  1, 0, 1, 0, 2, 2, 2, 0, 2,
  0, 2, 3, 3, 3, 0, 3, 0, 3,
]

const sidebarTitles = [
  '', 'The Ligonier Teaching Fellows', 'A Letter from the President',
  '', 'Part One / Read', 'Part One / Read', 'Teaching Fellows / Ferguson',
  'Part One / Read', 'Part One / Read', 'Part One / Read',
  'Teaching Fellows / Godfrey', 'Part One / Read', 'Teaching Fellows / Lawson',
  '', 'Part Two / Listen', 'Part Two / Listen', 'Teaching Fellows / Mohler',
  'Part Two / Listen', 'Teaching Fellows / Nichols', 'Part Two / Listen',
  '', 'Part Three / Gather', 'Part Three / Gather', 'Teaching Fellows / Parsons',
  'Part Three / Gather', 'Teaching Fellows / Thomas',  'Part Three / Gather'
]

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inverted: false,
      navigating: false,
      slideNumber: 0,
      sidebarStatus: 0,
      sidebarTitle: '',
    }
    this.toggleNavigation = this.toggleNavigation.bind(this)
    this.setActive = this.setActive.bind(this)
  }

  componentDidMount() {
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth
    
    window.addEventListener('resize', () => {
      windowHeight = window.innerHeight
      windowWidth = window.innerWidth
    })

    if (windowWidth >= 900) {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          animateScroll.scrollMore(windowHeight, {
            containerId: 'containerElement'
          })
        } else if (e.key === 'ArrowUp') {
          animateScroll.scrollMore(-windowHeight, {
            containerId: 'containerElement'
          })
        }
      })
    }

    scrollSpy.update()
  }

  setActive(slide) {
    this.setState({
      inverted: slidesInverted.includes(slide),
      slideNumber: slide,
      sidebarStatus: sidebarStatuses[slide],
      sidebarTitle: sidebarTitles[slide]
    })
  }

  toggleNavigation(e) {
    e.preventDefault();
    this.setState({
      navigating: !this.state.navigating
    });
  }

  render() {
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
        render={data => (
          <ThemeProvider theme={theme}>
            <>
              <Logo inverted={this.state.navigating || this.state.inverted} navigating={this.state.navigating} />
              <DocumentTitle inverted={this.state.navigating || this.state.inverted} navigating={this.state.navigating} />
              <Toggle
                inverted={this.props.inverted || this.state.inverted}
                navigating={this.state.navigating}
                onClick={this.toggleNavigation}
               
                type={this.props.type}
              />
              <LeftSidebar inverted={this.state.inverted} navigating={this.state.navigating} text={this.state.sidebarTitle} />
              <RightSidebar inverted={this.state.inverted} navigating={this.state.navigating} status={this.state.sidebarStatus} />
              <Share />
              <Container>
                <GlobalStyles />
                <Helmet
                  title={data.site.siteMetadata.title}
                  meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                  ]}
                >
                  <html lang="en" />
                  <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6693092/7770812/css/fonts.css" />
                </Helmet>
                <Navigation navigating={this.state.navigating}>
                  <div>
                    <p><small>&nbsp;</small>Introduction</p>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(0)} smooth={true} spy={true} to="introduction">Overview</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(1)} smooth={true} spy={true} to="teachingfellows">The Teaching Fellows</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(2)} smooth={true} spy={true} to="presidentletter">A Letter from the President</Link>
                  </div>
                  <div>
                    <p><small>Part One</small>Read</p>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(3)} smooth={true} spy={true} to="introductionread">God Revealed Himself in a Book</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(4)} smooth={true} spy={true} to="storyxavier">Testimony: Xavier</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(5)} smooth={true} spy={true} to="read01">Tabletalk, Ask Ligoner &amp; The State of Theology</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(6)} smooth={true} spy={true} to="fellowsinclair">Teaching Fellow: Sinclair Ferguson</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(7)} smooth={true} spy={true} to="read02">Reformation Study Bible</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(8)} smooth={true} spy={true} to="read03">Study Bible Translations &amp; Study Bibles for Africa</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(9)} smooth={true} spy={true} to="read04">Reformation Trust &amp; Ligonier.org</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(10)} smooth={true} spy={true} to="fellowgodfrey">Teaching Fellow: W. Robert Godfrey</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(11)} smooth={true} spy={true} to="read05">Translations, Military &amp; Prison Chaplains and Christology&nbsp;Statement</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(12)} smooth={true} spy={true} to="fellowlawson">Teaching Fellow: Steven Lawson</Link>
                  </div>
                  <div>
                    <p><small>Part Two</small>Listen</p>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(13)} smooth={true} spy={true} to="introductionlisten">Faith Comes By Hearing</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(14)} smooth={true} spy={true} to="storyamy">Testimony: Amy</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(15)} smooth={true} spy={true} to="listen01">Renewing Your Mind and RefNet</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(16)} smooth={true} spy={true} to="fellowmohler">Teaching Fellow: Albert Mohler</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(17)} smooth={true} spy={true} to="listen02">Teaching Series and the Ligoner App</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(18)} smooth={true} spy={true} to="fellownichols">Teaching Fellow: Stephen J. Nichols</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(19)} smooth={true} spy={true} to="listen03">Platforms and Podcasts</Link>
                  </div>
                  <div>
                    <p><small>Part Three</small>Gather</p>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(20)} smooth={true} spy={true} to="introductiongather">Iron Sharpens Iron</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(21)} smooth={true} spy={true} to="storydoug">Testimony: Doug</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(22)} smooth={true} spy={true} to="gather01">National, Regional and International Conferences</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(23)} smooth={true} spy={true} to="fellowparsons">Teaching Fellow: Burk Parsons</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(24)} smooth={true} spy={true} to="gather02">Reformation Bible College and Ligonier Connect</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(25)} smooth={true} spy={true} to="fellowthomas">Teaching Fellow: Derek W.H. Thomas</Link>
                    <Link containerId="containerElement" delay={500} hashSpy={true} href="#" offset={-650} onClick={this.toggleNavigation} onSetActive={() => this.setActive(26)} smooth={true} spy={true} to="gather03">Cruises/Tours, Institute for Expository Preaching and Ask Anything</Link>
                  </div>
                </Navigation>
                <ContainerInner
                  id="containerElement"
                  navigating={this.state.navigating}
                  onClick={this.state.navigating ? this.toggleNavigation : null}
                >
                  {this.props.children}
                </ContainerInner>
              </Container>
            </>
          </ThemeProvider>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
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
    font-size: 5vw;
    font-weight: 400;
    line-height: 1.4;
    @media (min-width: ${p => p.theme.breakpoints.medium}) {
      font-size: 1vw;
      line-height: 1.3;
    }
    @media (min-width: ${p => p.theme.breakpoints.large}) {
      font-size: 0.85vw;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Chronicle Cond A", "Chronicle Cond B", Georgia, 'Times New Roman', Times, serif;
    font-weight: 600;
    line-height: 1.1;
    margin: 0;
  }
  a {
    border-bottom: 1px solid ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.black};
    text-decoration: none;
  }
`

const Container = styled('div')`
  background: #111111;
  overflow: hidden;
`

const ContainerInner = styled('div')`
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  overflow: auto;
  transition: ${p => p.theme.transition};

  ${p => p.navigating ? css`
    transform: translateY(650px);
    opacity: 0.5;
  ` : null}
`

const Navigation = styled('nav')`
  -webkit-overflow-scrolling: touch;
  color: ${p => p.theme.colors.white};
  display: flex;
  flex-flow: column;
  height: 500px;
  left: 0;
  margin: 0 auto;
  overflow: auto;
  padding: 75px 50px;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: ${p => p.theme.index.navigation};
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    flex-flow: row;
    height: auto;
    padding: 140px 50px 0;
  }
  a {
    border-bottom: none;
    color: ${p => p.theme.colors.gray};
    display: block;
    font-family: "Whitney SSm A", "Whitney SSm B", Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin: 15px auto;
    &:hover {
      color: ${p => p.theme.colors.white};
    }
  }
  div {
    opacity: ${p => p.navigating ? '1' : '0'};
    transform: ${p => p.navigating ? 'scale(1) translateY(0%)': 'scale(0.75) translateY(25%)'};
    transition: ${p => p.theme.transition};
    @media (min-width: ${p => p.theme.breakpoints.medium}) {
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
    text-transform: uppercase;
    @media (min-width: ${p => p.theme.breakpoints.medium}) {
      margin-bottom: 50px;
    }
  }
  small {
    display: block;
    font-family: 'Whitney SSm A', 'Whitney SSm B', Arial, Helvetica, sans-serif;
    font-size: 11px;
    margin-bottom: 5px;
  }
`
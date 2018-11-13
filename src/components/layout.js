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
      offset: -100,
      navigating: false,
      slideNumber: 0,
      sidebarStatus: 0,
      sidebarTitle: ''
    }
    this.toggleNavigation = this.toggleNavigation.bind(this)
    this.setActive = this.setActive.bind(this)
  }

  componentDidMount() {
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth

    if (windowWidth >= 900) {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          animateScroll.scrollMore(Math.max(windowHeight, 1000), {
            containerId: 'containerElement'
          })
        } else if (e.key === 'ArrowUp') {
          animateScroll.scrollMore(Math.min((windowHeight * -1), -1000), {
            containerId: 'containerElement'
          })
        }
      })
    }
    
    window.addEventListener('resize', () => {
      windowHeight = window.innerHeight
      windowWidth = window.innerWidth

      if (windowWidth >= 900) {
        window.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowDown') {
            animateScroll.scrollMore(Math.max(windowHeight, 950), {
              containerId: 'containerElement'
            })
          } else if (e.key === 'ArrowUp') {
            animateScroll.scrollMore(Math.min((windowHeight * -1), -950), {
              containerId: 'containerElement'
            })
          }
        })
      }
    })

    const analytics = document.createElement('div')
    analytics.innerHTML = `
      <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1958004644520947');
        fbq('track', 'PageView');
      </script>
      <script type="text/javascript">
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
      </script>
    `
    document.body.appendChild(analytics)

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
    e.preventDefault()
    this.setState({
      navigating: !this.state.navigating,
      offset: this.state.navigating ? -200 : 0
    });
    scrollSpy.update()
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
              <Container navigating={this.state.navigating}>
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
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(0)} spy={true} to="introduction">Overview</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(1)} spy={true} to="teachingfellows">The Teaching Fellows</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(2)} spy={true} to="presidentletter">A Letter from the President</Link>
                  </div>
                  <div>
                    <p><small>Part One</small>Read</p>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(3)} spy={true} to="introductionread">God Revealed Himself in a Book</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(4)} spy={true} to="storyxavier">Testimony: Xavier</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(5)} spy={true} to="read01">Tabletalk</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(5)} spy={true} to="ask-ligonier">Ask Ligoner</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(5)} spy={true} to="state-of-theology">The State of Theology</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(6)} spy={true} to="fellowsinclair">Teaching Fellow: Sinclair Ferguson</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(7)} spy={true} to="read02">Reformation Study Bible</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(8)} spy={true} to="read03">Study Bible Translations</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(8)} spy={true} to="bibles-for-africa">Study Bibles for Africa</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(9)} spy={true} to="read04">Reformation Trust</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(9)} spy={true} to="ligonier-org">Ligonier.org</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(10)} spy={true} to="fellowgodfrey">Teaching Fellow: W. Robert Godfrey</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(11)} spy={true} to="read05">Translations</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(11)} spy={true} to="military-prison-chaplains">Military &amp; Prison Chaplains</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(11)} spy={true} to="christology-statement">Christology&nbsp;Statement</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(12)} spy={true} to="fellowlawson">Teaching Fellow: Steven Lawson</Link>
                  </div>
                  <div>
                    <p><small>Part Two</small>Listen</p>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(13)} spy={true} to="introductionlisten">Faith Comes By Hearing</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(14)} spy={true} to="storyamy">Testimony: Amy</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(15)} spy={true} to="listen01">Renewing Your Mind and RefNet</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(16)} spy={true} to="fellowmohler">Teaching Fellow: Albert Mohler</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(17)} spy={true} to="listen02">Teaching Series and the Ligoner App</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(18)} spy={true} to="fellownichols">Teaching Fellow: Stephen J. Nichols</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(19)} spy={true} to="listen03">Platforms</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(19)} spy={true} to="podcasts">Podcasts</Link>
                  </div>
                  <div>
                    <p><small>Part Three</small>Gather</p>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(20)} spy={true} to="introductiongather">Iron Sharpens Iron</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(21)} spy={true} to="storydoug">Testimony: Doug</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(22)} spy={true} to="gather01">National Conference</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(22)} spy={true} to="regionalinternationalconferences">Regional and International Conferences</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(23)} spy={true} to="fellowparsons">Teaching Fellow: Burk Parsons</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(24)} spy={true} to="gather02">Reformation Bible College and Ligonier Connect</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(25)} spy={true} to="fellowthomas">Teaching Fellow: Derek W.H. Thomas</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(26)} spy={true} to="gather03">Study Cruises &amp; Tours</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(26)} spy={true} to="institute-expository-preaching">The Institute for Expository Preaching</Link>
                    <Link containerId="containerElement" hashSpy={true} href="#" offset={this.state.offset} onClick={this.toggleNavigation} onSetActive={() => this.setActive(26)} spy={true} to="ask-anything">Ask Anything and Truth &amp; Consequences</Link>
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
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    @media (min-width: ${p => p.theme.breakpoints.small}) {
      font-size: 16px;
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
  background: ${p => p.navigating ? '#111111' : p.theme.colors.white};
  transition: background 0ms ${p => p.navigating ? '0ms' : '500ms'} linear;
  overflow: hidden;
`

const ContainerInner = styled('div')`
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  overflow: auto;
  position: relative;
  transition: ${p => p.theme.transition};
  z-index: ${p => p.theme.index.containerInner};
  ${p => p.navigating ? css`
    transform: translateY(500px);
    opacity: 0.5;
    @media (min-width: ${p.theme.breakpoints.large}) {
      transform: translateY(850px);
    }
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
  padding: 75px 40px;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: ${p => p.theme.index.navigation};
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    padding: 100px 20vw 0;
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
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
    margin-bottom: 50px;
    opacity: ${p => p.navigating ? '1' : '0'};
    transform: ${p => p.navigating ? 'translateY(0%)': 'translateY(5%)'};
    transition: ${p => p.theme.transition};
    @media (min-width: ${p => p.theme.breakpoints.large}) {
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
    text-transform: uppercase;
    @media (min-width: ${p => p.theme.breakpoints.large}) {
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
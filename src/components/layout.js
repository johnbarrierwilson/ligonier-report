import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components'
import { Link }from 'react-scroll'

import theme from '../theme.js'

import DocumentTitle from './documentTitle'
import Logo from './logo'
import Toggle from './toggle'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {navigating: false};
    this.toggleNavigation = this.toggleNavigation.bind(this);
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
              <Logo inverted={this.state.navigating} />
              <DocumentTitle inverted={this.state.navigating} />
              <Toggle
                inverted={this.props.inverted}
                navigating={this.state.navigating}
                onClick={this.toggleNavigation}
               
                type={this.props.type}
              />
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
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="introduction">Overview</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="teachingfellows">The Teaching Fellows</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="presidentletter">A Letter from the President</Link>
                  </div>
                  <div>
                    <p><small>Part One</small>Read</p>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="introductionread">Introduction</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="storyxavier">Story: Xavier</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="read01">Tabletalk, Ask Ligoner &amp; The State of Theology</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="fellowsinclair">Fellow: Sinclair Ferguson</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="read02">Reformation Study Bible</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="read03">Study Bible Translations &amp; Study Bibles for Africa</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="read04">Reformation Trust &amp; Ligonier.org</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="fellowgodfrey">Fellow: W. Robert Godfrey</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="read05">Translations, Military &amp; Prison Chaplains and Christology Statement</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="fellowlawson">Fellow: Steven Lawson</Link>
                  </div>
                  <div>
                    <p><small>Part Two</small>Listen</p>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="introductionlisten">Introduction</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="storyamy">Story: Amy</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="listen01">Renewing Your Mind and RefNet</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="fellowmohler">Fellow: Albert Mohler</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="listen02">Teaching Series and the Ligoner App</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="fellownichols">Fellow: Stephen J. Nichols</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="listen03">Platforms and Podcasts</Link>
                  </div>
                  <div>
                    <p><small>Part Three</small>Gather</p>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="introductiongather">Introduction</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="storydoug">Story: Doug</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="gather01">National, Regional and International Conferences</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="fellowparsons">Fellow: Burk Parsons</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="gather02">Reformation Bible College and Ligonier Connect</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="fellowthomas">Fellow: Derek W.H. Thomas</Link>
                    <Link containerId="containerElement" delay={500} href="#" offset={-650} onClick={this.toggleNavigation} smooth={true} to="gather03">Cruises/Tours, Institute for Expository Preaching and Ask Anything</Link>
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
    font-size: 4.25vw;
    font-weight: 400;
    line-height: 1.3;
  }
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    html {
      font-size: 1.2vw;
    }
  }
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    html {
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
    color: ${p => p.theme.colors.green};
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
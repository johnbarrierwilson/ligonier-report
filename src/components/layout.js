import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import 'normalize.css'
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
              <Logo />
              <DocumentTitle />
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
                    <Link to="/">Overview</Link>
                    <Link to="/teaching-fellows">The Teaching Fellows</Link>
                    <Link to="/president-letter">A Letter from the President</Link>
                  </div>
                  <div>
                    <p><small>Part One</small>Read</p>
                    <Link to="/introduction-read">Introduction</Link>
                    <Link to="/story-xavier">Story: Xavier</Link>
                    <Link to="/read-01">Tabletalk, Ask Ligoner &amp; The State of Theology</Link>
                    <Link to="/fellow-sinclair">Fellow: Sinclair Ferguson</Link>
                    <Link to="/read-02">Reformation Study Bible</Link>
                    <Link to="/read-03">Study Bible Translations &amp; Study Bibles for Africa</Link>
                    <Link to="/read-04">Reformation Trust &amp; Ligonier.org</Link>
                    <Link to="/fellow-godfrey">Fellow: W. Robert Godfrey</Link>
                    <Link to="/read-05">Translations, Military &amp; Prison Chaplains and Christology Statement</Link>
                    <Link to="/fellow-lawson">Fellow: Steven Lawson</Link>
                  </div>
                  <div>
                    <p><small>Part Two</small>Listen</p>
                    <Link to="/introduction-listen">Introduction</Link>
                    <Link to="/story-amy">Story: Amy</Link>
                    <Link to="/listen-01">Renewing Your Mind and RefNet</Link>
                    <Link to="/fellow-mohler">Fellow: Albert Mohler</Link>
                    <Link to="/listen-02">Teaching Series and the Ligoner App</Link>
                    <Link to="/fellow-nichols">Fellow: Stephen J. Nichols</Link>
                    <Link to="/listen-03">Platforms and Podcasts</Link>
                  </div>
                  <div>
                    <p><small>Part Three</small>Gather</p>
                    <Link to="/introduction-gather">Introduction</Link>
                    <Link to="/story-doug">Story: Doug</Link>
                    <Link to="/gather-01">National, Regional and International Conferences</Link>
                    <Link to="/fellow-parsons">Fellow: Burk Parsons</Link>
                    <Link to="/gather-02">Reformation Bible College and Ligonier Connect</Link>
                    <Link to="/fellow-thomas">Fellow: Derek W.H. Thomas</Link>
                    <Link to="/gather-03">Cruises/Tours, Institute for Expository Preaching and Ask Anything</Link>
                  </div>
                </Navigation>
                {this.props.children}
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
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    overflow: hidden;
  }
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
    /* letter-spacing: 0.05em; */
    margin: 15px auto;
    /* text-transform: uppercase; */
    &:hover {
      color: ${p => p.theme.colors.white};
    }
  }
  div {
    opacity: ${p => p.navigating ? '1' : '0'};
    /* text-align: center; */
    transform: ${p => p.navigating ? 'scale(1) translateY(0%)': 'scale(0.75) translateY(25%)'};
    transition: all 500ms cubic-bezier(.55,0,.1,1);
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
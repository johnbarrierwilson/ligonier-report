import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components'

import 'normalize.css'
import theme from '../theme.js'

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
            <ThemeProvider theme={theme} >
              <>
                <Logo inverted={true} />
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
                      <p>Introduction</p>
                      <Link to="/">Overview</Link>
                      <Link to="/teaching-fellows">The Teaching Fellows</Link>
                      <Link to="/president-letter">A Letter from the President</Link>
                    </div>
                    <div>
                      <p>Read</p>
                      <Link to="/introduction-read">Introduction</Link>
                      <Link to="/story-xavier">Story: Xavier</Link>
                      <Link to="/read-01">Page #01</Link>
                      <Link to="/fellow-sinclair">Fellow: Sinclair Ferguson</Link>
                    </div>
                    <div>
                      <p>Listen</p>
                      <Link to="#">Placeholder</Link>
                      <Link to="#">Placeholder</Link>
                      <Link to="#">Placeholder</Link>
                      <Link to="#">Placeholder</Link>
                    </div>
                    <div>
                      <p>Gather</p>
                      <Link to="#">Placeholder</Link>
                      <Link to="#">Placeholder</Link>
                      <Link to="#">Placeholder</Link>
                      <Link to="#">Placeholder</Link>
                    </div>
                  </Navigation>
                  <Grid navigating={this.state.navigating}>
                    {this.props.children}
                  </Grid>
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
      font-size: 0.9vw;
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

const Grid = styled('div')`
  background: ${p => p.theme.colors.white};
  display: grid;
  grid-template-columns: 40px repeat(12, 1fr) 40px;
  position: relative;
  transition: transform 500ms cubic-bezier(.55,0,.1,1), opacity 500ms cubic-bezier(.55,0,.1,1);
  z-index: ${p => p.theme.index.grid};
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    grid-template-columns: 90px repeat(12, 1fr) 90px;
    grid-template-rows: 90px repeat(11, 1fr);
    height: 100vh;
    overflow: hidden;
  }

  ${p => p.navigating && css`
    /* border-radius: 30px; */
    opacity: 0.5;
    transform: translateY(500px);
  `}
`

const Container = styled('div')`
  background: #111111;
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    overflow: hidden;
  }
`

const Navigation = styled('nav')`
  -webkit-overflow-scrolling: touch;
  align-items: center;
  color: ${p => p.theme.colors.white};
  display: flex;
  flex-flow: column;
  height: 500px;
  justify-content: flex-start;
  left: 0;
  margin: 0 auto;
  max-width: 1200px;
  overflow: auto;
  padding: 75px 50px;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: ${p => p.theme.index.navigation};
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    flex-flow: row;
    justify-content: center;
    padding: 0 25px;
  }
  a {
    color: ${p => p.theme.colors.gray};
    display: block;
    font-family: "Whitney SSm A", "Whitney SSm B", Arial, Helvetica, sans-serif;
    font-size: 14px;
    letter-spacing: 0.05em;
    margin: 15px auto;
    text-transform: uppercase;
    &:hover {
      color: ${p => p.theme.colors.white};
    }
  }
  div {
    opacity: ${p => p.navigating ? '1' : '0'};
    text-align: center;
    transform: ${p => p.navigating ? 'scale(1) translateY(0%)': 'scale(0.75) translateY(25%)'};
    transition: all 500ms cubic-bezier(.55,0,.1,1);
    @media (min-width: ${p => p.theme.breakpoints.medium}) {
      height: 50%;
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
    letter-spacing: 0.15em;
    margin-bottom: 20px;
    opacity: 0.5;
    text-transform: uppercase;
    @media (min-width: ${p => p.theme.breakpoints.medium}) {
      margin-bottom: 50px;
    }
  }
`
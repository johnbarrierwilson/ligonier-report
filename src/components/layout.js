import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components'

import 'normalize.css'
import theme from '../theme.js'

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
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Chronicle Cond A", "Chronicle Cond B", Georgia, 'Times New Roman', Times, serif;
    font-weight: 600;
    line-height: 1.1;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`

const Grid = styled('div')`
  background: ${p => p.theme.colors.white};
  display: grid;
  grid-template-columns: 40px repeat(12, 1fr) 40px;
  grid-template-rows: 40px repeat(11, auto);
  transition: all 500ms cubic-bezier(.55,0,.1,1);
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    grid-template-columns: 90px repeat(12, 1fr) 90px;
    grid-template-rows: 90px repeat(11, 1fr);
  }
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    height: 100vh;
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    overflow: hidden;
  }

  ${p => p.navigating && css`
    /* border-radius: 30px; */
    opacity: 0.5;
    transform: translateY(50vh);
  `}
`

const Container = styled('div')`
  background: #000000;
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    overflow: hidden;
  }
`
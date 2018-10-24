import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components'

import 'normalize.css'
import theme from '../theme.js'

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
                {/* <Toggle href="#" onClick={this.toggleNavigation} navigating={this.state.navigating}>
                  <div></div>
                </Toggle> */}
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
    font-family: "Whitney SSm A", "Whitney SSm B", Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Chronicle Cond A", "Chronicle Cond B", Georgia, 'Times New Roman', Times, serif;
    font-weight: 600;
    line-height: 1.1;
    margin: 0;
  }
`

const Grid = styled('div')`
  background: ${p => p.theme.colors.teal};
  display: grid;
  grid-template-columns: 90px repeat(12, 1fr) 90px;
  grid-template-rows: 90px repeat(11, 1fr);
  height: 100vh;
  transition: all 500ms cubic-bezier(.55,0,.1,1);
  ${p => p.navigating && css`
    border-radius: 30px;
    opacity: 0.5;
    transform: scale(0.9) translateY(50vh);
  `}
`

const Container = styled('div')`
  background: #000000;
`

// const Toggle = styled('a')`
//   align-items: center;
//   display: flex;
//   height: 50px;
//   justify-content: center;
//   position: fixed;
//   right: 20px;
//   top: 20px;
//   width: 50px;
//   z-index: 10;
//   div {
//     background: ${p => p.navigating ? 'transparent' : 'white'};
//     position: relative;
//     height: 2px;
//     transition: all 250ms cubic-bezier(.55,0,.1,1);
//     width: 24px;
//     &::after {
//       background: white;
//       content: '';
//       height: 100%;
//       left: 0;
//       position: absolute;
//       top: 8px;
//       transform: ${p => p.navigating ? 'rotate(-45deg) translate(5.75px, -5.75px)' : 'rotate(0deg)'};
//       transition: all 500ms cubic-bezier(.55,0,.1,1);
//       width: 100%;
//     }
//     &::before {
//       background: white;
//       bottom: 8px;
//       content: '';
//       height: 100%;
//       left: 0;
//       position: absolute;
//       transform: ${p => p.navigating ? 'rotate(45deg) translate(5.75px, 5.75px)' : 'rotate(0deg)'};
//       transition: all 500ms cubic-bezier(.55,0,.1,1);
//       width: 100%;
//     }
//   }
// `
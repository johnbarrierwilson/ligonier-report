import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import 'normalize.css'
import theme from '../theme.js'

const Layout = ({ children }) => {
  console.log(theme);
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
            <Grid>
              {children}
            </Grid>
          </Container>
        </ThemeProvider>
    )}
  />
)}

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
  display: grid;
  grid-template-columns: 90px repeat(12, 1fr) 90px;
  grid-template-rows: 90px repeat(11, 1fr);
  height: 100vh;
`

const Container = styled('div')`
  background: ${p => p.theme.colors.teal};
`
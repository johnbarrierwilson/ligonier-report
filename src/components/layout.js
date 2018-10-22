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
            </Helmet>
            {children}
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
  html {
    font-family: sans-serif;
    font-size: 14px;
  }
`

const Container = styled('div')`
  background: ${p => p.theme.colors.pink};
`
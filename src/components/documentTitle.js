import React from 'react'
import styled from 'styled-components'

const DocumentTitle = (props) => (
  <Container {...props}>Ministry Report</Container>
)

const Container = styled('p')`
  display: none;
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
    display: block;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.35em;
    position: fixed;
    right: 90px;
    text-align: right;
    text-transform: uppercase;
    top: 38px;
    z-index: ${p => p.theme.index.title};
  }
`

export default DocumentTitle
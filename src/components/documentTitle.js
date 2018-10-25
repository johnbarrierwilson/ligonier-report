import React from 'react'
import styled from 'styled-components'

const DocumentTitle = (props) => (
  <Container {...props}>Ministry Report</Container>
)

const Container = styled('p')`
  display: none;
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    align-self: center;
    color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
    display: block;
    font-size: 10px;
    font-weight: 600;
    grid-column: 8 / span 6;
    grid-row: 1 / span 1;
    letter-spacing: 0.35em;
    text-align: right;
    text-transform: uppercase;
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: 12 / span 2;
  }
`

export default DocumentTitle
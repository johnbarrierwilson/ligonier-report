import React from 'react'
import styled from 'styled-components'

const DocumentTitle = () => (
  <Container>Ministry Report</Container>
)

const Container = styled('p')`
  align-self: center;
  color: ${p => p.theme.colors.white};
  font-size: 10px;
  font-weight: 600;
  grid-column: 12 / span 2;
  grid-row: 1 / span 1;
  letter-spacing: 0.35em;
  text-align: right;
  text-transform: uppercase;
`

export default DocumentTitle
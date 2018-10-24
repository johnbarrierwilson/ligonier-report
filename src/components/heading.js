import React from 'react'
import styled from 'styled-components'

const Heading = (props) => (
  <Container>{props.text}</Container>
)

const Container = styled('h1')`
  color: ${p => p.theme.colors.white};
  font-size: 32px;
  grid-column: 2 / span 6;
  grid-row: 11 / span 1;
  text-transform: uppercase;
`

export default Heading

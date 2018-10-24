import React from 'react'
import styled from 'styled-components'

const Heading = (props) => (
  <Container {...props}>{props.text}</Container>
)

const Container = styled('h1')`
  color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  font-size: ${p => {
    switch(p.size) {
      case 'xl':
        return '75px'
      default:
        return '32px'
    }
  }};
  grid-column: ${p => p.column};
  grid-row: ${p => p.row};
  letter-spacing: ${p => p.size === 'xl' ? '0.65em' : '0'};
  text-transform: uppercase;
`

export default Heading

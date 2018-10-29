import React from 'react'
import styled, { css } from 'styled-components'

const Heading = (props) => (
  <Container {...props}>{props.text}</Container>
)

const Container = styled('h1')`
  ${p => p.center ? css`
    align-self: center;
  ` : null}
  color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  font-size: ${p => {
    switch(p.size) {
      case 'xl':
        return '3.125rem'
      case 's':
        return '1rem'
      default:
        return '1.5rem'
    }
  }};
  grid-column: ${p => p.column[0]};
  grid-row: ${p => p.row[0]};
  letter-spacing: ${p => p.size === 'xl' ? '0.4em' : '0'};
  margin: 50px 0;
  position: relative;
  text-transform: uppercase;
  z-index: ${p => p.theme.index.heading};
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    grid-column: ${p => p.column[1]};
    grid-row: ${p => p.row[1]};
    margin: 0;
  }
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    font-size: ${p => {
      switch(p.size) {
        case 'xl':
          return '4.6875rem'
        case 's':
          return '1.5rem'
        default:
          return '2.375rem'
      }
    }};
    grid-column: ${p => p.column[2]};
    grid-row: ${p => p.row[2]};
    letter-spacing: ${p => p.size === 'xl' ? '0.65em' : '0'};
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
  }
`

export default Heading

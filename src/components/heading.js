import React from 'react'
import styled, { css } from 'styled-components'

const Heading = (props) => (
  <Container {...props}>{props.text}</Container>
)

const Container = styled('h1')`
  color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  font-size: ${p => {
    switch(p.size) {
      case 'xl':
        return '3.125rem'
      case 's':
        return '1.25rem'
      default:
        return '1.5rem'
    }
  }};
  letter-spacing: ${p => p.size === 'xl' ? '0.2em' : '0'};
  margin: 0 0 25px;
  position: relative;
  ${p => p.size === 'xl' && css`text-align: center;`};
  text-transform: uppercase;
  z-index: ${p => p.theme.index.heading};

  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    ${p => p.center ? css`
      align-self: center;
  ` : null}
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
    margin: 0;
    ${p => p.size === 'xl' && css`text-align: left;`};
    transform: ${p => p.transform ? p.transform : null};
  }
  
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
  }
`

export default Heading

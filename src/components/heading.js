import React from 'react'
import styled, { css } from 'styled-components'

const Heading = (props) => (
  <Container {...props}>{props.text ? props.text : props.children}</Container>
)

const Container = styled('h1')`
  color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  font-family: ${p => p.size !== 'xl' ? '"Chronicle Comp A", "Chronicle Comp B", Georgia, "Times New Roman", Times, serif' : '"Chronicle Cond A", "Chronicle Cond B", Georgia, "Times New Roman", Times, serif'};
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
  letter-spacing: ${p => p.size === 'xl' ? '0.2em' : p.size === 's' ? '0.1em' : '0'};
  margin: 0 0 25px;
  position: relative;
  ${p => p.size === 'xl' && css`text-align: center;`};
  text-transform: uppercase;
  z-index: ${p => p.theme.index.heading};

  @media (min-width: ${p => p.theme.breakpoints.large}) {
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
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
    letter-spacing: ${p => p.size === 'xl' ? '0.65em' : '0'};
    margin: 0;
    ${p => p.size === 'xl' && css`text-align: left;`};
    transform: ${p => p.transform ? p.transform : null};
  }
`

export default Heading

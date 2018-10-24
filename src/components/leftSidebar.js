import React from 'react'
import styled from 'styled-components'

const LeftSidebar = (props) => (
  <Container>
    <p>{props.text}</p>
  </Container>
)

const Container = styled('div')`
  grid-column: 1 / span 1;
  grid-row: 2 / span 10;
  position: relative;
  p {
    color: ${p => p.theme.colors.white};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.35em;
    position: absolute;
    top: 50%;
    right: 50%;
    text-align: center;
    text-transform: uppercase;
    transform: rotate(-90deg) translateX(50%);
    transform-origin: 100% 50%;
    white-space: nowrap;
  }
`

export default LeftSidebar
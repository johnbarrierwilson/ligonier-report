import React from 'react'
import styled from 'styled-components'

const LeftSidebar = (props) => (
  <Container {...props}>
    <p>{props.text}</p>
  </Container>
)

const Container = styled('div')`
  bottom: 50%;
  left: 43px;
  position: fixed;
  transform: translate(-50%, 50%);
  z-index: ${p => p.theme.index.leftSidebar};
  p {
    color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
    font-family: 'Whitney SSm A', 'Whitney SSm B', Arial, Helvetica, sans-serif;
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
    transition: ${p => p.theme.transition};
    white-space: nowrap;
  }
`

export default LeftSidebar
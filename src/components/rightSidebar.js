import React from 'react'
import styled from 'styled-components'

const RightSidebar = (props) => (
  <Container {...props}>
    <li></li>
    <li></li>
    <li></li>
  </Container>
)

const Container = styled('ol')`
  align-items: center;
  bottom: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  position: fixed;
  right: 20px;
  list-style: none;
  transform: translate(50%, 50%);
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    bottom: auto;
    grid-column: 14 / span 1;
    grid-row: 6 / span 2;
    position: relative;
    right: auto;
    transform: none;
  }
  li {
    background: transparent;
    border: 1px solid ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
    border-radius: 50%;
    height: 8px;
    margin: 4px auto;
    width: 8px;
  }
  li:nth-child(${p => p.status}) {
    background: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  }
`

export default RightSidebar
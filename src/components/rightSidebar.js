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
  display: flex;
  flex-flow: column nowrap;
  grid-column: 14 / span 1;
  grid-row: 6 / span 2;
  justify-content: center;
  list-style: none;
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
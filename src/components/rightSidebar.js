import React from 'react'
import styled from 'styled-components'

const RightSidebar = (props) => (
  <Container>
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
    border: 1px solid white;
    border-radius: 50%;
    height: 8px;
    margin: 4px auto;
    width: 8px;
  }
`

export default RightSidebar
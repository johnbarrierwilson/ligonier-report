import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavigateRight = (props) => (
  <Container {...props}></Container>
)

const Container = styled(Link)`
  align-items: center;
  align-self: center;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 50%;
  display: flex;
  font-size: 35px;
  grid-column: 14 / span 1;
  grid-row: 12 / span 1;
  height: 40px;
  justify-content: center;
  justify-self: center;
  width: 40px;
  &::before {
    content: '';
    border-bottom: 2px solid ${p => p.theme.colors.black};
    border-right: 2px solid ${p => p.theme.colors.black};
    height: 8px;
    transform: rotate(-45deg) translate(-1px, -1px);
    width: 8px;
  }
`

export default NavigateRight
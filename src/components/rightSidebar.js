import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const RightSidebar = (props) => (
  <Container {...props}>
    <li><Link containerId="containerElement" href="#" smooth={true} to="introductionread">&nbsp;</Link></li>
    <li><Link containerId="containerElement" href="#" smooth={true} to="introductionlisten">&nbsp;</Link></li>
    <li><Link containerId="containerElement" href="#" smooth={true} to="introductiongather">&nbsp;</Link></li>
  </Container>
)

const Container = styled('ol')`
  display: none;
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    align-items: center;
    bottom: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    position: fixed;
    right: 40px;
    list-style: none;
    transform: translate(50%, 50%);
    z-index: ${p => p.theme.index.rightSidebar};
  }
  li a {
    align-items: center;
    border-bottom: none;
    display: flex;
    height: 24px;
    justify-content: center;
    width: 24px;
    &::before {
      background: transparent;
      border: 1px solid ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
      border-radius: 50%;
      content: '';
      height: 8px;
      opacity: ${p => p.navigating ? '0' : '1'};
      transition: ${p => p.theme.transition};
      width: 8px;
    }
  }
  li:nth-child(${p => p.status}) a::before {
    background: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  }
`

export default RightSidebar
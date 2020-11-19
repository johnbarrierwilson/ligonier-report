import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

interface RightSidebarProps {
  readonly inverted: boolean
  readonly navigating: boolean
  readonly status: number
}

const RightSidebar = (props: RightSidebarProps) => (
  <Container {...props}>
    <li>
      <Link
        containerId="containerElement"
        href="#"
        smooth
        to="introductionread"
      >
        &nbsp;
      </Link>
    </li>
    <li>
      <Link
        containerId="containerElement"
        href="#"
        smooth
        to="introductionlisten"
      >
        &nbsp;
      </Link>
    </li>
    <li>
      <Link
        containerId="containerElement"
        href="#"
        smooth
        to="introductiongather"
      >
        &nbsp;
      </Link>
    </li>
  </Container>
)

const Container = styled.ol<RightSidebarProps>`
  display: none;
  @media (min-width: ${(p) => p.theme.breakpoints.small}) {
    align-items: center;
    bottom: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    position: fixed;
    right: 40px;
    list-style: none;
    transform: translate(50%, 50%);
    z-index: ${(p) => p.theme.index.rightSidebar};
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
      border: 1px solid
        ${(p) => (p.inverted ? p.theme.colors.white : p.theme.colors.black)};
      border-radius: 50%;
      content: '';
      height: 8px;
      opacity: ${(p) => (p.navigating ? '0' : '1')};
      transition: ${(p) => p.theme.transition};
      width: 8px;
    }
  }
  li:nth-child(${(p) => p.status}) a::before {
    background: ${(p) =>
      p.inverted ? p.theme.colors.white : p.theme.colors.black};
  }
`

export default RightSidebar


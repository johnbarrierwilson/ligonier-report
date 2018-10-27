import React from 'react'
import styled from 'styled-components'

const Toggle = (props) => (
  <Container href="#" {...props}>
    <div></div>
  </Container>
)

const Container = styled('a')`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 0;
  width: 40px;
  z-index: ${p => p.theme.index.toggle};
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    height: 50px;
    right: 20px;
    top: 20px;
    width: 50px;
  }
  div {
    background: ${p => p.navigating ? 'transparent' : p.inverted ? p.theme.colors.white : p.theme.colors.black};
    position: relative;
    height: 2px;
    transition: all 250ms cubic-bezier(.55,0,.1,1);
    width: 20px;
    @media (min-width: ${p => p.theme.breakpoints.small}) {
      width: 24px;
    }
    &::after {
      background: ${p => p.navigating ? p.theme.colors.white : p.inverted ? p.theme.colors.white : p.theme.colors.black};
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 6px;
      transform: ${p => p.navigating ? 'rotate(-45deg) translate(4.25px, -4.25px)' : 'rotate(0deg)'};
      transition: all 500ms cubic-bezier(.55,0,.1,1);
      width: 100%;
      @media (min-width: ${p => p.theme.breakpoints.small}) {
        top: 8px;
        transform: ${p => p.navigating ? 'rotate(-45deg) translate(5.75px, -5.75px)' : 'rotate(0deg)'};
      }
    }
    &::before {
      background: ${p => p.navigating ? p.theme.colors.white : p.inverted ? p.theme.colors.white : p.theme.colors.black};
      bottom: 6px;
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      transform: ${p => p.navigating ? 'rotate(45deg) translate(4.25px, 4.25px)' : 'rotate(0deg)'};
      transition: all 500ms cubic-bezier(.55,0,.1,1);
      width: 100%;
      @media (min-width: ${p => p.theme.breakpoints.small}) {
        bottom: 8px;
        transform: ${p => p.navigating ? 'rotate(45deg) translate(5.75px, 5.75px)' : 'rotate(0deg)'};
      }
    }
  }
`

export default Toggle
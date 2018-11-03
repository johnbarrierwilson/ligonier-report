import React from 'react'
import styled, { css } from 'styled-components'

// Used for mobile sizing/spacing/display

class Well extends React.Component {
  constructor() {
    super()
    this.state = { isSmall: false }
  }
  componentDidMount() {
    this.setState({ isSmall: window.innerWidth <= 900 })
    window.addEventListener('resize', () => {
      this.setState({ isSmall: window.innerWidth <= 900 })
    })
  }
  render() {
    return this.state.isSmall ? <Container {...this.props}>{this.props.children}</Container> : this.props.children;
  }
}

const Container = styled('div')`
  margin: ${p => {
    switch(p.size) {
      case 'xl':
        return '90px'
      case 'l':
        return '80px'
      default:
        return '40px'
    }
  }} 0;
  position: relative;

  ${p => p.bottom ? css`
    margin-top: 0;
  ` : null}

  ${p => p.top ? css`
    margin-bottom: 0;
  ` : null}

  ${p => p.hide ? css`
    display: none;
  ` : null}
`

export default Well
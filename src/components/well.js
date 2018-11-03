import React from 'react'
import styled, { css } from 'styled-components'

class Well extends React.Component {
  constructor() {
    super()
    this.state = { isSmall: false }
  }
  componentDidMount() {
    this.setState({ isSmall: window.innerWidth <= 600 })
    window.addEventListener('resize', () => {
      this.setState({ isSmall: window.innerWidth <= 600 })
    })
  }
  componentWillUnmount() {
    window.removeEventListener('resize')
  }
  render() {
    return this.state.isSmall ? <Container {...this.props}>{this.props.children}</Container> : this.props.children;
  }
}

const Container = styled('div')`
  margin: 75px 0 50px;

  ${p => p.bottom ? css`
    margin-top: 0;
  ` : null}

  ${p => p.top ? css`
    margin-bottom: 0;
  ` : null}
`

export default Well
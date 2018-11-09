import React from 'react'
import LazyLoad from 'react-lazyload'
import styled, { css } from 'styled-components'
import throttle from 'lodash.throttle'

const Image = (props) => (
  <LazyLoad offset={1000} overflow={true}>
    <Source {...props} />
  </LazyLoad>
)

class Source extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transformValue: 0
    }
    this.image = React.createRef()
  }
  componentDidMount() {
    const containerElement = document.getElementById('containerElement')
    if (this.props.transform === 'rotate' || this.props.transform === 'slide') {
      const calculateValue = () => {
        const containerTop = containerElement.scrollTop
        const imageTop = this.image.current.offsetTop
        const transformValue = containerTop - imageTop + (containerTop + imageTop)
        this.setState({transformValue})
      }
      containerElement.addEventListener('scroll', throttle(calculateValue, 250))
    }
  }
  render() {
    return <Container {...this.props} ref={this.image} animate={this.state.transformValue} />
  }
}

const Container = styled('img')`
  height: auto;
  margin-left: ${p => p.fullWidth ? '-40px' : '0'};
  position: relative;
  width: ${p => p.fullWidth ? 'calc(100% + 80px)' : '100%'};
  z-index: ${p => p.theme.index.image};
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    margin-left: 0;
    width: 100%;
  }
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    grid-column: ${p => p.column[2]};
    grid-row: ${p => p.row[2]};
    height: ${p => p.size && p.size !== 'contain' ? p.size.split(' ')[1] : '100%'};
    ${p => p.height ? css`height: ${p.height};` : null}
    object-position: ${p => p.position ? p.position : 'center center'};
    object-fit: ${p => p.size === 'contain' ? 'contain' : p.size ? p.size : 'cover'};
    transform: ${p => 
      {
        if (p.transform === 'rotate') {
          console.log(p.animate)
          return `rotate(${p.animate / 50}deg)`
        } else if (p.transform === 'slide') {
          return `translateY(${p.animate / -50}%)`
        } else if (p.transform) {
          return p.transform
        } else {
          return 'none'
        }
      }
    };
    transition: ${p => p.transform === 'rotate' || p.transform === 'slide' ? 'transform 300ms linear' : 'none'};
    width: ${p => p.size ? p.size.split(' ')[0] : '100%'};
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
  }
`

export default Image
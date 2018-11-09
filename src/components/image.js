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
    if (this.props.transform && !this.props.transform.startsWith('translate') ) {
      const calculateValue = () => {
        const containerTop = containerElement.scrollTop
        const imageTop = this.image.current.parentNode.offsetTop
        const imageHeight = this.image.current.offsetHeight * 2
        const transformValue = imageTop - containerTop
        if (containerTop < imageTop + imageHeight) {
          this.setState({transformValue})
        }
      }
      containerElement.addEventListener('scroll', throttle(calculateValue, 100))
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
          return `rotate(${p.animate / -50}deg)`
        } else if (p.transform === 'slide') {
          return `translateY(${p.animate / 20}%) translateX(0)`
        } else if (p.transform) {
          return p.transform
        } else {
          return 'none'
        }
      }
    };
    /* transition: ${p => p.transform && !p.transform.startsWith('translate') ? 'transform 150ms linear' : 'none'}; */
    width: ${p => p.size ? p.size.split(' ')[0] : '100%'};
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
  }
`

export default Image
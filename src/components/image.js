import React from 'react'
import LazyLoad from 'react-lazyload'
import styled, { css } from 'styled-components'

const Image = (props) => (
  // <LazyLoad height={props.lazyloadHeight ? props.lazyloadHeight : null} offset={1000} overflow={true}>
  <Container src={props.src} {...props} />
  // </LazyLoad>
)

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
    transform: ${p => p.transform ? p.transform : 'none'};
    width: ${p => p.size ? p.size.split(' ')[0] : '100%'};
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
  }
`

export default Image
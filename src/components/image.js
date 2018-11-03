import React from 'react'
import LazyLoad from 'react-lazyload'
import styled, { css } from 'styled-components'

const Image = (props) => (
  <LazyLoad height={1} offset={100} overflow={true} once={true}>
    <Container src={props.src} {...props} />
  </LazyLoad>
)

const Container = styled('img')`
  grid-column: ${p => p.column[0]};
  grid-row: ${p => p.row[0]};
  height: 100%;
  object-position: ${p => p.position ? p.position : 'center center'};
  object-fit: ${p => p.size === 'contain' ? 'contain' : p.size ? p.size : 'cover'};
  position: relative;
  width: 100%;
  z-index: ${p => p.theme.index.image};
  ${p => p.height ? css`height: ${p.height};` : null}
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    grid-column: ${p => p.column[1]};
    grid-row: ${p => p.row[1]};
    transform: ${p => p.transform ? p.transform : 'none'};
  }
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    grid-column: ${p => p.column[2]};
    grid-row: ${p => p.row[2]};
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
  }
`

export default Image
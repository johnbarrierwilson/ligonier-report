import React from 'react'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

const Image = (props) => (
  <Container fluid={props.src} {...props} />
)

const Container = styled(Img)`
  height: auto;
  margin-left: ${p => p.fullWidth ? '-40px' : p.maxWidth ? 'auto' : '0'};
  margin-right: ${p => p.maxWidth ? 'auto' : '0'};
  max-width: ${p => p.maxWidth === 'small' ? `175px` : 'none'};
  position: relative;
  width: ${p => p.fullWidth ? 'calc(100% + 80px)' : '100%'};
  z-index: ${p => p.theme.index.image};
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    margin-left: ${p => p.center ? 'auto' : '0'};
    margin-right: auto;
    max-width: ${p => p.fullWidth ? 'none' : p.maxWidth === 'small' ? `250px` : p.maxWidth === 'large' ? 'none' : '350px'};
    width: 100%;
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
    height: ${p => p.size && p.size !== 'contain' ? p.size.split(' ')[1] : '100%'};
    ${p => p.height ? css`height: ${p.height};` : null}
    max-width: none;
    transform: ${p => p.transform ? p.transform : 'none'};
    width: ${p => p.size ? p.size.split(' ')[0] : '100%'};
    img {
      object-position: ${p => p.position ? p.position : 'center center'} !important;
      object-fit: ${p => p.size === 'contain' ? 'contain' : p.size ? p.size : 'cover'} !important;
    }
  }

  ${p => p.president && css`
    @media (max-width: ${p.theme.breakpoints.large}) {
      height: 115px;
      width: 115px !important;
    }
    img {
      @media (max-width: ${p.theme.breakpoints.large}) {
        height: auto !important;
        transform: translate(-25.5%,-4%);
        width: 280px !important;
      }
    }
  `}
`

export default Image
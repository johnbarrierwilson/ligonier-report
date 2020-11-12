import React from 'react'
import styled, { css } from 'styled-components'

interface DocumentTitleProps {
  readonly cover?: boolean
  readonly inverted?: boolean
  readonly navigating?: boolean
}

const DocumentTitle = (props: DocumentTitleProps) => (
  <Container {...props}>2020 Ministry Update</Container>
)

const Container = styled.p<DocumentTitleProps>`
  display: none;
  ${(p) =>
    p.cover
      ? css`
          color: ${(p) => p.theme.colors.black};
          display: block;
          font-family: 'Whitney SSm A', 'Whitney SSm B', Arial, Helvetica,
            sans-serif;
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 0.35em;
          opacity: 1;
          position: relative;
          text-align: center;
          text-transform: uppercase;
          @media (min-width: ${(p) => p.theme.breakpoints.large}) {
            font-size: 0.875rem;
            left: 0;
            margin: auto;
            position: absolute;
            right: 0;
            top: 15vh;
          }
        `
      : css<DocumentTitleProps>`
          @media (min-width: ${(p) => p.theme.breakpoints.large}) {
            color: ${(p) =>
              p.inverted ? p.theme.colors.white : p.theme.colors.black};
            display: block;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.35em;
            opacity: ${(p) => (p.navigating ? '1' : '0')};
            position: fixed;
            right: 90px;
            text-align: right;
            text-transform: uppercase;
            top: 38px;
            transition: ${(p) => p.theme.transition};
            z-index: ${(p) => p.theme.index.title};
          }
        `}
`

export default DocumentTitle

import styled, { css } from 'styled-components'

interface ContentProps {
  readonly center?: boolean
  readonly column: string
  readonly inverted?: boolean
  readonly maxWidth?: 'large'
  readonly row: string
  readonly type?: 'deck' | 'deck-intro' | 'sans'
  readonly transform?: string
}

const Content = styled.div<ContentProps>`
  color: ${(p) => (p.inverted ? p.theme.colors.white : p.theme.colors.black)};
  position: relative;
  z-index: ${(p) => p.theme.index.content};
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-column: ${(p) => p.column.split(' ')[0]};
    -ms-grid-column-span: ${(p) => p.column.split(' ')[3]};
    -ms-grid-row: ${(p) => p.row.split(' ')[0]};
    -ms-grid-row-span: ${(p) => p.column.split(' ')[3]};
    align-self: center;
    grid-column: ${(p) => p.column};
    grid-row: ${(p) => p.row};
    transform: ${(p) => (p.transform ? p.transform : 'none')};
  }
  ${(p) =>
    p.type === 'deck'
      ? css`
          font-size: 1.1rem;
          font-style: italic;
          @media (min-width: ${p.theme.breakpoints.small}) {
            font-size: 1rem;
            line-height: 2;
          }
          @media (min-width: ${p.theme.breakpoints.small}) {
            font-size: 1.2rem;
          }
          strong {
            font-style: normal;
          }
        `
      : null}

  ${(p) =>
    p.type === 'deck-intro'
      ? css`
          font-size: 1.2rem;
          text-align: center;
          @media (min-width: ${p.theme.breakpoints.small}) {
            line-height: 1.5;
          }
          @media (min-width: ${p.theme.breakpoints.large}) {
            font-size: 1.7rem;
          }
          span {
            display: block;
            font-size: 0.875rem;
            font-style: italic;
            font-weight: 400;
            letter-spacing: 0;
            margin-top: 2rem;
            text-transform: capitalize;
            @media (min-width: ${p.theme.breakpoints.small}) {
              font-size: 1.25rem;
              line-height: 2;
            }
          }
        `
      : null}

  ${(p) =>
    p.type === 'sans'
      ? css`
          font-family: 'Whitney SSm A', 'Whitney SSm B', Arial, Helvetica,
            sans-serif;
          font-size: 0.95rem;
          line-height: 1.4;
          @media (min-width: ${p.theme.breakpoints.small}) {
            font-size: 0.8rem;
          }
          strong {
            display: block;
            font-family: 'Mercury Display A', 'Mercury Display B', Georgia,
              'Times New Roman', sans-serif;
            padding-right: 4.5rem;
          }
        `
      : null}

  p {
    text-indent: 25px;
    &:first-of-type {
      text-indent: 0px;
    }
  }
  strong {
    font-weight: 600;
  }
`

export default Content

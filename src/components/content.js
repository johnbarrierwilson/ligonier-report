import styled, { css } from 'styled-components'

const Content = styled('div')`
  ${p => p.center ? css`
    align-items: center;
    display: flex;
    flex-flow: column;
  ` : null}
  align-self: center;
  color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  grid-column: ${p => p.column[0]};
  grid-row: ${p => p.row[0]};
  position: relative;
  z-index: ${p => p.theme.index.content};
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    grid-column: ${p => p.column[1]};
    grid-row: ${p => p.row[1]};
  }
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    grid-column: ${p => p.column[2]};
    grid-row: ${p => p.row[2]};
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
  }
  p {
    text-align: justify;
    text-indent: 25px;
    &:first-of-type {
      text-indent: 0px;
    }
  }
  strong {
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`

export default Content
import styled, { css } from 'styled-components'

const Content = styled('div')`
  align-self: center;
  color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  grid-column: ${p => p.column[0]};
  grid-row: ${p => p.row[0]};
  position: relative;
  z-index: ${p => p.theme.index.content};
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

  ${p => p.type === 'deck' ? css`
    font-style: italic;
    @media (min-width: ${p.theme.breakpoints.small}) {
      line-height: 2;
    }
    strong {
      font-style: normal;
      font-weight: 400 !important;
    }
  ` : null}

  ${p => p.type === 'sans' ? css`
    font-family: "Whitney SSm A", "Whitney SSm B", Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    line-height: 1.4;
    strong {
      display: block;
      font-family: "Mercury Display A", "Mercury Display B", Georgia, "Times New Roman", sans-serif;
      padding-right: 4.5rem;
    }
  ` : null}

  p {
    /* text-align: justify; */
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
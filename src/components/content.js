import styled, { css } from 'styled-components'

const Content = styled('div')`
  color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  position: relative;
  z-index: ${p => p.theme.index.content};
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    align-self: center;
    grid-column: ${p => p.column[2]};
    grid-row: ${p => p.row[2]};
    transform: ${p => p.transform ? p.transform : 'none'};
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
  }
`

export default Content
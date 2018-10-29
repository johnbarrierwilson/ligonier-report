import styled from 'styled-components'

const Blockquote = styled('div')`
  color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  font-family: "Chronicle Cond A", "Chronicle Cond B", Georgia, 'Times New Roman', Times, serif;
  font-size: 2.375rem;
  grid-column: ${p => p.column[0]};
  grid-row: ${p => p.row[0]};
  letter-spacing: 0.175em;
  line-height: 1.7;
  position: relative;
  text-transform: uppercase;
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
  p:first-of-type {
    text-indent: -19px;
  }
`

export default Blockquote
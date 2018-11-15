import styled, { css } from 'styled-components'

const Blockquote = styled('div')`
  color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  font-family: "Chronicle Cond A", "Chronicle Cond B", Georgia, 'Times New Roman', Times, serif;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  margin: ${p => p.top ? '25px 0 0': '25px 0'};
  position: relative;
  text-transform: uppercase;
  z-index: ${p => p.theme.index.content};
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    -ms-grid-column: ${p => p.column.split(' ')[0]};
    -ms-grid-column-span: ${p => p.column.split(' ')[3]};
    -ms-grid-row: ${p => p.row.split(' ')[0]};
    -ms-grid-row-span: ${p => p.column.split(' ')[3]};
    font-size: 2.35rem;
    grid-column: ${p => p.column};
    grid-row: ${p => p.row};
    letter-spacing: 0.175em;
    line-height: 1.5;
    margin: 0;
  }
  ${p => p.indent ? css`
    p:first-of-type {
      text-indent: -8px;
      @media (min-width: ${p => p.theme.breakpoints.small}) {
        text-index: -19px
      }
    }
  ` : null}
`

export default Blockquote
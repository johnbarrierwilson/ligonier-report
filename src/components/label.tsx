import styled from 'styled-components'

interface LabelProps {
  readonly column: string
  readonly row: string
}

const Label = styled.div<LabelProps>`
  line-height: 1.75;
  margin: 25px 0 50px;
  position: relative;
  text-align: center;
  z-index: ${(p) => p.theme.index.label};
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-column: ${(p) => p.column.split(' ')[0]};
    -ms-grid-column-span: ${(p) => p.column.split(' ')[3]};
    -ms-grid-row: ${(p) => p.row.split(' ')[0]};
    -ms-grid-row-span: ${(p) => p.column.split(' ')[3]};
    align-self: center;
    grid-column: ${(p) => p.column};
    grid-row: ${(p) => p.row};
    margin: 0;
    text-align: right;
  }
  span {
    border-bottom: 1px solid ${(p) => p.theme.colors.black};
    color: ${(p) => p.theme.colors.black};
    font-family: 'Whitney SSm A', 'Whitney SSm B', 'Helvetica Neue', Helvetica,
      Arial, sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    padding-bottom: 4px;
    text-transform: uppercase;
  }
`

export default Label


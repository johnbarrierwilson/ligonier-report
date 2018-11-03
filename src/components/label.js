import styled from 'styled-components'

const Label = styled('div')`
  align-self: center;
  grid-column: ${p => p.column[0]};
  grid-row: ${p => p.row[0]};
  margin: 25px 0 50px;
  position: relative;
  text-align: right;
  z-index: ${p => p.theme.index.label};
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    grid-column: ${p => p.column[1]};
    grid-row: ${p => p.row[1]};
    margin: 0;
  }
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    grid-column: ${p => p.column[2]};
    grid-row: ${p => p.row[2]};
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
  }
  span {
    border-bottom: 1px solid ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.black};
    font-family: "Whitney SSm A", "Whitney SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    padding-bottom: 4px;
    text-transform: uppercase;
  }
`

export default Label
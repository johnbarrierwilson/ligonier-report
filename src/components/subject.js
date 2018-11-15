import styled from 'styled-components'

const Subject = styled('div')`
  color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  font-family: "Whitney SSm A", "Whitney SSm B", Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 30px;
  position: relative;
  text-transform: uppercase;
  z-index: ${p => p.theme.index.label};
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    -ms-grid-column: ${p => p.column.split(' ')[0]};
    -ms-grid-column-span: ${p => p.column.split(' ')[3]};
    -ms-grid-row: ${p => p.row.split(' ')[0]};
    -ms-grid-row-span: ${p => p.column.split(' ')[3]};
    align-self: center;
    grid-column: ${p => p.column};
    grid-row: ${p => p.row};
    letter-spacing: 0.4em;
    margin-bottom: 0;
  }
`

export default Subject
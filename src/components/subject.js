import styled from 'styled-components'

const Subject = styled('div')`
  color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  font-family: "Whitney SSm A", "Whitney SSm B", Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.4em;
  margin-bottom: 30px;
  position: relative;
  text-transform: uppercase;
  z-index: ${p => p.theme.index.label};
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    align-self: center;
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
    margin-bottom: 0;
  }
`

export default Subject
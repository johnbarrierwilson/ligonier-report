import styled from 'styled-components'

const Subject = styled('div')`
  align-self: center;
  font-size: 12px;
  font-weight: 600;
  grid-column: ${p => p.column[0]};
  grid-row: ${p => p.row[0]};
  letter-spacing: 0.4em;
  position: relative;
  text-transform: uppercase;
  z-index: ${p => p.theme.index.label};
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
`

export default Subject
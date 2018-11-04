import styled from 'styled-components'

const Divider = styled('hr')`
  border: none;
  border-top: 1px solid ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  margin: ${p => p.top ? '30px 0' : '0 0 30px'};
  position: relative;
  width: 100px;
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    align-self: center;
    grid-column: ${p => p.column[2]};
    grid-row: ${p => p.row[2]};
    margin: 0;
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
  }
`

export default Divider
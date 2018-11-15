import styled from 'styled-components'

const Divider = styled('hr')`
  border: none;
  border-top: 1px solid ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  margin: ${p => p.top ? '30px 0' : '0 0 30px'};
  position: relative;
  width: 100px;
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    -ms-grid-column: ${p => p.column.split(' ')[0]};
    -ms-grid-column-span: ${p => p.column.split(' ')[3]};
    -ms-grid-row: ${p => p.row.split(' ')[0]};
    -ms-grid-row-span: ${p => p.column.split(' ')[3]};
    align-self: center;
    grid-column: ${p => p.column};
    grid-row: ${p => p.row};
    margin: 0;
  }
`

export default Divider
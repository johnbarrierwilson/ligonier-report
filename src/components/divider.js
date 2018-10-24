import styled from 'styled-components'

const Divider = styled('hr')`
  border: none;
  border-top: 1px solid ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  margin: 0;
  grid-column: ${p => p.column};
  grid-row: ${p => p.row};
  width: 100px;
`

export default Divider
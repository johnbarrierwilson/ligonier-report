import styled from 'styled-components'

const Label = styled('div')`
  align-self: center;
  grid-column: ${p => p.column};
  grid-row: ${p => p.row};
  text-align: right;
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
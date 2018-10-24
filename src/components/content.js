import styled from 'styled-components'

const Content = styled('div')`
  color: ${p => p.theme.colors.white};
  grid-column: 10 / span 4;
  grid-row: 11 / span 2;
  strong {
    font-weight: 600;
    text-transform: uppercase;
  }
`

export default Content
import styled from 'styled-components'

const Content = styled('div')`
  color: ${p => p.inverted ? p.theme.colors.white : p.theme.colors.black};
  grid-column: ${p => p.column};
  grid-row: ${p => p.row};
  p {
    text-align: justify;
    text-indent: 25px;
    &:first-of-type {
      text-indent: 0px;
    }
  }
  strong {
    font-weight: 600;
    text-transform: uppercase;
  }
`

export default Content
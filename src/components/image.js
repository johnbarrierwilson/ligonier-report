import styled from 'styled-components'

const Image = styled('div')`
  background-image: url(${p => p.src});
  background-position: center 20%;
  background-size: cover;
  grid-column: ${p => p.column};
  grid-row: ${p => p.row};
`

export default Image
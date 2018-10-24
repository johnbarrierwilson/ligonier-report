import styled from 'styled-components'

const Image = styled('div')`
  background-image: url(${p => p.src});
  background-position: ${p => p.position ? p.position : 'center center'};
  background-repeat: no-repeat;
  background-size: ${p => p.size ? p.size : 'cover'};
  grid-column: ${p => p.column};
  grid-row: ${p => p.row};
  transform: ${p => p.transform ? p.transform : 'none'};
`

export default Image
import styled from 'styled-components'

const Image = styled('div')`
  background-image: url(${p => p.src});
  background-position: ${p => p.position ? p.position : 'center center'};
  background-repeat: no-repeat;
  background-size: ${p => p.size ? p.size : 'cover'};
  grid-column: ${p => p.column[0]};
  grid-row: ${p => p.row[0]};
  position: relative;
  z-index: ${p => p.theme.index.image};
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    grid-column: ${p => p.column[1]};
    grid-row: ${p => p.row[1]};
    transform: ${p => p.transform ? p.transform : 'none'};
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

export default Image
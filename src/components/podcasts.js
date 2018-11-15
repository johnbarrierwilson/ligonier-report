import styled from 'styled-components'

const podcasts = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: relative;
  z-index: ${p => p.theme.index.podcasts};
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    align-self: center;
    grid-column: ${p => p.column};
    grid-row: ${p => p.row};
    transform: ${p => p.transform ? p.transform : 'none'};
  }
  img {
    display: block;
    height: 70px;
    margin: 0;
    width: 70px;
    @media (min-width: ${p => p.theme.breakpoints.small}) {
      height: 100%;
      max-height: 140px;
      width: auto;
    }
  }
`

export default podcasts
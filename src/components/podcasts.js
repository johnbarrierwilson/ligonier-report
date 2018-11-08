import styled from 'styled-components'

const podcasts = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: relative;
  z-index: ${p => p.theme.index.podcasts};
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    align-self: center;
    grid-column: ${p => p.column[2]};
    grid-row: ${p => p.row[2]};
    transform: ${p => p.transform ? p.transform : 'none'};
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
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
import styled from 'styled-components'

const podcasts = styled('div')`
  align-self: center;
  display: flex;
  flex-flow: row nowrap;
  grid-column: ${p => p.column[0]};
  grid-row: ${p => p.row[0]};
  justify-content: space-between;
  position: relative;
  z-index: ${p => p.theme.index.podcasts};
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
  img {
    display: block;
    height: 70px;
    margin: 30px 0;
    width: 70px;
    @media (min-width: ${p => p.theme.breakpoints.small}) {
      height: 100%;
      margin: 0;
      max-height: 140px;
      width: auto;
    }
  }
`

export default podcasts
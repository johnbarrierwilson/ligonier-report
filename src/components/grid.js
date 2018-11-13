import styled from 'styled-components'

const Grid = styled('div')`
  background: ${p => p.theme.colors.white};
  padding: 40px;
  position: relative;
  transition: transform 500ms cubic-bezier(.55,0,.1,1), opacity 500ms cubic-bezier(.55,0,.1,1);
  z-index: ${p => p.theme.index.grid};
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    padding: 50px 25vw;
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    display: grid;
    grid-template-columns: 90px repeat(12, 1fr) 90px;
    grid-template-rows: 90px repeat(11, 1fr);
    height: 100vh;
    max-height: 75vw;
    min-height: 1000px;
    overflow: hidden;
    padding: 0;
  }
`

export default Grid

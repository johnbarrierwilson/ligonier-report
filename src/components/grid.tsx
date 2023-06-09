import styled from 'styled-components'

interface GridProps {
  name?: string
}

const Grid = styled.div<GridProps>`
  background: ${(p) => p.theme.colors.white};
  padding: 40px;
  position: relative;
  transition: transform 500ms cubic-bezier(0.55, 0, 0.1, 1),
    opacity 500ms cubic-bezier(0.55, 0, 0.1, 1);
  z-index: ${(p) => p.theme.index.grid};
  @media (min-width: ${(p) => p.theme.breakpoints.small}) {
    padding: 50px 25vw;
  }
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-columns: 90px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 90px;
    -ms-grid-rows: 90px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    display: -ms-grid;
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

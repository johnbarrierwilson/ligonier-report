import React from 'react'
import styled from 'styled-components'

interface NumbersProps {
  description?: string
  number: string
  readonly column: string
  readonly row: string
  readonly transform?: string
}

const Numbers: React.FC<NumbersProps> = (props) => (
  <Container {...props}>
    <Title>
      <span>By The</span>
      <span>Numbers</span>
    </Title>
    <Number>{props.number}</Number>
    <Description>
      {props.description ? props.description : props.children}
    </Description>
  </Container>
)

const Container = styled.div<NumbersProps>`
  -ms-grid-columns: 1fr 1fr;
  -ms-grid-rows: 1fr 1fr 1fr;
  border-bottom: 1px solid ${(p) => p.theme.colors.black};
  border-top: 1px solid ${(p) => p.theme.colors.black};
  display: -ms-grid;
  display: grid;
  font-family: 'Whitney SSm A', 'Whitney SSm B', Arial, Helvetica, sans-serif;
  font-size: 0.6rem;
  font-weight: 600;
  grid-gap: 0.5rem;
  grid-row: ${(p) => p.row[0]};
  grid-template: 1fr 1fr 1fr / 1fr;
  letter-spacing: 0.5em;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  z-index: ${(p) => p.theme.index.numbers};
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-column: ${(p) => p.column.split(' ')[0]};
    -ms-grid-column-span: ${(p) => p.column.split(' ')[3]};
    -ms-grid-row: ${(p) => p.row.split(' ')[0]};
    -ms-grid-row-span: ${(p) => p.column.split(' ')[3]};
    align-self: center;
    grid-column: ${(p) => p.column};
    grid-row: ${(p) => p.row};
    grid-template: 1fr 1fr / 7rem 1fr;
    max-width: 700px;
    transform: ${(p) => (p.transform ? p.transform : 'none')};
  }
`

const Title = styled.div`
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  -ms-grid-row: 1;
  -ms-grid-row-span: 1;
  align-items: center;
  border-bottom: 1px solid ${(p) => p.theme.colors.black};
  display: flex;
  flex-direction: row;
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  justify-content: center;
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    border-right: 1px solid ${(p) => p.theme.colors.black};
    border-bottom: none;
    flex-direction: column;
    grid-row: 1 / span 2;
    justify-content: space-around;
    margin: 10px 0;
    padding: 1rem 0 1.4rem;
  }
  span {
    margin: 0 5px;
    @media (min-width: ${(p) => p.theme.breakpoints.large}) {
      border-bottom: 1px solid ${(p) => p.theme.colors.black};
      margin: 0;
      padding: 5px 0;
    }
  }
`

const Number = styled.div`
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  align-items: center;
  display: flex;
  font-family: 'Chronicle Cond A', 'Chronicle Cond B', Georgia,
    'Times New Roman', Times, serif;
  font-size: 2rem;
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  justify-content: center;
  letter-spacing: 0;
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    padding-top: 0.5rem;
  }
`

const Description = styled.div`
  align-items: center;
  border-top: 1px solid ${(p) => p.theme.colors.black};
  display: flex;
  flex-flow: row wrap;
  grid-column: 1 / span 1;
  grid-row: 3 / span 1;
  height: 4rem;
  justify-content: center;
  line-height: 2;
  padding: 0.75rem 0;
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    -ms-grid-row: 2;
    -ms-grid-row-span: 2;
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    padding: 0.75rem 2rem;
  }
`

export default Numbers

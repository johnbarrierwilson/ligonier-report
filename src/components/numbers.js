import React from 'react'
import styled from 'styled-components'

const Numbers = (props) => (
  <Container {...props}>
    <Title><span>By The</span><span>Numbers</span></Title>
    <Number>{props.number}</Number>
    <Description>{props.description}</Description>
  </Container>
)

const Container = styled('div')`
  border-bottom: 1px solid ${p => p.theme.colors.black};
  border-top: 1px solid ${p => p.theme.colors.black};
  display: grid;
  font-family: "Whitney SSm A", "Whitney SSm B", Arial, Helvetica, sans-serif;
  font-size: 0.6rem;
  font-weight: 600;
  grid-gap: 0.5rem;
  grid-row: ${p => p.row[0]};
  grid-template: 1fr 1fr 1fr / 1fr;
  letter-spacing: 0.5em;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  z-index: ${p => p.theme.index.numbers};
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    align-self: center;
    grid-column: ${p => p.column[2]};
    grid-row: ${p => p.row[2]};
    grid-template: 1fr 1fr / 7rem 1fr;
    transform: ${p => p.transform ? p.transform : 'none'};
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: ${p => p.column[3]};
    grid-row: ${p => p.row[3]};
  }
`

const Title = styled('div')`
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.colors.black};
  display: flex;
  flex-direction: row;
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  justify-content: center;
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    border-right: 1px solid ${p => p.theme.colors.black};
    border-bottom: none;
    flex-direction: column;
    grid-row: 1 / span 2;
    justify-content: space-around;
    margin: 10px 0;
    padding: 1rem 0 1.4rem;
  }
  span {
    margin: 0 5px;
    @media (min-width: ${p => p.theme.breakpoints.medium}) {
      border-bottom: 1px solid ${p => p.theme.colors.black};
      margin: 0;
      padding: 5px 0;
    } 
  }
`

const Number = styled('div')`
  align-items: center;
  display: flex;
  font-family: "Chronicle Cond A", "Chronicle Cond B", Georgia, 'Times New Roman', Times, serif;
  font-size: 30px;
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  justify-content: center;
  letter-spacing: 0;
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    padding-top: 0.5rem;
  }
`

const Description = styled('div')`
  align-items: center;
  border-top: 1px solid ${p => p.theme.colors.black};
  display: flex;
  grid-column: 1 / span 1;
  grid-row: 3 / span 1;
  height: 4rem;
  justify-content: center;
  line-height: 2;
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    padding: 0 2rem;
  }
`

export default Numbers
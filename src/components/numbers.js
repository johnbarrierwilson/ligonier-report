import React from 'react'
import styled from 'styled-components'

const Numbers = (props) => (
  <Container {...props}>
    <Title><span>By The</span><span>Numbers</span></Title>
    <Number>145,000+</Number>
    <Description>REFORMATION STUDY BIBLES DISTRIBUTED SINCE 2015</Description>
  </Container>
)

const Container = styled('div')`
  align-self: center;
  border-bottom: 1px solid ${p => p.theme.colors.black};
  border-top: 1px solid ${p => p.theme.colors.black};
  display: grid;
  font-family: "Whitney SSm A", "Whitney SSm B", Arial, Helvetica, sans-serif;
  font-size: 0.6rem;
  font-weight: 600;
  grid-column: ${p => p.column[0]};
  grid-gap: 0.5rem;
  grid-row: ${p => p.row[0]};
  grid-template: 1fr 1fr / 1fr 3fr;
  letter-spacing: 0.5em;
  text-align: center;
  text-transform: uppercase;
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    grid-column: ${p => p.column[1]};
    grid-row: ${p => p.row[1]};
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

const Title = styled('div')`
  align-items: center;
  border-right: 1px solid ${p => p.theme.colors.black};
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  justify-content: space-around;
  margin: 10px 0;
  padding: 1rem 0 1.4rem;
  span {
    border-bottom: 1px solid ${p => p.theme.colors.black};
    padding: 5px 0;
  }
`

const Number = styled('div')`
  align-items: center;
  display: flex;
  font-family: "Chronicle Cond A", "Chronicle Cond B", Georgia, 'Times New Roman', Times, serif;
  font-size: 30px;
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  justify-content: center;
  letter-spacing: 0;
  padding-top: 0.5rem;
`

const Description = styled('div')`
  align-items: center;
  border-top: 1px solid ${p => p.theme.colors.black};
  display: flex;
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  justify-content: center;
  line-height: 2;
  padding: 0.75rem 1rem;
`

export default Numbers
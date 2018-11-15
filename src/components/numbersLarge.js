import React from 'react'
import styled, { css } from 'styled-components'

const Numbers = (props) => (
  <Container {...props}>
    <Title>By The Numbers</Title>
    <Number>{props.number1}</Number>
    <Description>{props.description1}</Description>
    <Number right={true}>{props.number2}</Number>
    <Description right={true}>{props.description2}</Description>
  </Container>
)

const Container = styled('div')`
  border-bottom: 1px solid ${p => p.theme.colors.black};
  border-top: 1px solid ${p => p.theme.colors.black};
  display: grid;
  font-family: "Whitney SSm A", "Whitney SSm B", Arial, Helvetica, sans-serif;
  font-size: 0.6rem;
  font-weight: 600;
  grid-template: 1fr 1fr 1fr / 1fr 1fr;
  letter-spacing: 0.5em;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  z-index: ${p => p.theme.index.numbers};
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    align-self: center;
    grid-column: ${p => p.column};
    grid-row: ${p => p.row};
    height: 100%;
    transform: ${p => p.transform ? p.transform : 'none'};
  }
`

const Title = styled('div')`
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.colors.black};
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  justify-content: space-around;
  span {
    border-bottom: 1px solid ${p => p.theme.colors.black};
  }
`

const Number = styled('div')`
  align-items: center;
  display: flex;
  font-family: "Chronicle Cond A", "Chronicle Cond B", Georgia, 'Times New Roman', Times, serif;
  font-size: 30px;
  grid-column: ${p => p.right ? '2 / span 1' : '1 / span 1'};
  grid-row: 2 / span 1;
  justify-content: center;
  letter-spacing: 0;

  ${p => p.right ? css`
    border-left: 1px solid ${p.theme.colors.black};
  ` : null}
`

const Description = styled('div')`
  align-items: center;
  border-top: 1px solid ${p => p.theme.colors.black};
  display: flex;
  grid-column: ${p => p.right ? '2 / span 1' : '1 / span 1'};
  grid-row: 3 / span 1;
  justify-content: center;
  padding: 1rem;
  line-height: 2;
  
  ${p => p.right ? css`
    border-left: 1px solid ${p.theme.colors.black};
  ` : null}
`

export default Numbers
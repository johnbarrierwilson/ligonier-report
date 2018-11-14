import React from 'react'
import styled from 'styled-components'

const NotFoundPage = () => (
  <Container>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
    <a href="/">Return</a>
  </Container>
)

const Container = styled('div')`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  justify-content: center;
  text-align: center;
  width: 100%;
`

export default NotFoundPage

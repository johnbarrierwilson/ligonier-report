import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Heading>Ministry Report</Heading>
  </Layout>
)

const Heading = styled('h1')`
  color: ${p => p.theme.colors.white}
`

export default IndexPage
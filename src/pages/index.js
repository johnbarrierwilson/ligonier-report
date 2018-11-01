import React from 'react'

import Layout from '../components/layout'

import Fellows from'./teaching-fellows'
import Introduction from './introduction'
import IntroductionRead from './introduction-read'
import PresidentLetter from './president-letter'

const IndexPage = () => (
  <Layout>
    <Introduction />
    <Fellows />
    <PresidentLetter />
    <IntroductionRead />
  </Layout>
)

export default IndexPage
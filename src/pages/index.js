import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'
import theme from '../theme'

import Fellows from'./teaching-fellows'
import FellowSinclair from './fellow-sinclair'
import Introduction from './introduction'
import IntroductionRead from './introduction-read'
import PresidentLetter from './president-letter'
import Read01 from './read-01'
import StoryXavier from './story-xavier'

const IndexPage = () => (
  <ThemeProvider theme={theme} >
    <Layout>
      <Introduction />
      <Fellows />
      <PresidentLetter />
      <IntroductionRead />
      <StoryXavier />
      <Read01 />
      <FellowSinclair />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
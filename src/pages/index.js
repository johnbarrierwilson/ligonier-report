import React from 'react'
import { ThemeProvider } from 'styled-components'

import 'normalize.css'

import Layout from '../components/layout'
import theme from '../theme'

import Fellows from'../sections/teaching-fellows'
import FellowSinclair from '../sections/fellow-sinclair'
import Introduction from '../sections/introduction'
import IntroductionRead from '../sections/introduction-read'
import PresidentLetter from '../sections/president-letter'
import Read01 from '../sections/read-01'
import StoryXavier from '../sections/story-xavier'

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
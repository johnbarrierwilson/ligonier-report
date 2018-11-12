import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'
import theme from '../theme'

import CoverStart from '../sections/cover-start'
import CoverEnd from '../sections/cover-end'
import FellowGodfrey from '../sections/fellow-godfrey'
import FellowLawson from '../sections/fellow-lawson'
import FellowMohler from '../sections/fellow-mohler'
import FellowNichols from '../sections/fellow-nichols'
import FellowParsons from '../sections/fellow-parsons'
import FellowSinclair from '../sections/fellow-sinclair'
import FellowThomas from '../sections/fellow-thomas'
import Gather01 from '../sections/gather-01'
import Gather02 from '../sections/gather-02'
import Gather03 from '../sections/gather-03'
import Introduction from '../sections/introduction'
import IntroductionGather from '../sections/introduction-gather'
import IntroductionListen from '../sections/introduction-listen'
import IntroductionRead from '../sections/introduction-read'
import Listen01 from '../sections/listen-01'
import Listen02 from '../sections/listen-02'
import Listen03 from '../sections/listen-03'
import PresidentLetter from '../sections/president-letter'
import Read01 from '../sections/read-01'
import Read02 from '../sections/read-02'
import Read03 from '../sections/read-03'
import Read04 from '../sections/read-04'
import Read05 from '../sections/read-05'
import StoryAmy from '../sections/story-amy'
import StoryDoug from '../sections/story-doug'
import StoryXavier from '../sections/story-xavier'
import TeachingFellows from'../sections/teaching-fellows'

const IndexPage = () => (
  <ThemeProvider theme={theme} >
    <Layout>
      <CoverStart />
      {/* <Introduction />
      <TeachingFellows />
      <PresidentLetter />
      <IntroductionRead />
      <StoryXavier />
      <Read01 />
      <FellowSinclair />
      <Read02 />
      <Read03 />
      <Read04 />
      <FellowGodfrey />
      <Read05 />
      <FellowLawson />
      <IntroductionListen />
      <StoryAmy />
      <Listen01 />
      <FellowMohler />
      <Listen02 />
      <FellowNichols />
      <Listen03 />
      <IntroductionGather />
      <StoryDoug />
      <Gather01 />
      <FellowParsons />
      <Gather02 />
      <FellowThomas />
      <Gather03 />
      <CoverEnd /> */}
    </Layout>
  </ThemeProvider>
)

export default IndexPage
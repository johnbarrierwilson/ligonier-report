import React from 'react'
import { ThemeProvider } from 'styled-components'

import 'normalize.css'

import Layout from '../components/layout'
import theme from '../theme'

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
      <Introduction id="introduction" />
      <TeachingFellows id="teachingfellows" />
      <PresidentLetter id="presidentletter" />
      <IntroductionRead id="introductionread" />
      <StoryXavier id="storyxavier" />
      <Read01 id="read01" />
      <FellowSinclair id="fellowsinclair" />
      <Read02 id="read02" />
      <Read03 id="read03" />
      <Read04 id="read04" />
      <FellowGodfrey id="fellowgodfrey" />
      <Read05 id="read05" />
      <FellowLawson id="fellowlawson" />
      <IntroductionListen id="introductionlisten" />
      <StoryAmy id="storyamy" />
      <Listen01 id="listen01" />
      <FellowMohler id="fellowmohler" />
      <Listen02 id="listen02" />
      <FellowNichols id="fellownichols" />
      <Listen03 id="listen03" />
      <IntroductionGather id="introductiongather" />
      <StoryDoug id="storydoug" />
      <Gather01 id="gather01" />
      <FellowParsons id="fellowparsons" />
      <Gather02 id="gather02" />
      <FellowThomas id="fellowthomas" />
      <Gather03 id="gather03" />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
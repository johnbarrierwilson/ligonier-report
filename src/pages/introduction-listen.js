import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import DocumentTitle from '../components/documentTitle'
import Heading from '../components/heading'
import Image from '../components/image'
import Layout from '../components/layout'
import LeftSidebar from '../components/leftSidebar'
import Logo from '../components/logo'
import NavigateLeft from '../components/navigateLeft'
import NavigateRight from '../components/navigateRight'
import RightSidebar from '../components/rightSidebar'

import IntroductionPattern from '../images/IntroductionPattern.png'
import IntroductionListen from '../images/IntroductionListen.png'

const IndexPage = () => (
  <Layout>
    <Backdrop />
    <Logo />
    <DocumentTitle />
    <LeftSidebar text='Part Two / Listen' />
    <RightSidebar status={2} />
    <NavigateLeft to="/fellow-lawson" />
    <NavigateRight to="/story-amy" />
    <Heading
      column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
      row={['4 / span 1', '4 / span 1', '4 / span 1', '4 / span 1']}
      size="xl"
      text="Listen"
    />
    <Content
      column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
      row={['8 / span 3', '8 / span 3', '8 / span 3', '8 / span 3']}
    >
      <p><strong>Faith comes by hearing.</strong> Every week, Ligonier Ministries broadcasts audio and video teaching on the air and on the web to millions of people, free of charge. Trustworthy, life-changing teaching from Dr. R.C. Sproul, the Ligonier Ministries Teaching Fellows, and many others is available to you 24/7. Thank you for tuning in.</p>
    </Content>
    <Image
      column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
      row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
      size="contain"
      src={IntroductionListen}
    />
  </Layout>
)

const Backdrop = styled('div')`
  background: #efeded;
  background-image: url(${IntroductionPattern});
  background-size: 500px 500px;
  grid-column: 1 / span 14;
  grid-row: 1 / span 12;
`

export default IndexPage
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
import IntroductionGather from '../images/IntroductionGather.png'

const IndexPage = () => (
  <Layout>
    <Backdrop />
    <Logo />
    <DocumentTitle />
    <LeftSidebar text='Part Three / Gather' />
    <RightSidebar status={3} />
    <NavigateLeft to="/listen-03" />
    <NavigateRight to="/story-doug" />
    <Heading
      column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
      row={['4 / span 1', '4 / span 1', '4 / span 1', '4 / span 1']}
      size="xl"
      text="Gather"
    />
    <Content
      column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
      row={['8 / span 3', '8 / span 3', '8 / span 3', '8 / span 3']}
    >
      <p><strong>Iron sharpens iron.</strong> Every year, in cities around the world and online, Ligonier Ministries gathers Christians at events to study God’s Word for mutual edification. It’s a privilege to meet, serve, and learn from God’s people. Our aim is to bless the local church and strengthen its members for greater service. Thank you for joining us.</p>
    </Content>
    <Image
      column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
      row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
      size="contain"
      src={IntroductionGather}
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
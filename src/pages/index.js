import React from 'react'

import Content from '../components/content'
import Heading from '../components/heading'
import Image from '../components/image'
import Layout from '../components/layout'
import Logo from '../components/logo'
import NavigateRight from '../components/navigateRight'
import RightSidebar from '../components/rightSidebar'

import Piece01 from '../images/piece_01.png'
import Piece02 from '../images/piece_02.png'
import Piece03 from '../images/piece_03.png'

const IndexPage = () => (
  <Layout>
    <Logo />
    <RightSidebar status={0} />
    <NavigateRight to="/teaching-fellows" />
    <Image
      column='1 / span 3'
      row='4 / span 4'
      src={Piece01}
    />
    <Image
      column='10 / span 3'
      row='1 / span 4'
      src={Piece02}
    />
    <Image
      column='4 / span 4'
      row='11 / span 2'
      src={Piece03}
    />
    <Heading
      column='2 / span 3'
      row='3 / span 1'
      size="xl"
      text='Read'
    />
    <Content
      column='4 / span 2'
      row='5 / span 5'
    >
      <p><strong>In 1957, Dr. R.C. Sproul</strong> was confronted by the overwhelming holiness of God. That experience began a lifetime of pursuing a greater knowledge of God and birthed an unquenchable desire to lead others into a greater understanding of God and of themselves.</p>
      <p>Over fifty years later, we are humbled to survey the vast army of supporters that has risen to enable such important work. Thanks to you, the deep truths of God’s Word are finding their way into more places than ever before, and lives are being transformed by a growing knowledge of God.</p>
    </Content>
    <Heading
      column='10 / span 4'
      row='5 / span 1'
      size="xl"
      text='Listen'
    />
    <Content
      column='10 / span 2'
      row='7 / span 5'
    >
      <p><strong>Every year</strong>, Ligonier Ministries provides more ways for Christians to read, listen, and gather around God's truth.</p>
      <p>Under God’s blessing, the outreach we’ve been able to do together has continued to grow, This report is a celebration of all that you’ve enabled through your generosity and your prayers.</p>
    </Content>
    <Heading
      column='7 / span 2'
      row='11 / span 1'
      size="xl"
      text='Gather'
    />
  </Layout>
)

export default IndexPage
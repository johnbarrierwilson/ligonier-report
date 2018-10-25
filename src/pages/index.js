import React from 'react'

import Content from '../components/content'
import DocumentTitle from '../components/documentTitle'
import Heading from '../components/heading'
import Image from '../components/image'
import Label from '../components/label'
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
    <DocumentTitle />
    <RightSidebar status={0} />
    <NavigateRight to="/teaching-fellows" />
    <Image
      column='1 / span 3'
      row='4 / span 6'
      position='top right'
      size='495px 446px'
      src={Piece01}
      transform='translate(-90px, -35px)'
    />
    <Image
      column='9 / span 6'
      row='1 / span 3'
      position='bottom left'
      size='495px 369px'
      src={Piece02}
    />
    <Image
      column='3 / span 6'
      row='10 / span 3'
      position='top center'
      size='468px 414px'
      src={Piece03}
      transform='translate(15px, 35px)'
    />
    <Heading
      column='2 / span 3'
      row='3 / span 1'
      size="xl"
      text='Read'
    />
    <Label
      column='1 / span 5'
      row='2 / span 1'
    >
      <span>God revealed Himself in a book</span>
    </Label>
    <Content
      column='4 / span 2'
      row='5 / span 5'
    >
      <p><strong>In 1957, Dr. R.C. Sproul</strong> was confronted by the overwhelming holiness of God. That experience began a lifetime of pursuing a greater knowledge of God and birthed an unquenchable desire to lead others into a greater understanding of God and of themselves.</p>
      <p>Over fifty years later, we are humbled to survey the vast army of supporters that has risen to enable such important work. Thanks to you, the deep truths of God’s Word are finding their way into more places than ever before, and lives are being transformed by a growing knowledge of&nbsp;God.</p>
    </Content>
    <Heading
      column='10 / span 4'
      row='5 / span 1'
      size="xl"
      text='Listen'
    />
    <Label
      column='9 / span 5'
      row='6 / span 1'
    >
      <span>Faith comes by hearing</span>
    </Label>
    <Content
      column='10 / span 2'
      row='8 / span 5'
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
    <Label
      column='2 / span 4'
      row='9 / span 2'
    >
      <span>Iron sharpens iron</span>
    </Label>
  </Layout>
)

export default IndexPage
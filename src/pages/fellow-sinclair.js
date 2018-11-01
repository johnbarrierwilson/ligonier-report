import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import DocumentTitle from '../components/documentTitle'
import Heading from '../components/heading'
import Image from '../components/image'
import Layout from '../components/layout'
import LeftSidebar from '../components/leftSidebar'
import Logo from '../components/logo'
import NavigateLeft from '../components/navigateLeft'
import NavigateRight from '../components/navigateRight'
import RightSidebar from '../components/rightSidebar'
import Subject from '../components/subject'

import Sinclair from "../images/FellowFerguson.jpg"

const IndexPage = () => (
  <Layout inverted={true}>
    <Backdrop />
    <Logo inverted={true} />
    <DocumentTitle inverted={true} />
    <LeftSidebar inverted={true} text='Teaching Fellows / Ferguson' />
    <RightSidebar inverted={true} status={0} />
    <NavigateLeft inverted={true} to="/read-01" />
    <NavigateRight inverted={true} to="/read-02" />
    <Image
      column={['4 / span 3', '4 / span 3', '4 / span 3', '4 / span 3']}
      position="center 20%"
      row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
      src={Sinclair}
    />
    <Heading
      column={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      inverted={true}
      row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
      size="s"
      text='“What was central to R.C., and what is central to Ligonier, is the message and the burden of the Holiness of God, the Glory of God, and the Honor of God.”'
    />
    <Subject
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      inverted={true}
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
    >
      Teaching Fellow
    </Subject>
    <Divider
      column={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
      inverted={true}
      row={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
    />
    <Heading
      column={['10 / span 1', '10 / span 1', '10 / span 1', '10 / span 1']}
      inverted={true}
      row={['4 / span 1', '4 / span 1', '4 / span 1', '4 / span 1']}
      text='Sinclair Ferguson'
    />
    <Content
      column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
      inverted={true}
      row={['7 / span 4', '7 / span 4', '7 / span 4', '7 / span 4']}
    >
      <p><strong>Dr. Sinclair B. Ferguson</strong> is one of the most well-respected Reformed theologians in the world today. He taught systematic theology at Westminster Theological Seminary in Philadelphia for many years, and he has also taught at other Reformed seminaries. He served as pastor of St. George’s Tron Church in Glasgow, Scotland, from 1998 to 2003 and of First Presbyterian Church in Columbia, S.C., from 2005 until his retirement in 2013. Dr. Ferguson was a longtime friend of Dr. R.C. Sproul and has been a regular speaker at Ligonier conferences and events over the years.</p>
      <p>Dr. Ferguson began serving at Ligonier Ministries as a teaching fellow in 2010. He has a rare ability to present the truths of the Christian faith clearly and winsomely. He has written numerous books, including The Whole Christ, In Christ Alone, Devoted to God, and Some Pastors and Teachers. He has also recorded several video teaching series with Ligonier. Dr. Ferguson, having now retired to his native Scotland, continues to write and speak.</p>
    </Content>
  </Layout>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.teal};
  grid-column: 1 / span 14;
  grid-row: 1 / span 12;
`

export default IndexPage
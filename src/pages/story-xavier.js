import React from 'react'
import styled from 'styled-components'

import Blockquote from '../components/blockquote'
import Content from '../components/content'
import Divider from '../components/divider'
import DocumentTitle from '../components/documentTitle'
import Heading from '../components/heading'
import Image from '../components/image'
import Subject from '../components/subject'
import Layout from '../components/layout'
import LeftSidebar from '../components/leftSidebar'
import Logo from '../components/logo'
import NavigateLeft from '../components/navigateLeft'
import NavigateRight from '../components/navigateRight'
import RightSidebar from '../components/rightSidebar'

import Xavier from '../images/StoryXavier.jpg'

const IndexPage = () => (
  <Layout>
    <Backdrop />
    <Logo />
    <DocumentTitle />
    <LeftSidebar text='Part One / Read' />
    <RightSidebar status={1} />
    <NavigateLeft to="/introduction-read" />
    <NavigateRight to="/read-01" />
    <Subject
      column={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
    >
      Testimony
    </Subject>
    <Divider
      column={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
      row={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
    />
    <Image
      column={['3 / span 3', '3 / span 3', '3 / span 3', '3 / span 3']}
      position="center 20%"
      row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
      src={Xavier}
    />
    <Heading
      center={true}
      column={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      row={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
      text="Xavier, San&nbsp;Francisco"
    />
    <Blockquote
      column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
      row={['3 / span 3', '3 / span 3', '3 / span 3', '3 / span 3']}
    >
      <p>“Shortly after I became a Christian, one of my coworkers gave me a copy of Tabletalk and&nbsp;said,</p>
    </Blockquote>
    <Content
      column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
      row={['7 / span 3', '7 / span 3', '7 / span 3', '7 / span 3']}
    >
      <p>‘This might be interesting for you to read.’ It blew me away with the thoughtfulness around the theology and the way the magazine is laid out. It made a real impact on me.</p>
      <p>After a year or two, I became a Ministry Partner and began listening to the monthly messages, as well as Renewing Your Mind. I was just devouring any content that I could at that time.</p>
      <p>Teaching from Ligonier has given me greater dis- cernment in church life and has given me the foun- dation in my faith I needed to start teaching my kids. They ask questions at random times: questions about God, things God created, etc. If I hadn’t learned Reformed theology—reading Tabletalk and listening to Renewing Your Mind—I never would have had a founda- tion in theology to help my kids understand the funda- mental elements of the faith.”</p>
    </Content>
    <Divider
      column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
      row={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
    />
  </Layout>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.gray};
  grid-column: 2 / span 12;
  grid-row: 2 / span 10;
`

export default IndexPage
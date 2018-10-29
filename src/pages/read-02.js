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
// import NavigateRight from '../components/navigateRight'
import RightSidebar from '../components/rightSidebar'
import Subject from '../components/subject'

import Brown from '../images/BibleBrown.jpg'

const IndexPage = () => (
  <Layout>
    <Logo />
    <DocumentTitle />
    <LeftSidebar text='Part One / Read' />
    <RightSidebar status={1} />
    <NavigateLeft to="/fellow-sinclair" />
    {/* <NavigateRight to="/fellow-sinclair" /> */}

    <Subject
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
    >
      Reformation Study Bible
    </Subject>
    <Divider
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
    />
    <Heading
      center={true}
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      text="Deepening Your Study of&nbsp;God's Word"
    />
    <Image
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      position='left center'
      row={['6 / span 6', '6 / span 6', '6 / span 6', '6 / span 6']}
      size="contain"
      src={Brown}
    />
    <Image
      column={['6 / span 4', '6 / span 4', '6 / span 4', '6 / span 4']}
      position='left center'
      row={['1 / span 6', '1 / span 6', '1 / span 6', '1 / span 6']}
      size="contain"
      src={Brown}
    />
    <Image
      column={['6 / span 4', '6 / span 4', '6 / span 4', '6 / span 4']}
      position='left center'
      row={['7 / span 6', '7 / span 6', '7 / span 6', '7 / span 6']}
      size="contain"
      src={Brown}
    />
    <Image
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      position='left center'
      row={['2 / span 6', '2 / span 6', '2 / span 6', '2 / span 6']}
      size="contain"
      src={Brown}
    />
    <Content
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      row={['8 / span 5', '8 / span 5', '8 / span 5', '8 / span 5']}
    >
      <p><strong>The Reformation Study Bible</strong> guides growing Christians through the Word of God with trusted contributions from seventy-five gifted scholars. More than one hundred thousand copies have been distributed since March 2015.</p>
      <p>Dr. R.C. Sproul edited this landmark publication, which contains over 1.1 million words of verse-by-verse commentary. The original edition is packed with insightful articles; topical explanations; historic creeds, confessions, and catechisms; plus award-winning maps and visuals. The newly released Condensed Edition contains the best of this commentary and is designed for life on the go.</p>
      <p>The Reformation Study Bible, available in ESV or NKJV, elevates Scripture on every page and distills timeless theology for twenty-first-century disciples.</p>
    </Content>
  </Layout>
)

export default IndexPage
import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Heading from '../components/heading'
import Image from '../components/image'
import Layout from '../components/layout'
import LeftSidebar from '../components/leftSidebar'
import Logo from '../components/logo'
import NavigateLeft from '../components/navigateLeft'
import NavigateRight from '../components/navigateRight'
import Numbers from '../components/numbers'
import RightSidebar from '../components/rightSidebar'
import Subject from '../components/subject'

import Books from '../images/ReformationTrust.png'
import Reading from '../images/LigonierWeb.jpg'

const IndexPage = () => (
  <Layout>
    <Backdrop />
    <Logo />
    <LeftSidebar text="Part One / Read" />
    <RightSidebar status={1} />
    <NavigateLeft to="/read-03" />
    <NavigateRight to="/fellow-godfrey" />

    <Subject
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
    >
      Reformation Trust
    </Subject>
    <Divider
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
    />
    <Heading
      center={true}
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      text="Proclaiming the Historic Christian Faith"
    />
    <Image
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['5 / span 3', '5 / span 3', '5 / span 3', '5 / span 3']}
      src={Books}
    />
    <Content
      center={true}
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['8 / span 3', '8 / span 3', '8 / span 3', '8 / span 3']}
    >
      <p><strong>The Gospel Legacy</strong> of the Reformers lives on through our publishing im- print, Reformation Trust. Authored by trusted teachers of our own day, such as Dr. R.C. Sproul and the Ligonier Teaching Fellows, these books stand reso- lutely on the Bible and seek to build up believers in their knowledge of God.</p>
      <p>New titles on discipleship, the doctrines of the Reformation, and the his- tory of the church continue to steward the historic Christian faith for future generations. These volumes also fuel our partnerships with international ministries and provide trustworthy teaching for Christians around the world.</p>
    </Content>
    <Numbers
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      description='Physical Resources Given Away in the Past Year'
      number='375,000+'
      row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
    />

    <Image
      column={['7 / span 7', '7 / span 7', '7 / span 7', '7 / span 7']}
      row={['1 / span 5', '1 / span 5', '1 / span 5', '1 / span 5']}
      src={Reading}
    />
    <Subject
      column={['8 / span 5', '8 / span 5', '8 / span 5', '8 / span 5']}
      row={['6 / span 1', '6 / span 1', '6 / span 1', '6 / span 1']}
    >
      Ligonier.org
    </Subject>
    <Divider
      column={['8 / span 5', '8 / span 5', '8 / span 5', '8 / span 5']}
      row={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
    />
    <Heading
      center={true}
      column={['8 / span 4', '8 / span 4', '8 / span 4', '8 / span 4']}
      row={['7 / span 2', '7 / span 2', '7 / span 2', '7 / span 2']}
      text="Supplying Your Most Trusted&nbsp;Bible Teaching"
    />
    <Content
      center={true}
      column={['8 / span 3', '8 / span 3', '8 / span 3', '8 / span 3']}
      row={['8 / span 3', '8 / span 3', '8 / span 3', '8 / span 3']}
    >
      <p><strong><a href="https://ligonier.org">Ligonier.org</a> provides</strong> a spiritual feast for growing Christians. Over eight thousand educational resources, including a vast library of articles, devotionals, and video and audio messages are available to explore. Thanks to you, many of these resources are available for free, reaching millions of people every year.</p>
    </Content>
    <Heading
      column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
      row={['7 / span 3', '7 / span 3', '7 / span 3', '7 / span 3']}
      size="s"
      text='THANKS TO OUR MINISTRY PARTNERS AND GENEROUS DONORS, MANY OF THESE RESOURCES ARE AVAILABLE FOR FREE.'
    />
    <Numbers
      column={['8 / span 6', '8 / span 6', '8 / span 6', '8 / span 6']}
      description='Annual Visits to Ligonier.org'
      number='13,000,000+'
      row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
    />
  </Layout>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.tan};
  grid-column: 1 / span 6;
  grid-row: 1 / span 12;
`

export default IndexPage
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

import Lawson from "../images/FellowLawson.jpg"

const IndexPage = () => (
  <Layout inverted={true}>
    <Backdrop />
    <Logo inverted={true} />
    <DocumentTitle inverted={true} />
    <LeftSidebar inverted={true} text='Teaching Fellows / Lawson' />
    <RightSidebar inverted={true} status={0} />
    <NavigateLeft inverted={true} to="/read-05" />
    <NavigateRight inverted={true} to="/introduction-listen" />

    <Subject
      column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
      inverted={true}
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
    >
      Teaching Fellow
    </Subject>
    <Divider
      column={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      inverted={true}
      row={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
    />
    <Heading
      column={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      inverted={true}
      row={['4 / span 1', '4 / span 1', '4 / span 1', '4 / span 1']}
      text='Steven Lawson'
    />
    <Content
      column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
      inverted={true}
      row={['8 / span 4', '8 / span 4', '8 / span 4', '8 / span 4']}
    >
      <p><strong>Dr. Steven J. Lawson</strong> served as a pastor for thirty-four years in Arkansas and Alabama, and he was most recently senior pastor of Christ Fellowship Baptist Church in Mobile, Ala. Dr. Lawson founded OnePassion Ministries to equip pastors to exposit the Word of God faithfully. To that end, he travels around the world to speak at conferences and to lead The Institute for Expository Preaching, a three-day seminar in biblical exposition. He is also editor of Expositor magazine, and he oversees the doctor of ministry program at The Master’s Seminary in Sun Valley, Calif. Dr. Lawson was a student of Dr. R.C. Sproul at Reformed Theological Seminary, and he has taught at Ligonier conferences and events for many years.</p>
      <p>Dr. Lawson began serving at Ligonier Ministries as a teaching fellow in 2010. He preaches with an uncommon zeal for God’s glory and for the cen- tral tenets of Reformed theology. He is author of numerous books, including The Moment of Truth, and has recorded several video teaching series with Ligonier. He also serves as editor of the Long Line of Godly Men Profile series from Reformation Trust Publishing.</p>
    </Content>

    <Image
      column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
      position="center 20%"
      row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
      src={Lawson}
    />
    <Heading
      column={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
      inverted={true}
      row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
      size="s"
      text='“THE MISSION OF LIGONIER IS A GOD&#8209;CENTERED, GOD&#8209;EXALTING MISSION. IT DEALS WITH MATTERS OF THE HIGHEST IMPORTANCE.
      IT’S ALL ABOUT SPREADING THE KNOWLEDGE OF THE HOLINESS OF GOD AROUND THE WORLD.”'
    />
  </Layout>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.teal};
  grid-column: 1 / span 14;
  grid-row: 1 / span 12;
`

export default IndexPage
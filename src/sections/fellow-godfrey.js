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

import Godfrey from "../images/FellowGodfrey.jpg"

const IndexPage = () => (
  <Layout inverted={true}>
    <Backdrop />
    <Logo inverted={true} />
    <DocumentTitle inverted={true} />
    <LeftSidebar inverted={true} text='Teaching Fellows / Godfrey' />
    <RightSidebar inverted={true} status={0} />
    <NavigateLeft inverted={true} to="/read-04" />
    <NavigateRight inverted={true} to="/read-05" />

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
      text='W.&nbsp;Robert Godfrey'
    />
    <Content
      column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
      inverted={true}
      row={['8 / span 4', '8 / span 4', '8 / span 4', '8 / span 4']}
    >
      <p><strong>Dr. W. Robert Godfrey</strong> served as president of Westminster Seminary California in Escondido, Calif., from 1993 to 2017, and he taught church history there as well for many years. He has also taught at many other seminaries throughout a distinguished academic teaching career. Dr. Godfrey first heard about Dr. R.C. Sproul when he was a student in seminary. Many years later, Dr. Godfrey became a regular speaker at Ligonier conferences and events, and he developed a friendship with Dr. Sproul.</p>
      <p>Dr. Godfrey began serving at Ligonier Ministries as a teaching fellow in 2010, and he is chairman of Ligonier’s board of directors. As a careful histo- rian and committed churchman, Dr. Godfrey brings tremendous wisdom to our cultural moment as Ligonier seeks to serve the people of God. He has recorded a six-part Ligonier teaching series called A Survey of Church History, and his many books include God’s Pattern for Creation, Reformation Sketches, An Unexpected Journey, and Learning to Love the Psalms. Dr. Godfrey continues to speak and write, and he is president emeritus and professor emeritus of church history at Westminster Seminary California.</p>
    </Content>

    <Image
      column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
      position="center 20%"
      row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
      src={Godfrey}
    />
    <Heading
      column={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
      inverted={true}
      row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
      size="s"
      text='“IT IS SO EXCITING TO SEE THAT THROUGH LIGONIER, FAITHFUL BIBLE TEACHING IS ABLE TO REACH MILLIONS OF PEOPLE AROUND THE WORLD AND INCREASINGLY TO REACH PEOPLE IN LANGUAGES OTHER THAN ENGLISH.”'
    />
  </Layout>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.teal};
  grid-column: 1 / span 14;
  grid-row: 1 / span 12;
`

export default IndexPage
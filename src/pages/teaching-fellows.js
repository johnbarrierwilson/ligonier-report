import React from 'react'

import Content from '../components/content'
import Divider from '../components/divider'
import DocumentTitle from '../components/documentTitle'
import Heading from '../components/heading'
import Image from '../components/image'
import Layout from '../components/layout'
import LeftSidebar from '../components/leftSidebar'
import Logo from '../components/logo'
import NavigateLeft from '../components/navigateLeft'
import RightSidebar from '../components/rightSidebar'

import TeachingFellowsImage from "../images/2018_TF_Group_Wide_RGB.jpg"

const IndexPage = () => (
  <Layout type="tf">
    <Logo inverted={true} />
    <DocumentTitle inverted={true} />
    <LeftSidebar inverted={true} text='The Ligonier Teaching Fellows' />
    <RightSidebar inverted={true} status={0} />
    <NavigateLeft to="/" />
    <Image
      column='2 / span 12'
      row='2 / span 8'
      src={TeachingFellowsImage}
    />
    <Heading
      column='2 / span 6'
      inverted={true}
      row='11 / span 1'
      text='The Ligonier Teaching Fellows'
    />
    <Divider
      column='2 / span 2'
      inverted={true}
      row='12 / span 1'
    />
    <Content
      column='10 / span 4'
      inverted={true}
      row='11 / span 2'
    >
      <strong>The Teaching Fellows</strong> bring unique gifts and broad experience to Ligonier Ministries. They help us remain true to our founding purpose and inform our future outreach. Dr. R.C. Sproul and the board gathered this team of men to aid in present and future ministry. Trusting God for biblical and theological fidelity, we are grateful for this group of gifted&nbsp;teachers.
    </Content>
  </Layout>
)

export default IndexPage
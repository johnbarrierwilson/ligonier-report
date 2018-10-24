import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import DocumentTitle from '../components/documentTitle'
import Layout from '../components/layout'
import LeftSidebar from '../components/leftSidebar'
import Logo from '../components/logo'
import Heading from '../components/heading'
import RightSidebar from '../components/rightSidebar'

import TeachingFellowsImage from "../images/2018_TF_Group_Wide_RGB.jpg"

const IndexPage = () => (
  <Layout>
    <Logo />
    <DocumentTitle />
    <LeftSidebar text='The Ligonier Teaching Fellows' />
    <RightSidebar />
    <TeachingFellows image={TeachingFellowsImage} />
    <Heading text='The Ligonier Teaching Fellows' />
    <Divider />
    <Content>
      <strong>The Teaching Fellows</strong> bring unique gifts and broad experience to Ligonier Ministries. They help us remain true to our founding purpose and inform our future outreach. Dr. R.C. Sproul and the board gathered this team of men to aid in present and future ministry. Trusting God for biblical and theological fidelity, we are grateful for this group of gifted&nbsp;teachers.
    </Content>
  </Layout>
)

const Divider = styled('hr')`
  border: none;
  border-top: 1px solid ${p => p.theme.colors.white};
  margin: 0;
  grid-column: 2 / span 2;
  grid-row: 12 / span 1;
  width: 100px;
`

const TeachingFellows = styled('div')`
  background: ${p => p.theme.colors.black};
  background-image: url(${p => p.image});
  background-position: center 20%;
  background-size: cover;
  filter: saturate(65%);
  grid-column: 2 / span 12;
  grid-row: 2 / span 9;
  margin-bottom: 70px;
`

export default IndexPage
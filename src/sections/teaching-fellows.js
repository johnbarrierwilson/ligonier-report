import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'

import TeachingFellowsImage from "../images/2018_TF_Group_Wide_RGB.jpg"

const IndexPage = () => (
  <Grid>
    <Backdrop />
    <Image
      column={['2 / span 12', '2 / span 12', '2 / span 12', '2 / span 12']}
      height='50vh'
      position='center 20%'
      row={['2 / span 1', '2 / span 8', '2 / span 8', '2 / span 8']}
      src={TeachingFellowsImage}
    />
    <Heading
      column={['2 / span 12', '2 / span 6', '2 / span 6', '2 / span 6']}
      inverted={true}
      row={['3 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
      text='The Ligonier Teaching Fellows'
    />
    <Divider
      column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      inverted={true}
      row={['3 / span 2', '12 / span 1', '12 / span 1', '11 / span 2']}
    />
    <Content
      column={['2 / span 12', '10 / span 4', '10 / span 4', '10 / span 4']}
      inverted={true}
      row={['5 / span 1', '10 / span 3', '10 / span 3', '10 / span 3']}
    >
      <strong>The Teaching Fellows</strong> bring unique gifts and broad experience to Ligonier Ministries. They help us remain true to our founding purpose and inform our future outreach. Dr. R.C. Sproul and the board gathered this team of men to aid in present and future ministry. Trusting God for biblical and theological fidelity, we are grateful for this group of gifted&nbsp;teachers.
    </Content>
  </Grid>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.teal};
  grid-column: 1 / span 14;
  grid-row: 1 / span 12;
`

export default IndexPage
import React from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Subject from '../components/subject'

import Nichols from "../images/FellowNichols.jpg"

const IndexPage = () => (
  <LazyLoad>
    <Grid>
      <Backdrop />
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
        text='Stephen J. Nichols'
      />
      <Content
        column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
        inverted={true}
        row={['8 / span 4', '8 / span 4', '8 / span 4', '8 / span 4']}
      >
        <p><strong>Dr. Stephen J. Nichols</strong> serves as president of Reformation Bible College and chief academic officer of Ligonier Ministries. Before being appointed to these positions in 2014, Dr. Nichols taught for seventeen years as a Bible college and seminary professor. He was research professor of Christianity and culture at Lancaster Bible College in Lancaster, Pa., and he has also taught courses at Reformed Theological Seminary and Westminster Theological Seminary in Philadelphia.</p>
        <p>Dr. Nichols began serving Ligonier Ministries as a teaching fellow in 2013. Combining his interest in church history and a love for the Reformed tra- dition, Dr. Nichols has a passion for discipleship. He is author of numerous books, including For Us and for Our Salvation, Peace, and A Time for Confidence. He is coeditor of The Legacy of Luther and Crossway’s Theologians on the Christian Life series.</p>
      </Content>

      <Image
        column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
        position="center 20%"
        row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
        src={Nichols}
      />
      <Heading
        column={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
        inverted={true}
        row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
        size="s"
        text='“WE ARE NOT TRYING TO INVENT ANYTHING NEW OR DO ANYTHING NOVEL. WE ARE SIMPLY TRYING TO PUT THE WORD OF GOD IN FRONT OF PEOPLE SO THAT THEY CAN COME TO KNOW THE GOD OF THE BIBLE.”'
      />
    </Grid>
  </LazyLoad>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.teal};
  grid-column: 1 / span 14;
  grid-row: 1 / span 12;
`

export default IndexPage
import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Subject from '../components/subject'
import Well from '../components/well'

import Mohler from "../images/FellowMohler.jpg"

const IndexPage = () => (
  <Grid name="fellowmohler">
    <Backdrop />
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
      text='Albert Mohler'
    />
    <Well bottom={true}>
      <Image
        column={['4 / span 3', '4 / span 3', '4 / span 3', '4 / span 3']}
        fullWidth={true}
        position="center 20%"
        row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
        src={Mohler}
      />
    </Well>
    <Heading
      column={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      inverted={true}
      row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
      size="s"
      text='“OUR MISSION TOGETHER IS TO PERPETUATE AND TO PRESERVE, AND EVEN TO EXTEND, THE TEACHING MINISTRY SO FAITHFULLY BEGUN BY R.C.&nbsp;SPROUL.”'
    />
    <Content
      column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
      inverted={true}
      row={['7 / span 4', '7 / span 4', '7 / span 4', '7 / span 4']}
    >
      <p><strong>Dr. R. Albert Mohler Jr.</strong> is president and Joseph Emerson Brown Professor of Christian Theology at The Southern Baptist Theological Seminary in Louisville, Ky., where he has served for more than twenty-five years. Dr. Mohler was introduced to Dr. R.C. Sproul through listening to his lectures on cassette tape when he was a teenager, and many years later, Dr. Mohler became a regular speaker at Ligonier conferences and events.</p>
      <p>Dr. Mohler began serving at Ligonier Ministries as a teaching fellow in 2015. As a staunch defender of the biblical worldview, Dr. Mohler leads with thoughtful conviction and presents a faithful Christian witness in our tur- bulent culture. He has been quoted in leading newspapers and has appeared on many national news programs. He is author of many books, including Culture Shift, Atheism Remix, and We Cannot Be Silent. He has also recorded video teaching series with Ligonier called The Lord’s Prayer and Truth and Consequences, and he is host of the daily program The Briefing.</p>
    </Content>
  </Grid>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.teal};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: ${p => p.theme.breakpoints.medium}){
    grid-column: 1 / span 14;
    grid-row: 1 / span 12;
    position: relative;
  }
`

export default IndexPage
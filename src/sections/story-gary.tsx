import React from 'react'
import styled from 'styled-components'

import Blockquote from '../components/blockquote'
import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Numbers from '../components/numbers'
import Subject from '../components/subject'
import Well from '../components/well'

const IndexPage = () => (
  <Grid name="storygary">
    <Backdrop />
    <Subject column="3 / span 1" row="2 / span 2">
      Testimony
    </Subject>
    <Divider column="3 / span 1" row="3 / span 1" />
    <Blockquote column="9 / span 4" indent row="4 / span 3">
      <p>
        “I can't stress enough how grateful I feel to God for letting me find
        this amazing ministry.
      </p>
    </Blockquote>
    <Content column="10 / span 3" row="7 / span 2">
      <p>
        I'm a missionary to Haiti, and to keep learning from Scripture is vital
        for me. I downloaded all of the study guides because I really want to
        learn as much as I can. My relationship with God is improving as I get
        deeper into the Scripture, and I love it.”
      </p>
    </Content>
    <Well>
      <Heading column="10 / span 2" row="9 / span 1">
        Gary,
        <br />
        <em>Haiti</em>
      </Heading>
      <Divider column="12 / span 3" row="10 / span 2" />
    </Well>
    <Well>
      <Content column="3 / span 3" row="3 / span 6">
        <p>
          During 2020’s stay-at-home orders, more Christians than ever turned
          online for trustworthy teaching to help them grow in their faith. This
          presented an opportunity to support growing believers with the digital
          study guides that accompany many of Ligonier’s teaching series. Each
          study guide helps students solidify their learning through lesson
          outlines, relevant Scripture readings, study questions, and more.
        </p>

        <p>
          As many more people watched Ligonier’s video teaching content, your
          support made it possible to provide all of our digital study guides
          for free. The interest surged, and more than 660,000 free study guides
          were downloaded, helping many people take their Bible study even
          deeper.
        </p>
      </Content>
    </Well>
    <Numbers column="3 / span 3" number="662,500" row="8 / span 2">
      Study guides downloaded
    </Numbers>
  </Grid>
)

const Backdrop = styled.div`
  background: ${(p) => p.theme.colors.gray};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-column: 2;
    -ms-grid-column-span: 12;
    -ms-grid-row: 2;
    -ms-grid-row-span: 10;
    grid-column: 2 / span 12;
    grid-row: 2 / span 10;
  }
`

export default IndexPage

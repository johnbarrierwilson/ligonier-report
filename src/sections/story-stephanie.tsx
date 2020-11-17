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
  <Grid name="storystephanie">
    <Backdrop />
    <Subject column="3 / span 1" row="2 / span 2">
      Testimony
    </Subject>
    <Divider column="3 / span 1" row="3 / span 1" />
    <Blockquote column="9 / span 4" indent row="3 / span 3">
      <p>
        “By opening your teaching series, what would have been a mental struggle
        for me has turned into delving into the Word of the Lord.
      </p>
    </Blockquote>
    <Content column="10 / span 3" row="8 / span 1">
      <p>
        I have learned so much and have grown closer to the Lord in unbelievable
        ways! Thank you so much.”
      </p>
    </Content>
    <Well>
      <Heading column="10 / span 2" row="9 / span 1">
        Stephanie,
        <br />
        <em>South Afria</em>
      </Heading>
      <Divider column="12 / span 3" row="10 / span 2" />
    </Well>
    <Well>
      <Content column="3 / span 3" row="3 / span 6">
        <p>
          The various stay-at-home orders in 2020 presented challenges for
          churches and families seeking to grow in God’s Word. Pastors and
          elders around the world thought about new ways to bring God’s Word to
          their congregations, and parents searched for unique ways to care for
          their children’s souls.
        </p>

        <p>
          As video viewing skyrocketed around the world, Ligonier decided to
          take a bold step to help growing Christians maintain the daily
          discipleship within their families and communities. The generosity of
          our donors gave us the confidence, for the first time ever, to open
          our entire teaching series library to be free to stream. This effort
          to help Christians redeem the time and grow in their knowledge of God
          caused the time spent on{' '}
          <a href="https://ligonier.org">Ligonier.org</a> to double and video
          views on Ligonier’s YouTube channel to triple.
        </p>
      </Content>
    </Well>
    <Numbers column="3 / span 3" number="2x time" row="8 / span 2">
      Spent on Ligonier.org
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

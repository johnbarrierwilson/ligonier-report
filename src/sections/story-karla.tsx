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
  <Grid name="storykarla">
    <Backdrop />
    <Subject column="3 / span 1" row="2 / span 2">
      Testimony
    </Subject>
    <Divider column="3 / span 1" row="3 / span 1" />
    <Well>
      <Content column="3 / span 3" row="3 / span 6">
        <p>
          As many Bible studies, small groups, and Sunday school classes were
          canceled during the stay-at-home orders in 2020, Christians needed
          ways to stay connected online and study the deep truths of the
          Christian faith together.
        </p>

        <p>
          During this time, you enabled Ligonier Connect to open its expansive
          course library by making the group study feature free. As a result,
          nearly 25,000 study groups were created by churches and Christians
          around the world. This allowed believers to invite their friends to
          grow together online, providing them with private online classrooms to
          take any course in our library.
        </p>
      </Content>
      <Numbers column="3 / span 3" number="24,800" row="8 / span 2">
        Free study groups created
      </Numbers>
    </Well>
    <Blockquote column="9 / span 3" indent row="4 / span 3">
      <p>“Thank you for giving away the free study groups.</p>
    </Blockquote>
    <Content column="10 / span 3" row="7 / span 2">
      <p>
        In the beginning of the quarantine, I asked my nephew if he would like
        to take courses with me. He is 16 years old, and it has been a great
        blessing to see how he's grown in his knowledge of the Bible. For so
        many people, the 2020 quarantine will be filled with bad memories; for
        me and my nephew, we will remember it for the theology courses we took.”
      </p>
    </Content>
    <Heading column="10 / span 2" row="9 / span 1">
      Karla,
      <br />
      <em>Florida</em>
    </Heading>
    <Well>
      <Divider column="12 / span 3" row="10 / span 2" />
    </Well>
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

import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Well from '../components/well'

import IntroductionPattern from '../images/IntroductionPattern.png'
import IntroductionListen from '../images/IntroductionListen.png'

const IndexPage = () => (
  <Grid name="introductionlisten">
    <Backdrop />
    <Well size="l">
      <Image
        column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
        row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
        size="contain"
        src={IntroductionListen}
        transform="rotate"
      />
    </Well>
    <Well size="l">
      <Heading
        column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
        row={['4 / span 1', '4 / span 1', '4 / span 1', '4 / span 1']}
        size="xl"
        text="Listen"
      />
      <Content
        column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
        row={['8 / span 3', '8 / span 3', '8 / span 3', '8 / span 3']}
        type="deck"
      >
        <p><strong>Faith comes by hearing.</strong> Every week, Ligonier Ministries broadcasts audio and video teaching on the air and on the web to millions of people, free of charge. Trustworthy, life-changing teaching from Dr. R.C. Sproul, the Ligonier Ministries Teaching Fellows, and many others is available to you 24/7. Thank you for tuning&nbsp;in.</p>
      </Content>
    </Well>
  </Grid>
)

const Backdrop = styled('div')`
  background: #efeded;
  background-image: url(${IntroductionPattern});
  background-size: 500px 500px;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    grid-column: 1 / span 14;
    grid-row: 1 / span 12;
    position: relative;
  }
`

export default IndexPage
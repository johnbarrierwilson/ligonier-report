import React from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'

import Content from '../components/content'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'

import IntroductionPattern from '../images/IntroductionPattern.png'
import IntroductionRead from '../images/IntroductionRead.png'

const IndexPage = () => (
  <LazyLoad height={'100vh'}>
    <Grid>
      <Backdrop />
      <Heading
        column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
        row={['4 / span 1', '4 / span 1', '4 / span 1', '4 / span 1']}
        size="xl"
        text="Read"
      />
      <Content
        column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
        row={['8 / span 3', '8 / span 3', '8 / span 3', '8 / span 3']}
      >
        <p><strong>God revealed himself in a book.</strong> That makes reading an essential part of every Christian’s life. We publish so Christians can grow in their understanding of God and of themselves. Every year, we give away thousands of study Bibles, books, and magazines to people around the world who are hungry for the truth. Thank you for joining them.</p>
      </Content>
      <Image
        column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
        row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
        size="contain"
        src={IntroductionRead}
      />
    </Grid>
  </LazyLoad>
)

const Backdrop = styled('div')`
  background: #efeded;
  background-image: url(${IntroductionPattern});
  background-size: 500px 500px;
  grid-column: 1 / span 14;
  grid-row: 1 / span 12;
`

export default IndexPage
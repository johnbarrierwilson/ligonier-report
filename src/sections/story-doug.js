import React from 'react'
import styled from 'styled-components'

import Blockquote from '../components/blockquote'
import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Subject from '../components/subject'

import Doug from '../images/StoryDoug.jpg'

const IndexPage = () => (
  <Grid>
    <Backdrop />
    <Subject
      column={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
    >
      Testimony
    </Subject>
    <Divider
      column={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
      row={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
    />
    <Image
      column={['3 / span 3', '3 / span 3', '3 / span 3', '3 / span 3']}
      row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
      size="contain"
      src={Doug}
    />
    <Heading
      center={true}
      column={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      row={['10 / span 1', '10 / span 1', '10 / span 1', '10 / span 1']}
      text="Doug, Los&nbsp;Angeles"
    />
    <Content
      column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
      row={['3 / span 3', '3 / span 3', '3 / span 3', '3 / span 3']}
    >
      <p><strong>“I wasn’t actively practicing</strong> or able to articulate what I said I believed. My dad sent over a Ligonier Conference Q&A, and on a free weekend I sat down and watched one. . . and then another and another. . . and I could not stop watching. It was my discovery of theology, the doctrines of grace, and the provision of a system of belief.</p>
      <p>Since then, I’ve been to two Ligonier conferences in Seattle. It felt like an eternity before I finally went to one since I had watched so many online. It is interesting that . . .</p>
    </Content>
    <Blockquote
      column={['8 / span 5', '8 / span 5', '8 / span 5', '8 / span 5']}
      row={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
    >
      <p>WHEN YOU HEAR THE WORD PREACHED IN PERSON, IT IS OFTEN MORE POWERFUL.</p>
    </Blockquote>
    <Content
      column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
      row={['7 / span 5', '7 / span 5', '7 / span 5', '7 / span 5']}
    >
      <p>I now know that I’m a third-generation Ligonier student. When my grandma passed away, I got her copy of The Holiness of God from one of the first printings. It’s pretty special to have such a classic. Like R.C. said, there’s a gap between Sunday school and seminary. Ligonier serves to fill that gap in a format that is scalable and digestible for many churches out there that don’t have the resources to produce this kind of material.”</p>
    </Content>
    <Divider
      column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
      row={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
    />
  </Grid>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.gray};
  grid-column: 2 / span 12;
  grid-row: 2 / span 10;
`

export default IndexPage
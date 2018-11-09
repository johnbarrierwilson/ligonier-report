import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Subject from '../components/subject'
import Well from '../components/well'

import Parsons from "../images/FellowParsons.jpg"

const IndexPage = () => (
  <Grid name="fellowparsons">
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
      text='Burk Parsons'
    />
    <Well bottom={true}>
      <Image
        column={['4 / span 3', '4 / span 3', '4 / span 3', '4 / span 3']}
        fullWidth={true}
        position="center 20%"
        row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
        src={Parsons}
        transform='slide'
      />
    </Well>
    <Heading
      column={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      inverted={true}
      row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
      size="s"
      text='“THE TEACHING FELLOWS ARE A BAND OF BROTHERS STRIVING TO STAND FIRM ON THE WORD OF GOD, TEACHING THE WORD OF GOD IN SEASON AND OUT OF SEASON.”'
    />
    <Content
      column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
      inverted={true}
      row={['7 / span 4', '7 / span 4', '7 / span 4', '7 / span 4']}
    >
      <p>Dr. Burk Parsons is senior pastor of Saint Andrew’s Chapel in Sanford, Fla., where he labored many years alongside Dr. Sproul as copastor. Dr. Parsons had the privilege of joining Dr. Sproul in local church ministry as they worked together as shepherds in Central Florida. Dr. Parsons also serves as chief pub- lishing officer of Ligonier Ministries, and he has served as editor of Tabletalk magazine since 2003.</p>
      <p>Dr. Parsons began serving at Ligonier Ministries in 1999, and he became a teaching fellow in 2017. Dr. Parsons is a wise and discerning voice, and he helps maintain Ligonier’s theological fidelity and advance Ligonier’s service to the church. He has recorded a teaching series with Ligonier called The Great Commission, and he is author of Why Do We Have Creeds? He is editor of Assured by God and John Calvin: A Heart for Devotion, Doctrine, and Doxology and coeditor and cotranslator of A Little Book on the Christian Life by John&nbsp;Calvin.</p>
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
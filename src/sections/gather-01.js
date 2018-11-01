import React from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import NumbersLarge from '../components/numbersLarge'
import Subject from '../components/subject'

import Seattle from '../images/ConferenceSeattle.jpg'
import Conference from '../images/Conference.jpg'

const IndexPage = () => (
  <LazyLoad offset={100}>
    <Grid>
      <Backdrop />
      <Image
        column={['2 / span 7', '2 / span 7', '2 / span 7', '2 / span 7']}
        position='center bottom'
        row={['1 / span 6', '1 / span 6', '1 / span 6', '1 / span 6']}
        src={Conference}
      />
      <Subject
        column={['2 / span 5', '2 / span 5', '2 / span 5', '2 / span 5']}
        row={['7 / span 1', '7 / span 1', '7 / span 1', '7 / span 1']}
      >
        National Conference
      </Subject>
      <Divider
        column={['2 / span 5', '2 / span 5', '2 / span 5', '2 / span 5']}
        row={['7 / span 2', '7 / span 2', '7 / span 2', '7 / span 2']}
      />
      <Heading
        center={true}
        column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
        row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
        text="GATHERING FOR AN ANNUAL FAMILY REUNION"
      />
      <Content
        center={true}
        column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
        row={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
      >
        <p><strong>For over thirty years,</strong> our National Conference has been gathering thousands of Ligonier friends and supporters to hear trustworthy teaching from God’s Word. The conference is held over three days every spring in Orlando, Fla., and brings together Christians from many different backgrounds who make up the Ligonier family. Each year it is encouraging to see more first- time attendees gathering from around the world. Your prayers and support enable our National Conference to serve as a great platform for equipping Christians with the truth.</p>
      </Content>

      <Subject
        column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
        row={['1 / span 2', '1 / span 2', '1 / span 2', '1 / span 2']}
      >
        Regional &amp; International Conferences
      </Subject>
      <Divider
        column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
        row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
      />
      <Heading
        center={true}
        column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
        row={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
        text="GATHERING LOCALLY AND AROUND THE WORLD"
      />
      <Image
        column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
        position='left center'
        row={['4 / span 3', '4 / span 3', '4 / span 3', '4 / span 3']}
        size='contain'
        src={Seattle}
        transform='translateY(1.5rem)'
      />
      <Content
        center={true}
        column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
        row={['7 / span 3', '7 / span 3', '7 / span 3', '7 / span 3']}
      >
        <p><strong>Ligonier conferences are</strong> held nationally and internationally, bring- ing trusted teachers to live events for growing Christians. We bring gifted teachers to local gatherings so that as many people as possible can join with us. We give thanks to God for the thousands who do so every year.</p>
        <p>In addition to our popular biennial West Coast Conference, Ligonier hosts regional conferences in many states each year. Internationally, conferences have taken place in Germany, Northern Ireland, and Mexico. Future events are planned for the United Kingdom and other European countries, as well as Canada and Asia.</p>
      </Content>
      <NumbersLarge
        column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
        description1='EVENTS IN A YEAR'
        description2='NUMBER OF ATTENDEES'
        number1='20+'
        number2='12,000+'
        row={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
      />
    </Grid>
  </LazyLoad>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.tan};
  grid-column: 9 / span 6;
  grid-row: 1 / span 12;
`

export default IndexPage
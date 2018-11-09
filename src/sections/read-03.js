import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Subject from '../components/subject'
import Well from '../components/well'

import Bay from '../images/TranslationBay.jpg'
import Building from '../images/TranslationBuilding.jpg'
import City from '../images/TranslationCity.jpg'
import Group from '../images/GroupAfrica.jpg'

const IndexPage = () => (
  <Grid name="read03">
    <Subject
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
    >
      Study Bible Translations
    </Subject>
    <Divider
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
    />
    <Heading
      center={true}
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      text="Bringing the Reformation&nbsp;Study Bible to&nbsp;Major World Languages"
    />
    <Image
      column={['7 / span 3', '7 / span 3', '7 / span 3', '7 / span 3']}
      row={['7 / span 3', '7 / span 3', '7 / span 3', '7 / span 3']}
      src={City}
    />
    <Well top={true}>
      <Heading
        column={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
        row={['3 / span 3', '3 / span 3', '3 / span 3', '3 / span 3']}
        size="s"
        text='OVER ONE BILLION PEOPLE WORLDWIDE SPEAK SPANISH, PORTUGUESE, OR FRENCH. YET THEY LACK A STUDY BIBLE ROOTED IN THE HISTORIC CHRISTIAN FAITH AND REFORMED THEOLOGY.'
        transform="translateX(2rem)"
      />
    </Well>
    <Image
      column={['1 / span 5', '1 / span 5', '1 / span 5', '1 / span 5']}
      row={['5 / span 3', '5 / span 3', '5 / span 3', '5 / span 3']}
      src={Bay}
      transform="translateY(2rem)"
    />
    <Well>
      <Content
        column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
        row={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
      >
        <p><strong>Translating the</strong> <em>Reformation Study Bible</em> into other languages is fueling Great Commission discipleship around the world. German and Korean edi- tions are now available. Translation work is underway in three more lan- guages: Spanish, Portuguese, and French. In total, over one billion people worldwide speak one of these three languages, yet they lack a study Bible rooted in the historic Christian faith and Reformed theology.</p>
        <p>These pioneering translations will strengthen and advance global gospel ministry thanks to your generous support. When complete, it will mean a Reformation Study Bible is available in at least one language spoken on every continent in the world.</p>
      </Content>
    </Well>
    <Well bottom={true}>
      <Image
        column={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
        row={['4 / span 3', '4 / span 3', '4 / span 3', '4 / span 3']}
        src={Building}
        transform="translate(-1.5rem, 0.5rem)"
      />
    </Well>
    <Divider
      column={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
      row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
    />

    <Well bottom={true} top={true}>
      <Backdrop />
      <Subject
        column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
        row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
      >
        Study Bibles for Africa
      </Subject>
      <Divider
        column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
        row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      />
      <Heading
        center={true}
        column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
        row={['3 / span 3', '3 / span 3', '3 / span 3', '3 / span 3']}
        text="Equipping Church Leaders in&nbsp;Africa"
        />
      <Well bottom={true}>
        <Image
          column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
          position="left center"
          row={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
          size="contain"
          src={Group}
          transform="translateY(-15%)"
        />
      </Well>
      <Content
        center={true}
        column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
        row={['8 / span 4', '8 / span 4', '8 / span 4', '8 / span 4']}
      >
        <p><strong>Thousands of pastors,</strong> church leaders, and students in ten African countries are receiving a free copy of the Reformation Study Bible thanks to the strategic partnership between Ligonier Ministries and the Rosemary Jensen Bible Foundation. We have already sent more than 10,000 Bibles, with plans to distribute an additional 26,000 by 2028.</p>
        <p>This outreach is only possible with the support of visionary donors. Thank you for partnering with us. You are bringing the Word of God to needy Christians in lands where Bibles are expensive and trustworthy theological resources are rare.</p>
      </Content>
    </Well>
  </Grid>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.tan};
  bottom: -40px;
  left: -40px;
  position: absolute;
  right: -40px;
  top: -40px;
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    bottom: -50px;
    left: -20vw;
    right: -20vw;
    top: -50px;
  }
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    bottom: 0;
    grid-column: 11 / span 4;
    grid-row: 1 / span 12;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`

export default IndexPage
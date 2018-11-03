import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Numbers from '../components/numbers'
import Subject from '../components/subject'
import Well from '../components/well'

import GirlBus from '../images/GirlBus.jpg'
import TeachingSeries from '../images/TeachingSeries.png'

const IndexPage = () => (
  <Grid name="listen02">
    <Well bottom={true} size="l">
      <Backdrop />
      <Subject
        column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
        row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
      >
        Teaching Series
      </Subject>
      <Image
        column={['1 / span 7', '1 / span 7', '1 / span 7', '1 / span 7']}
        position='left center'
        row={['3 / span 6', '3 / span 6', '3 / span 6', '3 / span 6']}
        size='contain'
        src={TeachingSeries}
      />
      <Heading
        center={true}
        column={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
        row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
        text="Digging Deep Into&nbsp;God's&nbsp;Word"
      />
      <Content
        center={true}
        column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
        row={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
      >
        <p><strong>For decades,</strong> our video teaching series have enabled Dr. R.C. Sproul and other trusted teachers to share the riches of Scripture with a wide audience. There are hundreds of topics available, designed to build up disciples in their knowledge of God and equip them to live for the glory of God.</p>
        <p>This expansive library weaves a rich tapestry of theology, apologetics, church history, biblical studies, and much more. Each message is less than thirty minutes in length, making it well-suited for your Sunday school, home group, or personal Bible study.</p>
        <p>Ligonier teaching series have been translated into several different lan- guages, including Portuguese, Korean, and Arabic. Thanks to your support, we are now preparing series in Spanish for people across Latin America.</p>
      </Content>
    </Well>

    <Subject
      column={['9 / span 5', '9 / span 5', '9 / span 5', '9 / span 5']}
      row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
    >
      Ligonier App
    </Subject>
    <Divider
      column={['9 / span 5', '9 / span 5', '9 / span 5', '9 / span 5']}
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
    />
    <Heading
      center={true}
      column={['9 / span 3', '9 / span 3', '9 / span 3', '9 / span 3']}
      row={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      text="SSERVING CHRISTIANS ON THE GO"
    />
    <Content
      center={true}
      column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
      row={['4 / span 4', '4 / span 4', '4 / span 4', '4 / span 4']}
    >
      <p><strong>The Ligonier App is</strong> a daily gospel resource that provides instant access to a deep library of Christian teaching. It puts trustworthy teaching in the palm of your hand, gathering together daily audio, video, devotional arti- cles, and much more.</p>
      <p>Accessed over 4.3 million times annually, the app is a go-to resource for growing Christians. In addition to our devotional content and media archives, you’ll also find easy access to Ask Ligonier, our biblical and theo- logical chat service.</p>
      <p>By God’s grace, and because of your support, the Ligonier app is available free to all users. Thank you.</p>
    </Content>
    <Well>
      <Image
        column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
        row={['7 / span 3', '7 / span 3', '7 / span 3', '7 / span 3']}
        src={GirlBus}
        transform="translateY(2rem)"
      />
    </Well>
    <Numbers
      column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
      description='Annual Ligonier App Launches'
      number='4,300,000+'
      row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
    />
  </Grid>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.tan};
  bottom: -40px;
  left: -40px;
  position: absolute;
  right: -40px;
  top: -40px;
  @media (min-width: ${p => p.theme.breakpoints.medium}){
    bottom: 0;
    grid-column: 1 / span 7;
    grid-row: 1 / span 12;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`

export default IndexPage
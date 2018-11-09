import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Subject from '../components/subject'
import Well from '../components/well'

import TabletalkPlaceholder from '../images/placeholder-tabletalk.png'
import GuyWalking from '../images/Read01–GuyWalking.jpg'

const IndexPage = () => (
  <Grid name="read01">
    <Well bottom={true} size="l">
      <Backdrop />
      <Subject
        column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
        row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
      >
        Tabletalk Magazine
      </Subject>
      <Divider
        column={['8 / span 2', '8 / span 2', '2 / span 2', '2 / span 2']}
        row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      />
      <Well>
        <Image
          column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
          position='left center'
          row={['4 / span 3', '4 / span 3', '4 / span 3', '4 / span 3']}
          size="contain"
          src={TabletalkPlaceholder}
        />
      </Well>
      <Heading
        center={true}
        column={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
        row={['7 / span 2', '7 / span 2', '7 / span 2', '7 / span 2']}
        text="Helping Disciples&nbsp;Grow"
      />
      <Content
        column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
        row={['8 / span 5', '8 / span 5', '8 / span 5', '8 / span 5']}
      >
        <p><strong>For over forty years,</strong> Tabletalk magazine has helped growing Christians live biblically informed lives. Every month, it reaches approxi- mately 250,000 people in more than seventy-five countries around the world.</p>
        <p>Each issue contains daily Bible studies to help readers understand and apply the Word of God, as well as an effective plan for reading through the Bible in a year. Thought-provoking articles from trusted pastors and Bible teachers address biblical, theological, and practical themes to help strength- en and encourage people in their faith.</p>
        <p>Subscribers can now access Tabletalk at TabletalkMagazine.com. Every new issue is available digitally, along with online-exclusive content and a searchable archive of back issues.</p>
        <p>Tabletalk is biblical, reliable, and readable. Above all, Tabletalk exists to help Christians deepen their knowledge of God’s Word in order that their minds may be renewed and their lives transformed.</p>
      </Content>
    </Well>
    
    <Well>
      <Subject
        column={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
        row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
      >
        Ask Ligonier
      </Subject>
      <Divider
        column={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
        row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      />
      <Heading
        column={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
        row={['4 / span 4', '4 / span 4', '4 / span 4', '4 / span 4']}
        text="Answering Your Biblical and Theological Questions"
      />
      <Content
        column={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
        row={['7 / span 5', '7 / span 5', '7 / span 5', '7 / span 5']}
      >
        <p><strong>Ask Ligonier is our</strong> online biblical and theological chat ser- vice—providing clear, concise, and trustworthy answers. Drawing on Ligonier’s vast library of resources and Dr. R.C. Sproul’s decades-long ministry of answering students’ ques- tions, we’re now able to answer your theological questions twenty-four hours a day, six days a week.</p>
        <p>Do you have a question about a Bible passage or theology? Whether it’s for tomorrow night’s Bible study or something that’s been puzzling you for years, just ask Ligonier.</p>
        <p>Your generous support means this ground-breaking initiative is avail- able free of charge. Well-trained team members are located around the world, standing by to answer your questions.</p>
      </Content>
    </Well>

    <Well>
      <Image
        column={['11 / span 3', '11 / span 3', '11 / span 3', '11 / span 3']}
        row={['1 / span 4', '1 / span 4', '1 / span 4', '1 / span 4']}
        src={GuyWalking}
      />
    </Well>

    <Well top={true}>
      <Subject
        column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
        name="state-of-theology" 
        row={['5 / span 1', '5 / span 1', '5 / span 1', '5 / span 1']}
      >
        The State of Theology
      </Subject>
      <Divider
        column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
        row={['5 / span 2', '5 / span 2', '5 / span 2', '5 / span 2']}
      />
      <Heading
        center={true}
        column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
        row={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
        text="Measuring Theological Health"
      />
      <Content
        column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
        row={['8 / span 4', '8 / span 4', '8 / span 4', '8 / span 4']}
      >
        <p><strong>Since 2014,</strong> The State of Theology survey has been measuring the theo- logical health of Americans. In 2018, we asked three thousand people about their beliefs regarding God, the Bible, Jesus Christ, judgment, and eternity. This professionally conducted sur- vey was designed to equip Christians with statistically robust findings to aid the work of the local church and is unrivaled in its theological scope and depth.</p>
        <p>We also commissioned the first ever State of Theology survey in the United Kingdom. The results show an urgent need for gospel witness as society in the United Kingdom becomes ever more secular.</p>
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
    left: -90px;
    right: -90px;
    top: -50px;
  }
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    bottom: 0;
    grid-column: 1 / span 6;
    grid-row: 1 / span 12;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`

export default IndexPage
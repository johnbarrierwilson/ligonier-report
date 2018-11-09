import React from 'react'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Numbers from '../components/numbers'
import Subject from '../components/subject'
import Well from '../components/well'

import Brown from '../images/BibleBrown.jpg'
import Gray from '../images/BibleGray.jpg'
import Leather from '../images/BibleLeather.jpg'
import Standard from '../images/BibleStandard.jpg'

const IndexPage = () => (
  <Grid name="read02">
    <Subject
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
    >
      Reformation Study&nbsp;Bible
    </Subject>
    <Divider
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
    />
    <Heading
      center={true}
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      text="Deepening Your Study of&nbsp;God's Word"
    />
    <Well hide={true}>
      <Image
        column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
        row={['5 / span 6', '5 / span 6', '5 / span 6', '5 / span 6']}
        size="contain"
        src={Standard}
      />
    </Well>
    <Image
      column={['6 / span 4', '6 / span 4', '6 / span 4', '6 / span 4']}
      row={['1 / span 6', '1 / span 6', '1 / span 6', '1 / span 6']}
      size="contain"
      src={Brown}
      transform="translateY(-2rem)"
    />
    <Content
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      row={['7 / span 3', '7 / span 3', '7 / span 3', '7 / span 3']}
    >
      <p>The Reformation Study Bible guides growing Christians through the Word of God with trusted contributions from seventy-five gifted scholars. More than one hundred thousand copies have been distributed since March 2015.</p>
      <p>Dr. R.C. Sproul edited this landmark publication, which contains over 1.1 million words of verse-by-verse commentary. The original edition is packed with insightful articles; topical explanations; historic creeds, confessions, and catechisms; plus award-winning maps and visuals. The newly released Condensed Edition contains the best of this commentary and is designed for life on the go.</p>
      <p>The Reformation Study Bible, available in ESV or NKJV, elevates Scripture on every page and distills timeless theology for twenty-first-century disciples.</p>
    </Content>
    <Well top={true}>
      <Numbers
        column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
        description='REFORMATION STUDY BIBLES DISTRIBUTED SINCE 2015'
        number='145,000+'
        row={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
      />
    </Well>
    <Well hide={true}>
      <Image
        column={['6 / span 4', '6 / span 4', '6 / span 4', '6 / span 4']}
        row={['7 / span 6', '7 / span 6', '7 / span 6', '7 / span 6']}
        size="contain"
        src={Leather}
      />
    </Well>
    <Well hide={true}>
      <Image
        column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
        row={['1 / span 6', '1 / span 6', '1 / span 6', '1 / span 6']}
        size="contain"
        src={Gray}
      />
    </Well>
  </Grid>
)

export default IndexPage
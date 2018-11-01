import React from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Subject from '../components/subject'

import AskAnything from '../images/AskAnything.jpg'
import Travel01 from '../images/Travel01.jpg'
import Travel02 from '../images/Travel02.jpg'
import Travel03 from '../images/Travel03.jpg'

const IndexPage = () => (
  <LazyLoad>
    <Grid>
      <Backdrop />
      <Subject
        column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
        row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
      >
        Study Cruises and Tours
      </Subject>
      <Divider
        column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
        row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      />
      <Heading
        center={true}
        column={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
        row={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
        text="Gathering and Exploring Together"
      />
      <Image
        column={['6 / span 3', '6 / span 3', '6 / span 3', '6 / span 3']}
        position='center 30%'
        row={['3 / span 3', '3 / span 3', '3 / span 3', '3 / span 3']}
        src={Travel02}
        transform='translateY(-2rem)'
      />
      <Image
        column={['2 / span 5', '2 / span 5', '2 / span 5', '2 / span 5']}
        position='center 30%'
        row={['5 / span 4', '5 / span 4', '5 / span 4', '5 / span 4']}
        src={Travel01}
      />
      <Image
        column={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
        position='center 30%'
        row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
        src={Travel03}
        transform="translateX(3rem)"
      />
      <Content
        column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
        row={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
      >
        <p><strong>Ligonier Cruises</strong> gather ministry friends at sea for trustworthy teach- ing from God’s Word. Together they enjoy a memorable time with refresh- ing Christian fellowship set amid the glory of God’s creation. In addition to faithful teaching, Christians have the opportunity to meet like-minded believers. Popular destinations include Alaska, the Caribbean, and Europe.</p>
        <p>From historic sites in Israel to Germany to the British Isles, Ligonier tours take inquisitive Christians to the places where God has worked in church history. Ligonier Teaching Fellows travel with attendees to guide, to teach, and to explain why our history still matters today. These non-donor funded tours provide a rare, first-hand opportunity for growing Christians to expe- rience our family history together.</p>
      </Content>

      <Subject
        column={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
        row={['6 / span 1', '6 / span 1', '6 / span 1', '6 / span 1']}
      >
        THE INSTITUTE FOR EXPOSITORY PREACHING
      </Subject>
      <Divider
        column={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
        row={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
      />
      <Heading
        center={true}
        column={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
        row={['7 / span 2', '7 / span 2', '7 / span 2', '7 / span 2']}
        text="TRAINING BIBLICAL EXPOSITORS"
      />
      <Content
        center={true}
        column={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
        row={['9 / span 3', '9 / span 3', '9 / span 3', '9 / span 3']}
      >
        <p>The Institute for Expository Preaching trains pastors, church leaders, and Bible teachers in the art of expository preaching. With over forty-five years in preaching and teaching ministry, Dr. Steven Lawson leads these events across the country and around the world. Each event is dedicated to the passionate preaching and exposition of the Word of God so that the glorious gospel of Jesus Christ can be heard more clearly from pulpits everywhere.</p>
      </Content>

      <Subject
        column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
        row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
      >
        ASK ANYTHING AND TRUTH &amp; CONSEQUENCES
      </Subject>
      <Divider
        column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
        row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      />
      <Heading
        center={true}
        column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
        row={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
        text="CONTENDING FOR THE FAITH"
      />
      <Content
        center={true}
        column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
        row={['5 / span 3', '5 / span 3', '5 / span 3', '5 / span 3']}
      >
        <p>New to major college campuses across the United States, Ask Anything events provide a platform for Dr. Albert Mohler to answer students’ questions live. Dr. Mohler equips Christian students to contend earnestly for the faith once delivered to the saints. He is joined by other Teaching Fellows for the companion Truth and Consequences training seminar, which helps Christian students debunk the tenets of secularism and trains them in a biblical worldview. By God’s grace, your financial support is making these events possible for students.</p>
      </Content>

      <Image
        column={['12 / span 3', '12 / span 3', '12 / span 3', '12 / span 3']}
        position="center 90%"
        row={['9 / span 3', '9 / span 3', '9 / span 3', '9 / span 3']}
        src={AskAnything}
      />
    </Grid>
  </LazyLoad>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.tan};
  grid-column: 1 / span 6;
  grid-row: 1 / span 12;
`

export default IndexPage
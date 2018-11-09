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

import Book from '../images/ChristologyStatement.png'
import NoneOther from '../images/TranslationsNoneOther.jpg'

const IndexPage = () => (
  <Grid name="read05">
    <Image
      column={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
      position="center 70%"
      row={['1 / span 4', '1 / span 4', '1 / span 4', '1 / span 4']}
      src={NoneOther}
    />
    <Well>
      <Subject
        column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
        row={['5 / span 1', '5 / span 1', '5 / span 1', '5 / span 1']}
      >
        Translations
      </Subject>
      <Divider
        column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
        row={['5 / span 2', '5 / span 2', '5 / span 2', '5 / span 2']}
      />
      <Heading
        center={true}
        column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
        row={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
        text="Taking the Truth to the Nations"
      />
      <Content
        center={true}
        column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
        row={['8 / span 4', '8 / span 4', '8 / span 4', '8 / span 4']}
      >
        <p><strong>Who is Jesus</strong> and what did He come to do? Most evangelicals are confused when it comes to answering these questions. The Ligonier Statement on Christology seeks to bring clarity where there is confusion. It carefully restates the Bible’s teaching about the person and work of Jesus Christ, the Word made flesh. With biblical testimony and theological precision, this statement proclaims that Jesus is truly God and truly man. Written for the glory of Christ and the edification of His people, it is available in English and sixteen other major world languages.</p>
      </Content>
      <Well size="l">
        <Numbers
          column={['5 / span 3', '5 / span 3', '4 / span 4', '4 / span 4']}
          description='Languages in which our resources are available'
          number='36'
          row={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
          transform="translateX(10%)"
        />
      </Well>
    </Well>


    <Well>
      <Subject
        column={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
        row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
      >
        Military and Prison&nbsp;Chaplains
      </Subject>
      <Divider
        column={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
        row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      />
      <Heading
        center={true}
        column={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
        row={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
        text="Serving Those In Need"
      />
      <Content
        center={true}
        column={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
        row={['5 / span 4', '5 / span 4', '5 / span 4', '5 / span 4']}
      >
        <p><strong>Military Chaplains</strong> serve those who are literally on the front line. Your support is forming a spiritual supply line by providing gospel resources for troops as trustworthy books are freely distributed for those on active duty around the world.</p>
        <p>Prisoners write to us every month, hungry for the gospel and for resourc- es to help them grow in Christ. Your support sends them care packages that include a special edition of the Reformation Study Bible and books by trusted teachers. Prison chaplains are also supplied with the teaching resources they need to serve those under their care.</p>
      </Content>
    </Well>

    <Well size="l" top={true}>
      <Backdrop />
      <Subject
        column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
        row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
      >
        Christology Statement
      </Subject>
      <Divider
        column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
        row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      />
      <Well>
        <Image
          column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
          row={['4 / span 4', '4 / span 4', '4 / span 4', '4 / span 4']}
          size='contain'
          src={Book}
        />
      </Well>
      <Heading
        center={true}
        column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
        row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
        text="Affirming the Biblical Christ"
      />
      <Content
        center={true}
        column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
        row={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
      >
        <p><strong>Who is Jesus</strong> and what did He come to do? Most evangelicals are confused when it comes to answering these questions. The Ligonier Statement on Christology seeks to bring clarity where there is confusion. It carefully restates the Bible’s teaching about the person and work of Jesus Christ, the Word made flesh. With biblical testimony and theological precision, this statement proclaims that Jesus is truly God and truly man. Written for the glory of Christ and the edification of His people, it is available in English and sixteen other major world languages.</p>
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
    grid-column: 9 / span 6;
    grid-row: 1 / span 12;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`

export default IndexPage
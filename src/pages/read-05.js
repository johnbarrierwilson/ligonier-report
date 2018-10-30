import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Heading from '../components/heading'
import Image from '../components/image'
import Layout from '../components/layout'
import LeftSidebar from '../components/leftSidebar'
import Logo from '../components/logo'
import NavigateLeft from '../components/navigateLeft'
// import NavigateRight from '../components/navigateRight'
import Numbers from '../components/numbers'
import RightSidebar from '../components/rightSidebar'
import Subject from '../components/subject'

import Book from '../images/ChristologyStatement.png'
import NoneOther from '../images/TranslationsNoneOther.jpg'

const IndexPage = () => (
  <Layout>
    <Backdrop />
    <Logo simple={true} />
    <LeftSidebar text="Part One / Read" />
    <RightSidebar status={1} />
    <NavigateLeft to="/fellow-godfrey" />
    {/* <NavigateRight to="/fellow-godfrey" /> */}

    <Image
      column={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
      position="center 70%"
      row={['1 / span 4', '1 / span 4', '1 / span 4', '1 / span 4']}
      src={NoneOther}
    />
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

    <Numbers
      column={['5 / span 3', '5 / span 3', '5 / span 3', '5 / span 3']}
      description='Languages in which our resources are available'
      number='36'
      row={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
    />

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
    <Image
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      row={['4 / span 4', '4 / span 4', '4 / span 4', '4 / span 4']}
      size='contain'
      src={Book}
    />
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
  </Layout>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.tan};
  grid-column: 9 / span 6;
  grid-row: 1 / span 12;
`

export default IndexPage
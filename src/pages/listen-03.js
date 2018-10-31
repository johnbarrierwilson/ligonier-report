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
import NavigateRight from '../components/navigateRight'
import Numbers from '../components/numbers'
import Podcasts from '../components/podcasts'
import RightSidebar from '../components/rightSidebar'
import Subject from '../components/subject'

import FatherSon from '../images/FatherSon.jpg'
import Podcast01 from '../images/Podcast01.jpg'
import Podcast02 from '../images/Podcast02.jpg'
import Podcast03 from '../images/Podcast03.jpg'

const IndexPage = () => (
  <Layout>
    <Backdrop />
    <Logo simple={true} />
    <LeftSidebar text="Part Two / Listen" />
    <RightSidebar status={2} />
    <NavigateLeft to="/fellow-nichols" />
    <NavigateRight to="/introduction-gather" />

    <Image
      column={['2 / span 7', '2 / span 7', '2 / span 7', '2 / span 7']}
      position='center 30%'
      row={['1 / span 4', '1 / span 4', '1 / span 4', '1 / span 4']}
      src={FatherSon}
    />
    <Subject
      column={['2 / span 5', '2 / span 5', '2 / span 5', '2 / span 5']}
      row={['5 / span 1', '5 / span 1', '5 / span 1', '5 / span 1']}
    >
      Platforms
    </Subject>
    <Divider
      column={['2 / span 5', '2 / span 5', '2 / span 5', '2 / span 5']}
      row={['5 / span 2', '5 / span 2', '5 / span 2', '5 / span 2']}
    />
    <Heading
      center={true}
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
      text="STREAMING TRUSTWORTHY&nbsp;TEACHING"
    />
    <Content
      center={true}
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['7 / span 4', '7 / span 4', '7 / span 4', '7 / span 4']}
    >
      <p><strong>Ligonier teaching resources</strong> can now be accessed in more ways than ever. Whether it’s video or audio, trusted Bible teaching is available wher- ever you like to tune in—YouTube, Amazon Prime Video, Alexa, and Roku.</p>
      <p>We are reaching more people than ever before with the knowledge of God’s holiness. Across all of our online platforms, students watch hundreds of thousands of hours of Ligonier videos each year. On YouTube alone, this now equates to nearly two hundred years of continuous playback.</p>
      <p>Renewing Your Mind and messages from National Conferences also air on NRB TV, reaching up to forty-five million households with the truth of God’s Word.</p>
    </Content>
    <Numbers
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      description='YOUTUBE CHANNEL PLAYS PER MONTH'
      number='500,000+'
      row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
    />

    <Subject
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
    >
      Podcasts
    </Subject>
    <Divider
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
    />
    <Heading
      center={true}
      column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
      row={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      text="SHARING TIMELESS&nbsp;TRUTHS"
    />
    <Content
      center={true}
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      row={['5 / span 4', '5 / span 4', '5 / span 4', '5 / span 4']}
    >
      <p><strong>Our featured podcasts provide</strong> spiritual food for growing Christians wherever they are. 5 Minutes in Church History, with Stephen Nichols, travels back in time to explore the lives of the saints who came before us and the events which shaped their journey.</p>
      <p>Open Book allows you to step into Dr. R.C. Sproul’s library. Glean new in- sights into the books which have most influenced him and other pastors and theologians.</p>
      <p>The Westminster Shorter Catechism is a 107-episode podcast that features Dr. Sinclair Ferguson reading each question and answer in its entirety. This catechism has been beloved by Christians around the world for generations.</p>
      <p>Thanks to you, Renewing Your Mind, RefNet, and all our podcasts are offered freely. Tune in on iTunes, Google Play, and wherever you listen to podcasts.</p>
    </Content>
    <Podcasts
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      row={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
      transform="translateY(-2rem)"
    >
      <img src={Podcast01} alt='five minutes in church history podcast cover image' />
      <img src={Podcast02} alt='the westminster shorter catechism podcast cover image' />
      <img src={Podcast03} alt='open book with stephen nichols podcast cover image' />
    </Podcasts>
    <Numbers
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      description='MONTHLY PODCAST LISTENS'
      number='1,000,000+'
      row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
    />
  </Layout>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.tan};
  grid-column: 9 / span 6;
  grid-row: 1 / span 12;
`

export default IndexPage
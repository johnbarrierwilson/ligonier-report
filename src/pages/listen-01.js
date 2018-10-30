import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import DocumentTitle from '../components/documentTitle'
import Heading from '../components/heading'
import Image from '../components/image'
import Layout from '../components/layout'
import LeftSidebar from '../components/leftSidebar'
import Logo from '../components/logo'
import NavigateLeft from '../components/navigateLeft'
import NavigateRight from '../components/navigateRight'
import Number from '../components/numbers'
import RightSidebar from '../components/rightSidebar'
import Subject from '../components/subject'

import Couple from '../images/RYMCouple.jpg'
import Family from '../images/RYMFamily.jpg'
import RefNet from '../images/RefNet.jpg'
import Window from '../images/RYMWindow.jpg'

const IndexPage = () => (
  <Layout>
    <Backdrop />
    <Logo />
    <DocumentTitle />
    <LeftSidebar text="Part Two / Listen" />
    <RightSidebar status={1} />
    <NavigateLeft to="/story-amy" />
    <NavigateRight to="/listen-02" />

    <Subject
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
    >
      Renewing Your Mind
    </Subject>
    <Divider
      column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
    />
    <Image
      column={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
      row={['4 / span 3', '4 / span 3', '4 / span 3', '4 / span 3']}
      src={Couple}
      transform='translateY(-2.75rem)'
    />
    <Image
      column={['5 / span 2', '5 / span 2', '5 / span 2', '5 / span 2']}
      position="left center"
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      size="contain"
      src={Window}
      transform='translate(2rem, 3rem)'
    />
    <Image
      column={['5 / span 4', '5 / span 4', '5 / span 4', '5 / span 4']}
      row={['5 / span 5', '5 / span 5', '5 / span 5', '5 / span 5']}
      src={Family}
      transform='translateX(2rem)'
    />
    <Heading
      center={true}
      column={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
      row={['7 / span 1', '7 / span 1', '7 / span 1', '7 / span 1']}
      text="TEACHING GROWING CHRISTIANS EVERY&nbsp;DAY"
    />
    <Content
      column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      row={['7 / span 6', '7 / span 6', '7 / span 6', '7 / span 6']}
    >
      <p><strong>OUR DAILY TEACHING BROADCAST,</strong> Renewing Your Mind, equips growing Christians to know what they believe, why they believe it, how to live it, and how to share it. Each day we air trustworthy, accessible, and in-depth Bible teaching from Dr. R.C. Sproul, the Ligonier Teaching Fellows, and other trusted teachers.</p>
      <p>You enable us to broadcast on more than 370 radio stations around the United States, as a podcast, and online at RenewingYourMind.org. Our aim is to spread the knowledge of the glory of God, and our prayer is that multitudes will be transformed by the renewing of their&nbsp;minds.</p>
    </Content>
    <Heading
      column={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
      row={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
      size="s"
      text='GOD CALLS HIS PEOPLE TO BE TRANSFORMED BY THE RENEWING OF THEIR MINDS. THIS TRANSFORMATION IS A DAILY PURSUIT.'
    />
    <Number
      column={['5 / span 3', '5 / span 3', '5 / span 3', '5 / span 3']}
      description='Countries with Listeners'
      number='180'
      row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
      transform='translateX(-3rem)'
    />

    <Content
      column={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
      row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
      transform='translateX(-4rem)'
    >
      <p><strong>New Spanish Edition: Renovando Tu Mente</strong><br/>The program launched in March 2018 and within six months more than thirty Spanish-speaking radio stations were broadcasting the program across Latin America, along with major online radio portals.</p>
    </Content>

    <Subject
      column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
      row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
    >
      REFNET
    </Subject>
    <Divider
      column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
      row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
    />
    <Heading
      center={true}
      column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
      row={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
      text="CURATING TRUSTWORTHY TEACHING 24/7"
    />
    <Image
      column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
      row={['5 / span 2', '5 / span 2', '5 / span 2', '5 / span 2']}
      src={RefNet}
    />
    <Content
      center={true}
      column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
      row={['7 / span 5', '7 / span 5', '7 / span 5', '7 / span 5']}
    >
      <p><strong>Streaming trustworthy teaching</strong> and preaching twenty- four hours a day, RefNet is our pop- ular internet radio app. It provides God-centered content for growing Christians, now with listeners in more than 180 countries.</p>
      <p>RefNet features trusted teachers including Alistair Begg, John MacArthur, R.C. Sproul, and the Ligonier Teaching Fellows. The daily schedule also includes Bible excerpts, news updates, and audiobooks— combining to bring you fresh spiritual encouragement every day.</p>
      <p>RefNet draws on Ligonier’s exten- sive library of resources and partners with other respected Reformed min- istries to be a trusted alternate to traditional Christian radio.</p>
    </Content>
  </Layout>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.tan};
  grid-column: 11 / span 4;
  grid-row: 1 / span 12;
`

export default IndexPage
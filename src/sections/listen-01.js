import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Number from '../components/numbers'
import Subject from '../components/subject'
import Well from '../components/well'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query Listen01Query {
        Couple: file(relativePath: { eq: "RYMCouple.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Family: file(relativePath: { eq: "RYMFamily.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        RefNet: file(relativePath: { eq: "RefNet.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Window: file(relativePath: { eq: "RYMWindow.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="listen01">
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
        <Heading
          center={true}
          column={['2 / span 3', '2 / span 3', '2 / span 4', '2 / span 3']}
          row={['7 / span 1', '7 / span 1', '7 / span 1', '7 / span 1']}
          text="TEACHING GROWING CHRISTIANS EVERY&nbsp;DAY"
        />
        <Well>
          <Image
            column={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
            row={['4 / span 3', '4 / span 3', '4 / span 3', '4 / span 3']}
            src={data.Couple.childImageSharp.fluid}
            transform='translateY(-2.75rem)'
          />
        </Well>
        <Content
          column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
          row={['7 / span 6', '7 / span 6', '7 / span 6', '7 / span 6']}
        >
          <p>Our daily teaching broadcast, <em>Renewing Your Mind</em>, equips growing Christians to know what they believe, why they believe it, how to live it, and how to share it. Each day we air trustworthy, accessible, and in-depth Bible teaching from Dr. R.C. Sproul, the Ligonier Teaching Fellows, and other trusted teachers.</p>
          <p>You enable us to broadcast on more than 370 radio stations around the United States, as a podcast, and online at RenewingYourMind.org. Our aim is to spread the knowledge of the glory of God, and our prayer is that multitudes will be transformed by the renewing of their&nbsp;minds.</p>
        </Content>
        <Well>
          <Image
            column={['5 / span 2', '5 / span 2', '5 / span 2', '5 / span 2']}
            position="left center"
            row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
            size="contain"
            src={data.Window.childImageSharp.fluid}
            transform='translate(2rem, 3rem)'
          />
        </Well>
        <Heading
          column={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
          row={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
          size="s"
          text='God calls his people to be transformed by the renewing of their minds. This transformation is a daily pursuit.'
        />
        <Well top={true}>
          <Image
            column={['5 / span 4', '5 / span 4', '5 / span 4', '5 / span 4']}
            row={['5 / span 5', '5 / span 5', '5 / span 5', '5 / span 5']}
            src={data.Family.childImageSharp.fluid}
            transform='translateX(2rem)'
          />
        </Well>

        <Well>
          <Content
            column={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
            row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
            type='sans'
            transform='translateX(-4rem)'
          >
            <p><strong>New Spanish Edition: <em>Renovando&nbsp;Tu&nbsp;Mente</em></strong><br/>The program launched in March 2018 and within six months more than thirty Spanish-speaking radio stations were broadcasting the program across Latin America, along with major online radio portals.</p>
          </Content>
        </Well>
        
        <Number
          column={['5 / span 3', '5 / span 3', '5 / span 3', '5 / span 3']}
          description='Countries with Listeners'
          number='180'
          row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
          transform='translateX(-3rem)'
        />

        <Well size="l" top={true}>
          <Backdrop />
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
          <Well>
            <Image
              column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
              row={['5 / span 2', '5 / span 2', '5 / span 2', '5 / span 2']}
              src={data.RefNet.childImageSharp.fluid}
            />
          </Well>
          <Content
            center={true}
            column={['12 / span 2', '12 / span 2', '12 / span 2', '12 / span 2']}
            row={['7 / span 5', '7 / span 5', '7 / span 5', '7 / span 5']}
          >
            <p>Streaming trustworthy teaching and preaching twenty-four hours a day, RefNet is our popular internet radio app. It provides God-centered content for growing Christians, now with listeners in more than 180 countries.</p>
            <p>RefNet features trusted teachers including Alistair Begg, John MacArthur, R.C. Sproul, and the Ligonier Teaching Fellows. The daily schedule also includes Bible excerpts, news updates, and audiobooks— combining to bring you fresh spiritual encouragement every day.</p>
            <p>RefNet draws on Ligonier’s extensive library of resources and partners with other respected Reformed ministries to be a trusted alternate to traditional Christian radio.</p>
          </Content>
        </Well>
      </Grid>
    )}
  />
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
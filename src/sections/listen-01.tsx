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
        <Subject column="2 / span 4" row="2 / span 1">
          <em>Renewing Your Mind</em>
        </Subject>
        <Divider column="2 / span 4" row="2 / span 2" />
        <Heading
          center
          column="2 / span 3"
          row="7 / span 1"
          text="TEACHING GROWING CHRISTIANS EVERY&nbsp;DAY"
        />
        <Well>
          <Image
            column="2 / span 3"
            maxWidth="large"
            row="4 / span 3"
            src={data.Couple.childImageSharp.fluid}
            transform="translateY(-2.75rem)"
          />
        </Well>
        <Content column="2 / span 2" row="8 / span 4">
          <p>
            Our daily teaching broadcast, <em>Renewing Your Mind</em>, equips
            growing Christians to know what they believe, why they believe it,
            how to live it, and how to share it. Each day, we air trustworthy,
            accessible, and in-depth Bible teaching from Dr. R.C. Sproul, the
            Ligonier Teaching Fellows, and other gifted teachers.
          </p>
          <p>
            You enable us to broadcast on more than 360 radio stations around
            the United States, as a podcast, and online at{' '}
            <a href="https://renewingyourmind.org">RenewingYourMind.org</a>. Our
            aim is to spread the knowledge of the glory of God, and our prayer
            is that multitudes will be transformed by the renewing of
            their&nbsp;minds.
          </p>
        </Content>
        <Well>
          <Image
            column="5 / span 2"
            maxWidth="large"
            position="left center"
            row="2 / span 2"
            size="contain"
            src={data.Window.childImageSharp.fluid}
            transform="translate(2rem, 3rem)"
          />
        </Well>
        <Heading
          column="8 / span 2"
          row="2 / span 3"
          size="s"
          text="God calls his people to be transformed by the renewing of their minds. This transformation is a daily pursuit."
        />
        <Well top>
          <Image
            column="5 / span 4"
            maxWidth="large"
            row="5 / span 5"
            src={data.Family.childImageSharp.fluid}
            transform="translateX(2rem)"
          />
        </Well>

        <Well>
          <Content
            column="9 / span 2"
            row="11 / span 1"
            type="sans"
            transform="translateX(-4rem)"
          >
            <p>
              <strong>
                Spanish Edition: <em>Renovando&nbsp;Tu&nbsp;Mente</em>
              </strong>
              <br />
              Since its launch in 2018, the{' '}
              <a href="https://es.ligonier.org/renovandotumente/">
                Spanish edition
              </a>{' '}
              of <em>Renewing Your Mind</em> has broadcasted on radio stations
              across Latin America, along with major online radio portals. This
              year alone, the program has been downloaded more than 1.6 million
              times.
            </p>
          </Content>
        </Well>

        <Number
          column="5 / span 3"
          description="Countries with Listeners"
          number="180"
          row="11 / span 1"
          transform="translateX(-3rem)"
        />

        <Well size="l" top>
          <Backdrop />
          <Subject column="12 / span 2" id="refnet" row="2 / span 1">
            REFNET
          </Subject>
          <Divider column="12 / span 2" row="2 / span 2" />
          <Heading
            center
            column="12 / span 2"
            row="3 / span 2"
            text="CURATING TRUSTWORTHY TEACHING 24/7"
          />
          <Well>
            <Image
              column="12 / span 2"
              maxWidth="large"
              row="5 / span 2"
              src={data.RefNet.childImageSharp.fluid}
              transform="translateY(15%)"
            />
          </Well>
          <Content center column="12 / span 2" row="7 / span 5">
            <p>
              Streaming trustworthy teaching and preaching twenty-four hours a
              day, <a href="https://refnet.fm">RefNet</a> is our popular
              internet radio app. It provides God-centered content for growing
              Christians, now with listeners in more than 180 countries.
            </p>
            <p>
              RefNet features trusted teachers including Alistair Begg, John
              MacArthur, R.C. Sproul, and the Ligonier Teaching Fellows. The
              daily schedule also includes Bible readings, audiobooks, music,
              and more&mdash;combining to bring you fresh spiritual
              encouragement every day.
            </p>
            <p>
              RefNet draws on Ligonier’s extensive library of resources and
              partners with other respected Reformed ministries to be a trusted
              alternative to traditional Christian radio.
            </p>
          </Content>
        </Well>
      </Grid>
    )}
  />
)

const Backdrop = styled.div`
  background: ${(p) => p.theme.colors.tan};
  bottom: -40px;
  left: -40px;
  position: absolute;
  right: -40px;
  top: -40px;
  @media (min-width: ${(p) => p.theme.breakpoints.small}) {
    bottom: -50px;
    left: -25vw;
    right: -25vw;
    top: -50px;
  }
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-column: 11;
    -ms-grid-column-span: 4;
    -ms-grid-row: 1;
    -ms-grid-row-span: 12;
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

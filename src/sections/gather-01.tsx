import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import NumbersLarge from '../components/numbersLarge'
import Subject from '../components/subject'
import Well from '../components/well'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query Gather01Query {
        Conference: file(relativePath: { eq: "Conference.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        ConferenceSeattle: file(relativePath: { eq: "ConferenceSeattle.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="gather01">
        <Well bottom>
          <Image
            column="2 / span 7"
            maxWidth="large"
            position="center bottom"
            row="1 / span 6"
            src={data.Conference.childImageSharp.fluid}
          />
        </Well>
        <Subject column="2 / span 5" row="7 / span 1">
          Made in the Image of God
        </Subject>
        <Divider column="2 / span 5" row="7 / span 2" />
        <Heading
          center
          column="2 / span 3"
          row="8 / span 2"
          text="TAKING OUR ANNUAL FAMILY REUNION ONLINE"
        />
        <Content center column="2 / span 4" row="10 / span 2">
          <p>
            Due to local restrictions responding to COVID-19, we were unable to
            meet in person for our 2021 National Conference. In God’s
            providence, and because of your support, Ligonier’s new on-campus
            studio was finished just in time to transition to an online event,
            <em>Made in the Image of God</em>. The livestream reached more than
            100,000 people around the world, helping Christians to draw needed
            strength from God’s Word as we considered our responsibility to
            serve our families, churches, and communities well amid a global
            crisis.
          </p>
        </Content>

        <Well size="l" top>
          <Backdrop />
          <Subject
            column="10 / span 4"
            id="regionalinternationalconferences"
            row="1 / span 2"
          >
            Online Events and Livestreams
          </Subject>
          <Divider column="10 / span 4" row="2 / span 1" />
          <Heading
            center
            column="10 / span 3"
            row="2 / span 3"
            text="TIMELY ENCOURAGEMENT FOR THE GLOBAL CHURCH"
          />
          <Image
            column="10 / span 4"
            maxWidth="large"
            position="left center"
            row="4 / span 3"
            size="contain"
            src={data.ConferenceSeattle.childImageSharp.fluid}
            transform="translateY(1.5rem)"
          />
          <Well>
            <Content center column="10 / span 4" row="7 / span 3">
              <p>
                While many in-person gatherings were postponed, we hosted online
                panel discussions with our Teaching Fellows and special guests
                to deliver timely encouragement to the people of God. Several
                Teaching Fellows also brought clear, accessible answers to your
                theological questions during Ask Ligonier livestreams.
              </p>
              <p>
                To Commemorate Reformation Day, we streamed Romans 8, a special
                online event in Spanish and Portuguese and dubbed in English.
                Growing Christians joined together from around the world to
                marvel at the rich truths of the gospel, emboldened to live as
                more than conquerors in Christ.
              </p>
            </Content>
          </Well>
          <NumbersLarge
            column="10 / span 4"
            description1="EVENTS IN A YEAR"
            description2="ONLINE EVENT &amp; STREAM VIEWS"
            number1="20+"
            number2="612,000+"
            row="10 / span 2"
          />
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
    -ms-grid-column: 9;
    -ms-grid-column-span: 6;
    -ms-grid-row: 1;
    -ms-grid-row-span: 12;
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

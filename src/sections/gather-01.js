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
        ConferenceSeattle: file(relativePath: { eq: "ConferenceSeattle.jpg" }) {
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
        <Well bottom={true}>
          <Image
            column={['2 / span 7', '2 / span 7', '2 / span 7', '2 / span 7']}
            maxWidth='large'
            position='center bottom'
            row={['1 / span 6', '1 / span 6', '1 / span 6', '1 / span 6']}
            src={data.Conference.childImageSharp.fluid}
          />
        </Well>
        <Subject
          column={['2 / span 5', '2 / span 5', '2 / span 5', '2 / span 5']}
          row={['7 / span 1', '7 / span 1', '7 / span 1', '7 / span 1']}
        >
          National Conference
        </Subject>
        <Divider
          column={['2 / span 5', '2 / span 5', '2 / span 5', '2 / span 5']}
          row={['7 / span 2', '7 / span 2', '7 / span 2', '7 / span 2']}
        />
        <Heading
          center={true}
          column={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
          row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
          text="GATHERING FOR AN ANNUAL FAMILY REUNION"
        />
        <Content
          center={true}
          column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
          row={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
        >
          <p>For over thirty years, our National Conference has been gathering thousands of Ligonier friends and supporters to hear trustworthy teaching from God’s Word. The conference is held over three days every spring in Orlando, Fla., and brings together Christians from many different backgrounds who make up the Ligonier family. Each year it is encouraging to see more firsttime attendees gathering from around the world. Your prayers and support enable our National Conference to serve as a great platform for equipping Christians with the truth.</p>
        </Content>

        <Well size="l" top={true}>
          <Backdrop />
          <Subject
            column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
            id="regionalinternationalconferences"
            row={['1 / span 2', '1 / span 2', '1 / span 2', '1 / span 2']}
          >
            Regional &amp; International Conferences
          </Subject>
          <Divider
            column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
            row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
          />
          <Heading
            center={true}
            column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
            row={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
            text="GATHERING LOCALLY AND AROUND THE WORLD"
          />
          <Image
            column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
            maxWidth='large'
            position='left center'
            row={['4 / span 3', '4 / span 3', '4 / span 3', '4 / span 3']}
            size='contain'
            src={data.ConferenceSeattle.childImageSharp.fluid}
            transform='translateY(1.5rem)'
          />
          <Well>
            <Content
              center={true}
              column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
              row={['7 / span 3', '7 / span 3', '7 / span 3', '7 / span 3']}
            >
              <p>Ligonier conferences are held nationally and internationally, bringing trusted teachers to live events for growing Christians. We bring gifted teachers to local gatherings so that as many people as possible can join with us. We give thanks to God for the thousands who do so every year.</p>
              <p>In addition to our popular biennial West Coast Conference, Ligonier hosts regional conferences in many states each year. Internationally, conferences have taken place in Germany, Northern Ireland, and Mexico. Future events are planned for the United Kingdom and other European countries, as well as Canada and Asia.</p>
            </Content>
          </Well>
          <NumbersLarge
            column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
            description1='EVENTS IN A YEAR'
            description2='NUMBER OF ATTENDEES'
            number1='20+'
            number2='12,000+'
            row={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
          />
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
    left: -25vw;
    right: -25vw;
    top: -50px;
  }
  @media (min-width: ${p => p.theme.breakpoints.large}) {
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
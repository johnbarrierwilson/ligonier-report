import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Subject from '../components/subject'
import Well from '../components/well'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query Gather03Query {
        AskAnything: file(relativePath: { eq: "AskAnything.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Travel01: file(relativePath: { eq: "Travel01.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Travel02: file(relativePath: { eq: "Travel02.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Travel03: file(relativePath: { eq: "Travel03.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="gather03">
        <Well bottom={true} size="l">
          <Backdrop />
          <Subject
            column='2 / span 2'
            row='2 / span 1'
          >
            Study Cruises and Tours
          </Subject>
          <Divider
            column='2 / span 2'
            row='2 / span 2'
          />
          <Heading
            center={true}
            column='2 / span 3'
            row='3 / span 2'
            text="Gathering and Exploring&nbsp;Together"
          />
          <Image
            column='6 / span 3'
            maxWidth='large'
            position='center 30%'
            row='3 / span 3'
            src={data.Travel02.childImageSharp.fluid}
            transform='translateY(-2rem)'
          />
          <Well>
            <Content
              column='2 / span 4'
              row='9 / span 4'
            >
              <p>Ligonier Cruises gather ministry friends at sea for trustworthy teaching from God’s Word. Together they enjoy a memorable time with refreshing Christian fellowship set amid the glory of God’s creation. In addition to faithful teaching, Christians have the opportunity to meet like-minded believers. Popular destinations include Alaska, the Caribbean, and Europe.</p>
              <p>From historic sites in Israel to Germany to the British Isles, Ligonier tours take inquisitive Christians to the places where God has worked in church history. Ligonier Teaching Fellows travel with attendees to guide, to teach, and to explain why our history still matters today. These non&ndash;donor&ndash;funded tours provide a rare, first-hand opportunity for growing Christians to experience our family history together.</p>
            </Content>
          </Well>
          <Image
            column='2 / span 5'
            maxWidth='large'
            position='center 30%'
            row='5 / span 4'
            src={data.Travel01.childImageSharp.fluid}
          />
          <Well hide={true}>
            <Image
              column='6 / span 2'
              position='center 30%'
              row='8 / span 2'
              src={data.Travel03.childImageSharp.fluid}
              transform="translateX(3rem)"
            />
          </Well>
        </Well>

        <Subject
          column='9 / span 2'
          id="institute-expository-preaching"
          row='6 / span 1'
        >
          THE INSTITUTE FOR EXPOSITORY PREACHING
        </Subject>
        <Divider
          column='9 / span 2'
          row='6 / span 2'
        />
        <Heading
          center={true}
          column='9 / span 2'
          row='7 / span 2'
          text="TRAINING BIBLICAL EXPOSITORS"
        />
        <Content
          center={true}
          column='9 / span 2'
          row='9 / span 3'
        >
          <p>The Institute for Expository Preaching trains pastors, church leaders, and Bible teachers in the art of expository preaching. With over forty-five years in preaching and teaching ministry, Dr. Steven Lawson leads these events across the country and around the world. Each event is dedicated to the passionate preaching and exposition of the Word of God so that the glorious gospel of Jesus Christ can be heard more clearly from pulpits everywhere.</p>
        </Content>

        <Well>
          <Subject
            column='12 / span 2'
            id="ask-anything"
            row='2 / span 1'
          >
            ASK ANYTHING AND TRUTH &amp;&nbsp;CONSEQUENCES
          </Subject>
          <Divider
            column='12 / span 2'
            row='2 / span 2'
          />
          <Well>
            <Image
              column='12 / span 3'
              maxWidth='large'
              position="center 90%"
              row='9 / span 3'
              src={data.AskAnything.childImageSharp.fluid}
            />
          </Well>
          <Heading
            center={true}
            column='12 / span 2'
            row='3 / span 2'
            text="CONTENDING FOR THE FAITH"
          />
          <Content
            center={true}
            column='12 / span 2'
            row='5 / span 3'
          >
            <p>New to major college campuses across the United States, Ask Anything events provide a platform for Dr. Albert Mohler to answer students’ questions live. Dr. Mohler equips Christian students to contend earnestly for the faith once delivered to the saints. He is joined by other Teaching Fellows for the companion Truth and Consequences training seminar, which helps Christian students debunk the tenets of secularism and trains them in a biblical worldview. By God’s grace, your financial support is making these events possible for students.</p>
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
    left: -25vw;
    right: -25vw;
    top: -50px;
  }
  @media (min-width: ${p => p.theme.breakpoints.large}){
    -ms-grid-column: 1;
    -ms-grid-column-span: 6;
    -ms-grid-row: 1;
    -ms-grid-row-span: 12;
    bottom: 0;
    grid-column: 1 / span 6;
    grid-row: 1 / span 12;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`

export default IndexPage
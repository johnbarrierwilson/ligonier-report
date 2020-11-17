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
        TIEP: file(relativePath: { eq: "TIEP.jpg" }) {
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
        <Well bottom size="l">
          <Backdrop />
          <Subject column="2 / span 2" row="2 / span 1">
            Study Cruises and Tours
          </Subject>
          <Divider column="2 / span 2" row="2 / span 2" />
          <Heading
            center
            column="2 / span 3"
            row="3 / span 2"
            text="Gathering and Exploring&nbsp;Together"
          />
          <Image
            column="6 / span 3"
            maxWidth="large"
            position="center 30%"
            row="3 / span 3"
            src={data.Travel02.childImageSharp.fluid}
            transform="translateY(-2rem)"
          />
          <Well>
            <Content column="2 / span 4" row="9 / span 4">
              <p>
                Ligonier Cruises gather ministry friends at sea for trustworthy
                teaching from God’s Word. Together, they enjoy a memorable time
                with refreshing Christian fellowship set amid the glory of God’s
                creation. In addition to faithful teaching, Christians have the
                opportunity to meet like-minded believers. Popular destinations
                include Alaska, the Caribbean, and Europe.
              </p>
              <p>
                From historic sites in Israel to Germany to the British Isles,
                Ligonier tours take inquisitive Christians to the places where
                God has worked in church history. Ligonier Teaching Fellows
                travel with attendees to guide, to teach, and to explain why our
                history still matters today. These non&ndash;donor&ndash;funded
                tours provide a rare, firsthand opportunity for growing
                Christians to experience our family history together. We look
                forward to sailing again soon.
              </p>
            </Content>
          </Well>
          <Image
            column="2 / span 5"
            maxWidth="large"
            position="center 30%"
            row="5 / span 4"
            src={data.Travel01.childImageSharp.fluid}
          />
          <Well hide>
            <Image
              column="6 / span 2"
              position="center 30%"
              row="8 / span 2"
              src={data.Travel03.childImageSharp.fluid}
              transform="translateX(3rem)"
            />
          </Well>
        </Well>

        <Subject
          column="10 / span 3"
          id="institute-expository-preaching"
          row="2 / span 1"
        >
          THE INSTITUTE FOR EXPOSITORY PREACHING
        </Subject>
        <Divider column="10 / span 2" row="2 / span 2" />
        <Heading
          center
          column="10 / span 4"
          row="3 / span 1"
          text="TRAINING BIBLICAL EXPOSITORS"
        />
        <Content column="10 / span 4" row="4 / span 3">
          <p>
            To fight the worldwide famine of the knowledge of God, the Institute
            for Expository Preaching trains pastors, church leaders, and Bible
            teachers in the art of expository preaching. With more than
            forty-five years in preaching and teaching ministry, Dr. Steven
            Lawson leads these events across the country and around the world.
          </p>

          <p>
            Each concentrated, three-day seminar is dedicated to the passionate
            preaching of the Word of God. Focused modules help growing
            expositors learn the ins and outs of proclaiming God’s sovereignty
            in salvation, exhorting the church in the pursuit of holiness,
            preaching with evangelistic zeal, and more. As Christian leaders
            sharpen their ability to expound the Scriptures, the glorious gospel
            of Jesus Christ is heard more clearly from pulpits everywhere and
            the church is strengthened in the knowledge of the Lord.
          </p>
        </Content>
        <Well>
          <Image
            column="9 / span 5"
            maxWidth="large"
            position="center 90%"
            row="8 / span 5"
            src={data.TIEP.childImageSharp.fluid}
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

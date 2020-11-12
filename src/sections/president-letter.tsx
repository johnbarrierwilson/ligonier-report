import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Image from '../components/image'
import Subject from '../components/subject'
import Well from '../components/well'

import ChrisLarsonSignature from '../images/ChrisLarsonSignature.png'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query PresidentLetterQuery {
        ChrisLarson: file(relativePath: { eq: "ChrisLarson.png" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="presidentletter">
        <Well bottom>
          <Backdrop />
          <Image
            column="3 / span 3"
            position="center 20%"
            president
            row="4 / span 6"
            src={data.ChrisLarson.childImageSharp.fluid}
          />
        </Well>
        <Well top>
          <Subject column="9 / span 4" row="2 / span 1">
            Dear Friend
          </Subject>
          <Divider column="9 / span 4" row="2 / span 2" />
          <Content column="9 / span 4" row="4 / span 7">
            <p>
              As we entered 2020, none of us could have imagined the challenges
              our world would face. The COVID-19 health crisis, economic
              turmoil, and social and political upheaval were beyond what most
              of us have experienced in any year prior. However, we know that
              none of these trials have fallen outside the sovereign purposes of
              God. In fact, we believe the Lord prepared Ligonier to serve the
              global church at such a time as this. By His grace, more people
              than ever are seeking out faithful biblical teaching from this
              ministry.
            </p>
            <p>
              When we proclaim, teach, and defend the truth of God’s holiness,
              it provides eternal hope in Jesus Christ. That’s why it was Dr.
              R.C. Sproul’s vision to have Ligonier in the middle of a
              flourishing of Reformed theology in service to the church
              throughout the world. Committed to this calling of discipleship,
              the Lord provided as we opened our online teaching series library
              to people around the globe during stay-at-home orders. Through
              thousands of hours of teaching, numerous livestreams and online
              events, new outreaches and podcasts, and landmark translation
              efforts, more than twenty million people have been reached this
              year with the hope that they will better understand the holiness,
              sovereignty, and saving grace of God.
            </p>
            <p>
              And as the spiritual need grows daily, Ligonier’s opportunity to
              serve more people in more places is growing. The Lord is our
              steadfast anchor in every storm, and He is working all things
              together for the good of His people and the glory of His name. As
              we approach our fiftieth year of ministry in 2021, demand for
              trustworthy Bible teaching from Ligonier has never been higher.
              This ministry report gives only a glimpse into the many outreaches
              you have made possible by your prayers and financial support. We
              are grateful to God for you, for you share in this work. Please
              join us in praying for faithful, fruitful ministry in the years to
              come.
            </p>
            <br />
            <p style={{ textIndent: '0px' }}>
              It is a privilege to serve with you to advance the gospel. Thank
              you.
            </p>
            <br />
            <p style={{ textIndent: '0px' }}>Yours in Christ,</p>
            <br />
            <img
              src={ChrisLarsonSignature}
              height="auto"
              width="225px"
              alt="Chris Larson's signature"
            />
            <br />
            <p style={{ textIndent: '0px' }}>Chris Larson</p>
            <p style={{ textIndent: '0px' }}>President &amp; CEO</p>
          </Content>
        </Well>
      </Grid>
    )}
  />
)

const Backdrop = styled.div`
  background: ${(p) => p.theme.colors.tanDark};
  bottom: 50%;
  left: -40px;
  position: absolute;
  right: -40px;
  top: -40px;
  @media (min-width: ${(p) => p.theme.breakpoints.small}) {
    bottom: 50%;
    left: -25vw;
    right: -25vw;
    top: -50px;
  }
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-column: 1;
    -ms-grid-column-span: 7;
    -ms-grid-row: 1;
    -ms-grid-row-span: 12;
    bottom: 0;
    grid-column: 1 / span 7;
    grid-row: 1 / span 12;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`

export default IndexPage

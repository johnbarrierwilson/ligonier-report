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
        <Well bottom={true}>
          <Backdrop />
          <Image
            column={['3 / span 3', '3 / span 3', '3 / span 3', '3 / span 3']}
            position="center 20%"
            row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
            src={data.ChrisLarson.childImageSharp.fluid}
          />
        </Well>
        <Well size="l" top={true}>
          <Subject
            column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
            row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
          >
            Dear Friend
          </Subject>
          <Divider
            column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
            row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
          />
          <Content
            column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
            row={['4 / span 7', '4 / span 7', '4 / span 7', '4 / span 7']}
          >
            <p>We moved into a new year with a deepened trust in our sovereign God. Without our beloved founder, our steps were tentative at first, but the pace of ministry quickened in the following weeks and months. It’s almost as if a spotlight was turned toward Ligonier this year. With thanksgiving to God for His mercy, we can report to you that more people than ever are seeking out biblical and theological teaching through this ministry.</p>
            <p>Dr. Sproul and I often discussed his vision for the future. He had in mind for us to have a growing, global outreach—as long as we are faithful. Ligonier stands on the authority of God’s Word and the gospel of Jesus Christ. If we lose that, we’ve lost everything.</p>
            <p>I believe that R.C.’s greatest gift to Ligonier was a clear identity. We know who we are. And this year, out of the hundreds of hours of conferences and classroom instruction, thousands of pages published and study Bibles distributed, hundreds of thousands of minutes broadcast and streamed, more than six million people have been helped to better understand who God is, who they are, and how the Lord is calling them to live in this world.</p>
            <p>This ministry report only hints at the many unique outreaches the Lord is doing through Ligonier and through your support. Please take a few minutes and read through an overview of our work this year and the work we hope to do in the coming year. Would you now and in the months ahead commit to praying for our shared labor for the kingdom of God as the Lord brings Ligonier Ministries to your mind?</p>
            <br/>
            <p style={{textIndent: '0px'}}>Thank you for standing with us.</p>
            <br/>
            <p style={{textIndent: '0px'}}>Soli Deo gloria,</p>
            <br/>
            <img src={ChrisLarsonSignature} height={'auto'} width={'225px'} alt="Chris Larson's signature" />
            <br/>
            <p style={{textIndent: '0px'}}>Chris Larson</p>
            <p style={{textIndent: '0px'}}>President &amp; CEO</p>
          </Content>
        </Well>
      </Grid>
    )}
  />
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.tanDark};
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
    grid-column: 1 / span 7;
    grid-row: 1 / span 12;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`

export default IndexPage
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Content from '../components/content'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Well from '../components/well'

import IntroductionPattern from '../images/IntroductionPattern.png'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IntroductionGatherQuery {
        IntroductionGather: file(relativePath: { eq: "IntroductionGather.png" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="introductiongather">
        <Backdrop />
        <Well size="l">
          <Image
            column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
            row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
            size="contain"
            src={data.IntroductionGather.childImageSharp.fluid}
          />
        </Well>
        <Well size="l">
          <Heading
            column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
            row={['4 / span 1', '4 / span 1', '4 / span 1', '4 / span 1']}
            size="xl"
            text="Gather"
          />
          <Content
            column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
            row={['8 / span 3', '8 / span 3', '8 / span 3', '8 / span 3']}
            type="deck"
          >
            <p>Iron sharpens iron. Every year, in cities around the world and online, Ligonier Ministries gathers Christians at events to study God’s Word for mutual edification. It’s a privilege to meet, serve, and learn from God’s people. Our aim is to bless the local church and strengthen its members for greater service. Thank you for joining&nbsp;us.</p>
          </Content>
        </Well>
      </Grid>
    )}
  />
)

const Backdrop = styled('div')`
  background: #efeded;
  background-image: url(${IntroductionPattern});
  background-size: 500px 500px;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    grid-column: 1 / span 14;
    grid-row: 1 / span 12;
    position: relative;
  }
`

export default IndexPage
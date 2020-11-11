import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Blockquote from '../components/blockquote'
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
      query StoryDougQuery {
        Doug: file(relativePath: { eq: "StoryDoug.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="storydoug">
        <Backdrop />
        <Subject column="3 / span 1" row="2 / span 2">
          Testimony
        </Subject>
        <Divider column="3 / span 1" row="3 / span 1" />
        <Well bottom>
          <Image
            column="3 / span 3"
            maxWidth="large"
            row="4 / span 6"
            size="contain"
            src={data.Doug.childImageSharp.fluid}
          />
        </Well>
        <Heading center column="3 / span 2" row="10 / span 1">
          Doug,
          <br />
          <em>Los&nbsp;Angeles</em>
        </Heading>
        <Content column="10 / span 3" row="3 / span 3">
          <p>
            “I wasn’t actively practicing or able to articulate what I said I
            believed. My dad sent over a Ligonier Conference Q&A, and on a free
            weekend I sat down and watched one&hellip;and then another and
            another&hellip;and I could not stop watching. It was my discovery of
            theology, the doctrines of grace, and the provision of a system of
            belief.
          </p>
          <p>
            Since then, I’ve been to two Ligonier conferences in Seattle. It
            felt like an eternity before I finally went to one since I had
            watched so many online. It is interesting that&hellip;
          </p>
        </Content>
        <Blockquote column="8 / span 5" row="6 / span 2">
          <p>
            WHEN YOU HEAR THE WORD PREACHED IN PERSON, IT IS OFTEN MORE
            POWERFUL.
          </p>
        </Blockquote>
        <Content column="10 / span 3" row="7 / span 5">
          <p>
            I now know that I’m a third-generation Ligonier student. When my
            grandma passed away, I got her copy of <em>The Holiness of God</em>{' '}
            from one of the first printings. It’s pretty special to have such a
            classic. Like R.C. said, there’s a gap between Sunday school and
            seminary. Ligonier serves to fill that gap in a format that is
            scalable and digestible for many churches out there that don’t have
            the resources to produce this kind of material.”
          </p>
        </Content>
        <Well top>
          <Divider column="10 / span 3" row="10 / span 2" />
        </Well>
      </Grid>
    )}
  />
)

const Backdrop = styled.div`
  background: ${(p) => p.theme.colors.gray};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-column: 2;
    -ms-grid-column-span: 12;
    -ms-grid-row: 2;
    -ms-grid-row-span: 10;
    grid-column: 2 / span 12;
    grid-row: 2 / span 10;
  }
`

export default IndexPage


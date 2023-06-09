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
      query FellowSinclairQuery {
        FellowSinclair: file(relativePath: { eq: "FellowFerguson.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="fellowsinclair">
        <Backdrop />
        <Subject column="10 / span 4" inverted row="2 / span 2">
          Teaching Fellow
        </Subject>
        <Divider column="10 / span 2" inverted row="3 / span 1" />
        <Heading
          column="10 / span 1"
          inverted
          row="4 / span 1"
          text="Sinclair Ferguson"
        />
        <Well bottom>
          <Image
            column="4 / span 3"
            fullWidth
            position="center 20%"
            row="4 / span 6"
            src={data.FellowSinclair.childImageSharp.fluid}
          />
        </Well>
        <Heading
          column="3 / span 2"
          inverted
          row="8 / span 2"
          size="s"
          text="“What was central to R.C., and what is central to Ligonier, is the message and the burden of the Holiness of God, the Glory of God, and the Honor of God.”"
        />
        <Content column="10 / span 3" inverted row="7 / span 4">
          <p>
            Dr. Sinclair B. Ferguson is one of the most well-respected Reformed
            theologians in the world today. He taught systematic theology at
            Westminster Theological Seminary in Philadelphia for many years, and
            he has also taught at other Reformed seminaries. He served as pastor
            of St. George’s Tron Church in Glasgow, Scotland, from 1998 to 2003
            and of First Presbyterian Church in Columbia, S.C., from 2005 until
            his retirement in 2013. Dr. Ferguson was a longtime friend of Dr.
            R.C. Sproul and has been a regular speaker at Ligonier conferences
            and events over the years.
          </p>
          <p>
            Dr. Ferguson began serving at Ligonier Ministries as a teaching
            fellow in 2010. He has a rare ability to present the truths of the
            Christian faith clearly and winsomely. He has written numerous
            books, including <em>The Whole Christ</em>, <em>In Christ Alone</em>
            , <em>Devoted to God</em>, <em>Some Pastors and Teachers</em>,{' '}
            <em>In the Year of Our Lord</em>, and <em>Maturity</em>. He has also
            recorded several video teaching series with Ligonier. Dr. Ferguson,
            having now retired to his native Scotland, continues to write and
            speak.
          </p>
        </Content>
      </Grid>
    )}
  />
)

const Backdrop = styled.div`
  background: ${(p) => p.theme.colors.teal};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-column: 1;
    -ms-grid-column-span: 14;
    -ms-grid-row: 1;
    -ms-grid-row-span: 12;
    grid-column: 1 / span 14;
    grid-row: 1 / span 12;
    position: relative;
  }
`

export default IndexPage

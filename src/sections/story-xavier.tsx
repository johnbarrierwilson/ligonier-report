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
      query StoryXavierQuery {
        Xavier: file(relativePath: { eq: "StoryXavier.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="storyxavier">
        <Backdrop />
        <Subject column="3 / span 1" row="2 / span 2">
          Testimony
        </Subject>
        <Divider column="3 / span 1" row="3 / span 1" />
        <Well bottom>
          <Image
            column="3 / span 3"
            maxWidth="large"
            position="center 20%"
            row="4 / span 6"
            src={data.Xavier.childImageSharp.fluid}
          />
        </Well>
        <Heading center column="3 / span 2" row="10 / span 2">
          Xavier,
          <br />
          <em>San&nbsp;Francisco</em>
        </Heading>
        <Blockquote column="9 / span 4" indent row="3 / span 3" top>
          <p>
            “Shortly after I became a Christian, one of my coworkers gave me a
            copy of <em>Tabletalk</em> and&nbsp;said,
          </p>
        </Blockquote>
        <Content column="10 / span 3" row="7 / span 3">
          <p>
            ‘This might be interesting for you to read.’ It blew me away with
            the thoughtfulness around the theology and the way the magazine is
            laid out. It made a real impact on me.
          </p>
          <p>
            After a year or two, I became a Ministry Partner and began listening
            to the monthly messages, as well as <em>Renewing Your Mind</em>. I
            was just devouring any content that I could at that time.
          </p>
          <p>
            Teaching from Ligonier has given me greater discernment in church
            life and has given me the foundation in my faith I needed to start
            teaching my kids. They ask questions at random times: questions
            about God, things God created, etc. If I hadn’t learned Reformed
            theology&mdash;reading <em>Tabletalk</em> and listening to{' '}
            <em>Renewing Your Mind</em>&mdash;I never would have had a
            foundation in theology to help my kids understand the fundamental
            elements of the faith.”
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


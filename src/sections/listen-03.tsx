import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Numbers from '../components/numbers'
import Podcasts from '../components/podcasts'
import Subject from '../components/subject'
import Well from '../components/well'

import Podcast01 from '../images/Podcast01.jpg'
import Podcast02 from '../images/Podcast02.jpg'
import Podcast03 from '../images/Podcast03.jpg'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query Listen03Query {
        FatherSon: file(relativePath: { eq: "FatherSon.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="listen03">
        <Well bottom>
          <Image
            column="2 / span 7"
            maxWidth="large"
            position="center 30%"
            row="1 / span 4"
            src={data.FatherSon.childImageSharp.fluid}
          />
        </Well>
        <Subject column="2 / span 5" row="5 / span 1">
          Platforms
        </Subject>
        <Divider column="2 / span 5" row="5 / span 2" />
        <Heading center column="2 / span 4" row="6 / span 2">
          Streaming
          <br />
          Trustworthy Teaching
        </Heading>
        <Content center column="2 / span 4" row="7 / span 4">
          <p>
            Ligonier teaching resources can now be accessed in more ways than
            ever. Whether it’s video or audio, trusted Bible teaching is
            available wherever you like to tune in—
            <a href="https://www.youtube.com/user/LigonierMinistries">
              YouTube
            </a>
            , Amazon Prime Video, Alexa, and Roku.
          </p>
          <p>
            We are reaching more people than ever before with the knowledge of
            God’s holiness. Across all of our online platforms, students watch
            millions of hours of Ligonier videos each year. On YouTube alone,
            this equates to more than five hundred years of continuous playback
            in 2020.
          </p>
          <p>
            <em>Renewing Your Mind</em> and messages from National Conferences
            also air on NRBTV, reaching up to forty-five million households with
            the truth of God’s Word.
          </p>
        </Content>
        <Well top>
          <Numbers
            column="2 / span 4"
            description="YOUTUBE CHANNEL PLAYS PER&nbsp;MONTH"
            number="1,800,000+"
            row="11 / span 1"
          />
        </Well>

        <Well size="l" top>
          <Backdrop />
          <Subject column="10 / span 4" id="podcasts" row="2 / span 1">
            Podcasts
          </Subject>
          <Divider column="10 / span 4" row="2 / span 2" />
          <Well bottom>
            <Podcasts
              column="10 / span 4"
              row="9 / span 2"
              transform="translateY(-2rem)"
            >
              <img
                src={Podcast01}
                alt="five minutes in church history podcast cover"
              />
              <img
                src={Podcast02}
                alt="the westminster shorter catechism podcast cover"
              />
              <img
                src={Podcast03}
                alt="open book with stephen nichols podcast cover"
              />
            </Podcasts>
          </Well>
          <Heading center column="10 / span 3" row="3 / span 2">
            Sharing
            <br />
            Timeless&nbsp;Truths
          </Heading>
          <Content center column="10 / span 4" row="5 / span 4">
            <p>
              Our featured podcasts provide spiritual food to growing Christians
              wherever they are, and we’ve expanded our library to meet the
              surging demand for trustworthy audio teaching.
            </p>
            <p>
              In January, we launched the{' '}
              <a href="https://ask.ligonier.org/podcast">
                <em>Ask Ligonier</em>
              </a>{' '}
              podcast. Each week, our Teaching Fellows and special guests draw
              from years of careful study to answer biblical and theological
              questions from listeners like you.
            </p>
            <p>
              <a href="https://lutherinrealtime.com/">
                <em>Luther: In Real Time</em>
              </a>{' '}
              launched in October, allowing you to walk with Martin Luther 500
              years to the day from his heresy charges to his famous stand for
              God’s Word at the Diet of Worms.
            </p>
            <p>
              A new podcast from Dr. Sproul is coming in early 2021. We’re eager
              for you to hear and share it once the first episode releases in
              January.
            </p>
            <p>
              Thanks to you, <em>Renewing Your Mind</em>, RefNet, and all our
              podcasts are offered freely. Tune in on iTunes, Google Play, and
              wherever you listen to podcasts.
            </p>
          </Content>
          <Well top>
            <Numbers
              column="10 / span 4"
              description="MONTHLY PODCAST LISTENS"
              number="1,500,000+"
              row="11 / span 1"
            />
          </Well>
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
    position: relative;
    left: 0;
    right: 0;
    top: 0;
  }
`

export default IndexPage

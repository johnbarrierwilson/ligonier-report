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
        <Well bottom={true}>
          <Image
            column={['2 / span 7', '2 / span 7', '2 / span 7', '2 / span 7']}
            position='center 30%'
            row={['1 / span 4', '1 / span 4', '1 / span 4', '1 / span 4']}
            src={data.FatherSon.childImageSharp.fluid}
          />
        </Well>
        <Subject
          column={['2 / span 5', '2 / span 5', '2 / span 5', '2 / span 5']}
          row={['5 / span 1', '5 / span 1', '5 / span 1', '5 / span 1']}
        >
          Platforms
        </Subject>
        <Divider
          column={['2 / span 5', '2 / span 5', '2 / span 5', '2 / span 5']}
          row={['5 / span 2', '5 / span 2', '5 / span 2', '5 / span 2']}
        />
        <Heading
          center={true}
          column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
          row={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
          text="STREAMING TRUSTWORTHY TEACHING"
        />
        <Content
          center={true}
          column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
          row={['7 / span 4', '7 / span 4', '7 / span 4', '7 / span 4']}
        >
          <p>Ligonier teaching resources can now be accessed in more ways than ever. Whether it’s video or audio, trusted Bible teaching is available wherever you like to tune in—YouTube, Amazon Prime Video, Alexa, and Roku.</p>
          <p>We are reaching more people than ever before with the knowledge of God’s holiness. Across all of our online platforms, students watch hundreds of thousands of hours of Ligonier videos each year. On YouTube alone, this now equates to nearly two hundred years of continuous playback.</p>
          <p><em>Renewing Your Mind</em> and messages from National Conferences also air on NRB TV, reaching up to forty-five million households with the truth of God’s Word.</p>
        </Content>
        <Well top={true}>
          <Numbers
            column={['2 / span 4', '2 / span 4', '2 / span 4', '2 / span 4']}
            description='YOUTUBE CHANNEL PLAYS PER&nbsp;MONTH'
            number='500,000+'
            row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
          />
        </Well>

        <Well size="l" top={true}>
          <Backdrop />
          <Subject
            column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
            name="podcasts"
            row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
          >
            Podcasts
          </Subject>
          <Divider
            column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
            row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
          />
          <Well bottom={true}>
            <Podcasts
              column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
              row={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
              transform="translateY(-2rem)"
            >
              <img src={Podcast01} alt='five minutes in church history podcast cover' />
              <img src={Podcast02} alt='the westminster shorter catechism podcast cover' />
              <img src={Podcast03} alt='open book with stephen nichols podcast cover' />
            </Podcasts>
          </Well>
          <Heading
            center={true}
            column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
            row={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
            text="SHARING TIMELESS&nbsp;TRUTHS"
          />
          <Content
            center={true}
            column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
            row={['5 / span 4', '5 / span 4', '4 / span 5', '5 / span 4']}
          >
            <p>Our featured podcasts provide spiritual food for growing Christians wherever they are. <em>5 Minutes in Church History</em>, with Stephen Nichols, travels back in time to explore the lives of the saints who came before us and the events which shaped their journey.</p>
            <p><em>Open Book</em> allows you to step into Dr. R.C. Sproul’s library. Glean new insights into the books which have most influenced him and other pastors and theologians.</p>
            <p><em>The Westminster Shorter Catechism</em> is a 107-episode podcast that features Dr. Sinclair Ferguson reading each question and answer in its entirety. This catechism has been beloved by Christians around the world for generations.</p>
            <p>Thanks to you, <em>Renewing Your Mind</em>, RefNet, and all our podcasts are offered freely. Tune in on iTunes, Google Play, and wherever you listen to podcasts.</p>
          </Content>
          <Well top={true}>
            <Numbers
              column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
              description='MONTHLY PODCAST LISTENS'
              number='1,000,000+'
              row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
            />
          </Well>
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
    left: -20vw;
    right: -20vw;
    top: -50px;
  }
  @media (min-width: ${p => p.theme.breakpoints.medium}){
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
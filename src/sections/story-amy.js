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
      query StoryAmyQuery {
        Amy: file(relativePath: { eq: "StoryAmy.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="storyamy">
        <Backdrop />
        <Subject
          column={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
          row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
        >
          Testimony
        </Subject>
        <Divider
          column={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
          row={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
        />
        <Well bottom={true}>
          <Image
            column={['3 / span 3', '3 / span 3', '3 / span 3', '3 / span 3']}
            row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
            size="contain"
            src={data.Amy.childImageSharp.fluid}
          />
        </Well>
        <Heading
          center={true}
          column={['3 / span 3', '3 / span 3', '3 / span 3', '3 / span 3']}
          row={['10 / span 1', '10 / span 1', '10 / span 1', '10 / span 1']}
          text="Amy, Washington D.C."
        />
        <Content
          column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
          row={['3 / span 3', '3 / span 3', '3 / span 3', '3 / span 3']}
        >
          <p>"I remember hearing R.C. Sproul preach a sermon many years ago about how we think we choose God, but the Bible says that God chooses us. From that moment on, I knew I needed to know the Bible better because what I was believing was wrong. Ligonier has always been a trustworthy place to turn for good teaching, and it has grown along with me, giving me more choices even beyond my <em>Tabletalk</em> devotional and <em>Renewing Your Mind</em>.</p>
        </Content>
        <Blockquote
          column={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
          row={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
        >
          <p>Now I listen to RefNet&nbsp;every day.</p>
        </Blockquote>
        <Content
          column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
          row={['7 / span 4', '7 / span 4', '7 / span 4', '7 / span 4']}
        >
          <p>I have my phone with me all the time, and I can listen anywhere. I can be traveling, in my car, waking up in the morning, or going to sleep at night and get a few minutes of good theology. This is the steady, consistent teaching of the Word of God. It’s needed in my life.</p>
          <p>I appreciate that R.C. Sproul gathered men of similar skills and had the overall vision to build something of real substance. Of course, we know that God did the building and He just used R.C. to do that.”</p>
        </Content>
        <Well top={true}>
          <Divider
            column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
            row={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
          />
        </Well>
      </Grid>
    )}
  />
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.gray};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    grid-column: 2 / span 12;
    grid-row: 2 / span 10;
  }
`

export default IndexPage
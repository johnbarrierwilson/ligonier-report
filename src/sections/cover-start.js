import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Content from '../components/content'
import DocumentTitle from '../components/documentTitle'
import Grid from '../components/grid'
import Image from '../components/image'
import Well from '../components/well'

import IntroductionPattern from '../images/IntroductionPattern.png'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query CoverStartQuery {
        file(relativePath: { eq: "CoverStart.png" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid>
        <Backdrop />
        <Well>
          <DocumentTitle cover={true} />
          <Well size="l">
            <Image
              column={['6 / span 4', '6 / span 4', '6 / span 4', '6 / span 4']}
              row={['4 / span 5', '4 / span 5', '4 / span 5', '4 / span 5']}
              size="contain"
              src={data.file.childImageSharp.fluid}
            />
          </Well>
          <Content
            column={['5 / span 6', '5 / span 6', '5 / span 6', '5 / span 6']}
            row={['9 / span 4', '9 / span 4', '9 / span 4', '9 / span 4']}
            type="deck-intro"
          >
            <p>For the earth will be filled with the knowledge of the glory of the Lord as the waters cover the sea.</p>
            <span>Habakkuk 2:14</span>
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
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Well from '../components/well'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query TeachingFellowsQuery {
        TeachingFellowsImage: file(relativePath: { eq: "2018_TF_Group_Wide_RGB.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="teachingfellows">
        <Backdrop />
        <Well size="l">
          <Heading
            column='2 / span 6'
            inverted={true}
            row='11 / span 1'
            text='The Ligonier Teaching Fellows'
          />
          <Divider
            column='2 / span 2'
            inverted={true}
            row='11 / span 2'
          />
          <Well bottom={true}>
            <Image
              column='2 / span 12'
              fullWidth={true}
              position='center 20%'
              row='2 / span 8'
              src={data.TeachingFellowsImage.childImageSharp.fluid}
            />
          </Well>
          <Content
            column='10 / span 4'
            inverted={true}
            row='10 / span 3'
          >
            <p>The Teaching Fellows bring unique gifts and broad experience to Ligonier Ministries. They help us remain true to our founding purpose and inform our future outreach. Dr. R.C. Sproul and the board gathered this team of men to aid in present and future ministry. Trusting God for biblical and theological fidelity, we are grateful for this group of gifted&nbsp;teachers.</p>
          </Content>
        </Well>
      </Grid>
    )}
  />
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.teal};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: ${p => p.theme.breakpoints.large}) {
    grid-column: 1 / span 14;
    grid-row: 1 / span 12;
    position: relative;
  }
`

export default IndexPage
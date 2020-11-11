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
      query FellowGodfreyQuery {
        FellowGodfrey: file(relativePath: { eq: "FellowGodfrey.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="fellowgodfrey">
        <Backdrop />
        <Subject column="3 / span 4" inverted row="2 / span 2">
          Teaching Fellow
        </Subject>
        <Divider column="3 / span 2" inverted row="3 / span 1" />
        <Heading
          column="3 / span 2"
          inverted
          row="4 / span 1"
          text="W.&nbsp;Robert Godfrey"
        />
        <Well bottom>
          <Image
            column="10 / span 3"
            fullWidth
            position="center 20%"
            row="4 / span 6"
            src={data.FellowGodfrey.childImageSharp.fluid}
          />
        </Well>
        <Heading
          column="9 / span 2"
          inverted
          row="8 / span 2"
          size="s"
          text="“IT IS SO EXCITING TO SEE THAT THROUGH LIGONIER, FAITHFUL BIBLE TEACHING IS ABLE TO REACH MILLIONS OF PEOPLE AROUND THE WORLD AND INCREASINGLY TO REACH PEOPLE IN LANGUAGES OTHER THAN ENGLISH.”"
        />
        <Content column="3 / span 4" inverted row="8 / span 4">
          <p>
            Dr. W. Robert Godfrey served as president of Westminster Seminary
            California in Escondido, Calif., from 1993 to 2017, and he taught
            church history there as well for many years. He has also taught at
            many other seminaries throughout a distinguished academic teaching
            career. Dr. Godfrey first heard about Dr. R.C. Sproul when he was a
            student in seminary. Many years later, Dr. Godfrey became a regular
            speaker at Ligonier conferences and events, and he developed a
            friendship with Dr. Sproul.
          </p>
          <p>
            Dr. Godfrey began serving at Ligonier Ministries as a teaching
            fellow in 2010, and he is chairman of Ligonier’s board of directors.
            As a careful historian and committed churchman, Dr. Godfrey brings
            tremendous wisdom to our cultural moment as Ligonier seeks to serve
            the people of God. He has recorded a six-part Ligonier teaching
            series called <em>A Survey of Church History</em>, and his many
            books include <em>God’s Pattern for Creation</em>,{' '}
            <em>Reformation Sketches</em>, <em>An Unexpected Journey</em>, and{' '}
            <em>Learning to Love the Psalms</em>. Dr. Godfrey continues to speak
            and write, and he is president emeritus and professor emeritus of
            church history at Westminster Seminary California.
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


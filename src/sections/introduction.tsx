import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Content from '../components/content'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Label from '../components/label'
import Well from '../components/well'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IntroductionQuery {
        Piece01: file(relativePath: { eq: "piece_01.png" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Piece02: file(relativePath: { eq: "piece_02.png" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Piece03: file(relativePath: { eq: "piece_03.png" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="introduction">
        <Well>
          <Well>
            <Well>
              <Image
                center
                column="1 / span 3"
                maxWidth="small"
                position="top right"
                row="4 / span 6"
                size="495px 446px"
                src={data.Piece01.childImageSharp.fluid}
                transform="translate(-180px, -35px)"
              />
            </Well>
            <Heading
              column="2 / span 3"
              row="3 / span 1"
              size="xl"
              text="Read"
            />
            <Label column="1 / span 5" row="2 / span 1">
              <span>God revealed Himself in&nbsp;a&nbsp;book</span>
            </Label>
          </Well>

          <Well>
            <Well>
              <Image
                center
                column="9 / span 6"
                maxWidth="small"
                position="bottom left"
                row="1 / span 2"
                size="505px 377px"
                src={data.Piece02.childImageSharp.fluid}
                transform="translate(20px, -50px)"
              />
            </Well>
            <Heading
              column="10 / span 4"
              row="5 / span 1"
              size="xl"
              text="Listen"
            />
            <Label column="9 / span 5" row="6 / span 1">
              <span>Faith comes by hearing</span>
            </Label>
          </Well>

          <Well>
            <Well>
              <Image
                center
                column="3 / span 6"
                maxWidth="small"
                position="top center"
                row="10 / span 3"
                size="468px 414px"
                src={data.Piece03.childImageSharp.fluid}
                transform="translate(15px, 35px)"
              />
            </Well>
            <Heading
              column="7 / span 2"
              row="11 / span 1"
              size="xl"
              text="Gather"
            />
            <Label column="2 / span 4" row="9 / span 2">
              <span>Iron sharpens iron</span>
            </Label>
          </Well>

          <Well>
            <Content column="4 / span 2" row="5 / span 5">
              <p>
                In 1957, Dr. R.C. Sproul was confronted by the overwhelming
                holiness of God. That experience began a lifetime of pursuing a
                greater knowledge of God and birthed an unquenchable desire to
                lead others into a greater understanding of God and of
                themselves.
              </p>
              <p>
                More than fifty years later, we are humbled to survey the vast
                army of supporters that has risen to enable such important work.
                Thanks to you, the deep truths of God’s Word are finding their
                way into more places than ever before, and lives are being
                transformed by a growing knowledge of&nbsp;God.
              </p>
            </Content>
            <Content column="10 / span 2" row="8 / span 2">
              <p></p>
              <p>
                Every year, Ligonier Ministries provides more ways for
                Christians to read, listen, and gather around God's truth.
              </p>
              <p>
                Under God’s blessing, the outreach we’ve been able to accomplish
                together has continued to expand. This report is a celebration
                of all that you’ve enabled through your generosity and
                your&nbsp;prayers.
              </p>
            </Content>
          </Well>
        </Well>
      </Grid>
    )}
  />
)

export default IndexPage

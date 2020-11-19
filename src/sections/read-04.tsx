import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Numbers from '../components/numbers'
import Subject from '../components/subject'
import Well from '../components/well'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query Read04Query {
        Books: file(relativePath: { eq: "ReformationTrust.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Reading: file(relativePath: { eq: "LigonierWeb.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="read04">
        <Well bottom>
          <Backdrop />
          <Subject column="2 / span 4" row="2 / span 1">
            Publishing
          </Subject>
          <Divider column="2 / span 4" row="2 / span 2" />
          <Heading
            center
            column="2 / span 4"
            row="3 / span 2"
            text="Proclaiming the Historic Christian Faith"
          />
          <Image
            column="2 / span 4"
            maxWidth="large"
            row="5 / span 3"
            src={data.Books.childImageSharp.fluid}
          />
          <Content center column="2 / span 4" row="8 / span 3">
            <p>
              The gospel legacy of the Reformers lives on through our publishing
              efforts. Authored by trusted teachers of our own day, such as Dr.
              R.C. Sproul and the Ligonier Teaching Fellows, these books and
              resources stand resolutely on the Bible and seek to build up
              believers in their knowledge of God.
            </p>
            <p>
              New titles on discipleship, the doctrines of the Reformation, and
              the history of the church continue to steward the historic
              Christian faith for future generations. These volumes also fuel
              our partnerships with international ministries and provide
              trustworthy teaching for Christians around the world.
            </p>
          </Content>
          <Well>
            <Numbers
              column="2 / span 4"
              description="Resources given away in the past year"
              number="1,600,000+"
              row="11 / span 1"
            />
          </Well>
        </Well>

        <Well top>
          <Well size="xl" top>
            <Image
              column="7 / span 7"
              maxWidth="large"
              row="1 / span 5"
              src={data.Reading.childImageSharp.fluid}
            />
          </Well>
          <Well>
            <Subject column="8 / span 5" id="ligonier-org" row="6 / span 1">
              Ligonier.org
            </Subject>
          </Well>
          <Divider column="8 / span 5" row="6 / span 2" />
          <Heading
            center
            column="8 / span 3"
            row="7 / span 2"
            text="Supplying Your Most Trusted&nbsp;Bible Teaching"
          />
          <Content center column="8 / span 3" row="8 / span 3">
            <p>
              <a href="https://www.ligonier.org">Ligonier.org</a> provides a
              spiritual feast for growing Christians. More than eight thousand
              educational resources, including a vast library of articles,
              devotionals, and video and audio messages, are available to
              explore. Thanks to you, many of these resources are available for
              free, reaching millions of people every month.
            </p>
          </Content>
          <Well>
            <Heading
              column="12 / span 2"
              row="7 / span 3"
              size="s"
              text="THANKS TO OUR MINISTRY PARTNERS AND GENEROUS DONORS, MANY OF THESE RESOURCES ARE AVAILABLE FOR&nbsp;FREE."
            />
          </Well>
          <Numbers
            column="8 / span 6"
            description="Annual Visits to Ligonier.org"
            number="16,000,000+"
            row="11 / span 1"
          />
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
    -ms-grid-column: 1;
    -ms-grid-column-span: 6;
    -ms-grid-row: 1;
    -ms-grid-row-span: 12;
    bottom: 0;
    grid-column: 1 / span 6;
    grid-row: 1 / span 12;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`

export default IndexPage

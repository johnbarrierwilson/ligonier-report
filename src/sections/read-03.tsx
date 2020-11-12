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
      query Read03Query {
        Bay: file(relativePath: { eq: "TranslationBay.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Building: file(relativePath: { eq: "TranslationBuilding.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        City: file(relativePath: { eq: "TranslationCity.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Group: file(relativePath: { eq: "GroupAfrica.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="read03">
        <Subject column="2 / span 4" row="2 / span 1">
          Study Bible Translations
        </Subject>
        <Divider column="2 / span 4" row="2 / span 2" />
        <Heading center column="2 / span 4" row="3 / span 2">
          Bringing the <em>Reformation Study&nbsp;Bible</em> to&nbsp;Major World
          Languages
        </Heading>
        <Image
          column="7 / span 3"
          maxWidth="large"
          row="7 / span 3"
          src={data.City.childImageSharp.fluid}
        />
        <Well top>
          <Heading
            column="8 / span 2"
            row="3 / span 3"
            size="s"
            text="NEARLY ONE BILLION PEOPLE WORLDWIDE SPEAK ARABIC, FRENCH, OR PORTUGUESE. YET THEY LACK A STUDY BIBLE ROOTED IN THE HISTORIC CHRISTIAN FAITH AND REFORMED THEOLOGY."
            transform="translateX(2rem)"
          />
        </Well>
        <Image
          column="1 / span 5"
          maxWidth="large"
          row="5 / span 3"
          src={data.Bay.childImageSharp.fluid}
          transform="translateY(2rem)"
        />
        <Well>
          <Content column="2 / span 4" row="9 / span 2">
            <p>
              Translating the <em>Reformation Study Bible</em> into other
              languages is fueling Great Commission discipleship around the
              world. German, Korean, and Spanish editions are now available.
              Translation work is underway in three more languages: Arabic,
              French, and Portuguese. In total, nearly one billion people
              worldwide speak one of these three languages, yet they lack a
              study Bible rooted in the historic Christian faith and Reformed
              theology.
            </p>
            <p>
              These pioneering translations will strengthen and advance global
              gospel ministry, thanks to your generous support. When complete,
              it will mean a <em>Reformation Study Bible</em> is available in at
              least one language spoken on every continent in the world.
            </p>
          </Content>
        </Well>
        <Well bottom>
          <Image
            column="6 / span 2"
            maxWidth="large"
            row="4 / span 3"
            src={data.Building.childImageSharp.fluid}
            transform="translate(-1.5rem, 0.5rem)"
          />
        </Well>
        <Divider column="9 / span 2" row="11 / span 1" />

        <Well bottom top>
          <Backdrop />
          <Subject column="12 / span 2" id="bibles-for-africa" row="2 / span 1">
            Study Bibles for Africa
          </Subject>
          <Divider column="12 / span 2" row="2 / span 2" />
          <Heading
            center
            column="12 / span 2"
            row="3 / span 3"
            text="Equipping Church Leaders in&nbsp;Africa"
          />
          <Well bottom>
            <Image
              column="12 / span 2"
              position="left center"
              row="6 / span 2"
              size="contain"
              src={data.Group.childImageSharp.fluid}
              transform="translateY(-15%)"
            />
          </Well>
          <Content center column="12 / span 2" row="8 / span 4">
            <p>
              Thousands of pastors, church leaders, and students in ten African
              countries are receiving a free copy of the{' '}
              <em>Reformation Study Bible</em>, thanks to the strategic
              partnership between Ligonier Ministries and the Rosemary Jensen
              Bible Foundation. We have already sent more than 20,000 Bibles,
              with plans to distribute an additional 15,000 by 2028.
            </p>
            <p>
              This outreach is only possible with the support of visionary
              donors. Thank you for partnering with us. You are bringing the
              Word of God to growing Christians in lands where Bibles are
              expensive and trustworthy theological resources are rare.
            </p>
          </Content>
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
    -ms-grid-column: 11;
    -ms-grid-column-span: 4;
    -ms-grid-row: 1;
    -ms-grid-row-span: 12;
    bottom: 0;
    grid-column: 11 / span 4;
    grid-row: 1 / span 12;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`

export default IndexPage

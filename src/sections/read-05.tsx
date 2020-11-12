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
      query Read05Query {
        Book: file(relativePath: { eq: "ChristologyStatement.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        NoneOther: file(relativePath: { eq: "TranslationsNoneOther.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="read05">
        <Image
          column="2 / span 2"
          position="center 70%"
          row="1 / span 3"
          src={data.NoneOther.childImageSharp.fluid}
        />
        <Well>
          <Subject column="2 / span 2" row="4 / span 1">
            Translations
          </Subject>
          <Divider column="2 / span 2" row="4 / span 2" />
          <Heading
            center
            column="2 / span 3"
            row="5 / span 1"
            text="Taking the Truth to the Nations"
            transform="translateY(15%)"
          />
          <Content center column="2 / span 3" row="6 / span 4">
            <p>
              The English language contains a treasure trove of theological
              riches. Thanks to your prayerful and financial support, these
              resources are being distributed around the world in many
              additional languages.
            </p>
            <p>
              Teams of people are translating trustworthy teaching into the
              most-spoken languages on earth. With billions of people around the
              world, there is an immense global need for truth, and our aim is
              to assist the church as it takes the gospel to all nations.
            </p>
            <p>
              We hand-pick translators who combine fidelity to Scripture with an
              expert grasp of their language. Thanks to fruitful partnerships
              with ministries around the world, these translation efforts are
              increasing in Chinese, Farsi, French, and Spanish, and publishing
              continues in many other languages.
            </p>
          </Content>
          <Well size="l">
            <Numbers
              column="2 / span 4"
              description="Languages in which our resources have been translated"
              number="42"
              row="10 / span 2"
              transform="translateY(10%)"
            />
          </Well>
        </Well>

        <Well>
          <Subject
            column="6 / span 2"
            id="military-prison-chaplains"
            row="2 / span 1"
          >
            Military and Prison&nbsp;Chaplains
          </Subject>
          <Divider column="6 / span 2" row="2 / span 2" />
          <Heading
            center
            column="6 / span 2"
            row="3 / span 2"
            text="Serving Those In Need"
          />
          <Content center column="6 / span 2" row="5 / span 4">
            <p>
              Military chaplains serve those who are literally on the front
              lines. Your support is forming a spiritual supply line by
              providing gospel resources for troops as trustworthy books are
              freely distributed for those on active duty around the world.
            </p>
            <p>
              Prisoners write to us every month, hungry for the gospel and for
              resources to help them grow in Christ. Your support sends them
              care packages that include a special edition of the{' '}
              <em>Reformation Study Bible</em> and books by trusted teachers.
              Prison chaplains are also supplied with the teaching resources
              they need to serve those under their care.
            </p>
          </Content>
        </Well>

        <Well size="l" top>
          <Backdrop />
          <Subject
            column="10 / span 4"
            id="christology-statement"
            row="2 / span 1"
          >
            Christology Statement
          </Subject>
          <Divider column="10 / span 4" row="2 / span 2" />
          <Well>
            <Image
              column="10 / span 4"
              maxWidth="large"
              position="left center"
              row="4 / span 4"
              size="contain"
              src={data.Book.childImageSharp.fluid}
            />
          </Well>
          <Heading
            center
            column="10 / span 3"
            row="8 / span 2"
            text="Affirming the Biblical&nbsp;Christ"
          />
          <Content center column="10 / span 4" row="9 / span 4">
            <p>
              Who is Jesus, and what did He come to do? Many evangelicals are
              confused when it comes to answering these questions. The Ligonier
              Statement on Christology seeks to bring clarity where there is
              confusion. It carefully restates the Bible’s teaching about the
              person and work of Jesus Christ, the Word made flesh. With
              biblical testimony and theological precision, this statement
              proclaims that Jesus is truly God and truly man. Written for the
              glory of Christ and the edification of His people, it is available
              in English and twenty other major world languages.
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
    -ms-grid-column: 9;
    -ms-grid-column-span: 6;
    -ms-grid-row: 1;
    -ms-grid-row-span: 12;
    bottom: 0;
    grid-column: 9 / span 6;
    grid-row: 1 / span 12;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`

export default IndexPage

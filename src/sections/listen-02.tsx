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
      query Listen02Query {
        GirlBus: file(relativePath: { eq: "GirlBus.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 850) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        TeachingSeries: file(relativePath: { eq: "TeachingSeries.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="listen02">
        <Well bottom size="l">
          <Backdrop />
          <Subject column="2 / span 4" row="2 / span 1">
            Teaching Series
          </Subject>
          <Well>
            <Image
              column="1 / span 7"
              maxWidth="large"
              position="left center"
              row="3 / span 6"
              size="contain"
              src={data.TeachingSeries.childImageSharp.fluid}
            />
          </Well>
          <Heading
            center
            column="2 / span 3"
            row="8 / span 2"
            text="Digging Deep Into&nbsp;God's&nbsp;Word"
          />
          <Content center column="2 / span 4" row="10 / span 2">
            <p>
              For decades, our{' '}
              <a href="https://www.ligonier.org/learn/series/">
                video teaching series
              </a>{' '}
              have enabled Dr. R.C. Sproul and other gifted teachers to share
              the riches of Scripture with a wide audience. There are hundreds
              of topics available, designed to build up disciples in their
              knowledge of God and equip them to live for the glory of God.
            </p>
            <p>
              This expansive library weaves a rich tapestry of theology,
              apologetics, church history, biblical studies, and much more. Each
              message is less than thirty minutes in length, making it
              well-suited for your Sunday school, home group, or personal Bible
              study.
            </p>
            <p>
              Ligonier teaching series have been translated into several
              different languages, including Arabic, Korean, Portuguese, and
              Spanish. Thanks to your support, we are now also sharing series
              widely in Chinese and Farsi.
            </p>
          </Content>
        </Well>

        <Subject column="9 / span 5" id="ligonier-app" row="2 / span 1">
          Ligonier App
        </Subject>
        <Divider column="9 / span 5" row="2 / span 2" />
        <Heading
          center
          column="9 / span 3"
          row="3 / span 2"
          text="SERVING CHRISTIANS ON&nbsp;THE&nbsp;GO"
        />
        <Content center column="9 / span 4" row="4 / span 4">
          <p>
            The <a href="https://subsplash.com/ligonier/app">Ligonier app</a> is
            a daily gospel resource that provides instant access to a deep
            library of Christian teaching. It puts trustworthy teaching in the
            palm of your hand, gathering together daily audio, video, devotional
            articles, and much more.
          </p>
          <p>
            Accessed more than 6.1 million times annually, the app is a go-to
            resource for growing Christians. In addition to our devotional
            content and media archives, you’ll also find easy access to Ask
            Ligonier, our biblical and theological chat service.
          </p>
          <p>
            By God’s grace, and because of your support, the Ligonier app is
            available free to all users. Thank you.
          </p>
        </Content>
        <Well>
          <Image
            column="9 / span 4"
            maxWidth="large"
            row="7 / span 3"
            src={data.GirlBus.childImageSharp.fluid}
            transform="translateY(2rem)"
          />
        </Well>
        <Numbers
          column="9 / span 4"
          description="Annual Ligonier App Launches"
          number="6,140,000+"
          row="11 / span 1"
        />
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
    -ms-grid-column-span: 7;
    -ms-grid-row: 1;
    -ms-grid-row-span: 12;
    bottom: 0;
    grid-column: 1 / span 7;
    grid-row: 1 / span 12;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`

export default IndexPage

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

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
      query Read02Query {
        Brown: file(relativePath: { eq: "BibleBrown.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Gray: file(relativePath: { eq: "BibleGray.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Leather: file(relativePath: { eq: "BibleLeather.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Standard: file(relativePath: { eq: "BibleStandard.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="read02">
        <Subject column="2 / span 4" row="2 / span 1">
          <em>Reformation Study&nbsp;Bible</em>
        </Subject>
        <Divider column="2 / span 4" row="2 / span 2" />
        <Heading
          center
          column="2 / span 4"
          row="3 / span 2"
          text="Deepening Your Study of&nbsp;God's&nbsp;Word"
        />
        <Well hide>
          <Image
            column="2 / span 4"
            row="5 / span 6"
            size="contain"
            src={data.Standard.childImageSharp.fluid}
          />
        </Well>
        <Image
          column="6 / span 4"
          maxWidth="large"
          row="1 / span 6"
          size="contain"
          src={data.Brown.childImageSharp.fluid}
          transform="translateY(-2rem)"
        />
        <Content column="10 / span 4" row="7 / span 3">
          <p>
            The{' '}
            <a href="https://reformationstudybible.com/">
              <em>Reformation Study Bible</em>
            </a>{' '}
            guides growing Christians through the Word of God with trusted
            contributions from seventy-five distinguished scholars. More than
            two hundred thousand copies have been distributed since March 2015.
          </p>
          <p>
            Dr. R.C. Sproul edited this landmark publication, which contains
            more than 1.1 million words of verse-by-verse commentary. Its pages
            are also packed with insightful articles; topical explanations;
            historic creeds, confessions, and catechisms; and award-winning maps
            and visuals. The Condensed Edition contains the best of this
            commentary and is designed for life on the go.
          </p>
          <p>
            The <em>Reformation Study Bible</em>, available in ESV or NKJV,
            elevates Scripture on every page and distills timeless theology for
            twenty-first-century disciples.
          </p>
        </Content>
        <Well top>
          <Numbers column="10 / span 4" number="200,000+" row="10 / span 2">
            <em>REFORMATION STUDY BIBLES</em> DISTRIBUTED SINCE 2015
          </Numbers>
        </Well>
        <Well hide>
          <Image
            column="6 / span 4"
            row="7 / span 6"
            size="contain"
            src={data.Leather.childImageSharp.fluid}
          />
        </Well>
        <Well hide>
          <Image
            column="10 / span 4"
            row="1 / span 6"
            size="contain"
            src={data.Gray.childImageSharp.fluid}
          />
        </Well>
      </Grid>
    )}
  />
)

export default IndexPage

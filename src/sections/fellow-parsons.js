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
      query FellowParsonsQuery {
        FellowParsons: file(relativePath: { eq: "FellowParsons.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="fellowparsons">
        <Backdrop />
        <Subject
          column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
          inverted={true}
          row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
        >
          Teaching Fellow
        </Subject>
        <Divider
          column={['10 / span 2', '10 / span 2', '10 / span 2', '10 / span 2']}
          inverted={true}
          row={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
        />
        <Heading
          column={['10 / span 1', '10 / span 1', '10 / span 1', '10 / span 1']}
          inverted={true}
          row={['4 / span 1', '4 / span 1', '4 / span 1', '4 / span 1']}
          text='Burk Parsons'
        />
        <Well bottom={true}>
          <Image
            column={['4 / span 3', '4 / span 3', '4 / span 3', '4 / span 3']}
            fullWidth={true}
            position="center 20%"
            row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
            src={data.FellowParsons.childImageSharp.fluid}
          />
        </Well>
        <Heading
          column={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
          inverted={true}
          row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
          size="s"
          text='“THE TEACHING FELLOWS ARE A BAND OF BROTHERS STRIVING TO STAND FIRM ON THE WORD OF GOD, TEACHING THE WORD OF GOD IN SEASON AND OUT OF SEASON.”'
        />
        <Content
          column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
          inverted={true}
          row={['7 / span 4', '7 / span 4', '7 / span 4', '7 / span 4']}
        >
          <p>Dr. Burk Parsons is senior pastor of Saint Andrew’s Chapel in Sanford, Fla., where he labored many years alongside Dr. Sproul as copastor. Dr. Parsons had the privilege of joining Dr. Sproul in local church ministry as they worked together as shepherds in Central Florida. Dr. Parsons also serves as chief publishing officer of Ligonier Ministries, and he has served as editor of <em>Tabletalk</em> magazine since 2003.</p>
          <p>Dr. Parsons began serving at Ligonier Ministries in 1999, and he became a teaching fellow in 2017. Dr. Parsons is a wise and discerning voice, and he helps maintain Ligonier’s theological fidelity and advance Ligonier’s service to the church. He has recorded a teaching series with Ligonier called <em>The Great Commission</em>, and he is author of <em>Why Do We Have Creeds?</em> He is editor of <em>Assured by God</em> and <em>John Calvin: A Heart for Devotion, Doctrine, and Doxology</em> and coeditor and cotranslator of <em>A Little Book on the Christian Life</em> by John&nbsp;Calvin.</p>
        </Content>
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
  @media (min-width: ${p => p.theme.breakpoints.large}){
    grid-column: 1 / span 14;
    grid-row: 1 / span 12;
    position: relative;
  }
`

export default IndexPage
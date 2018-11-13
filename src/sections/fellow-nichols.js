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
      query FellowNicholsQuery {
        FellowNichols: file(relativePath: { eq: "FellowNichols.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="fellownichols">
        <Backdrop />
        <Subject
          column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
          inverted={true}
          row={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
        >
          Teaching Fellow
        </Subject>
        <Divider
          column={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
          inverted={true}
          row={['3 / span 1', '3 / span 1', '3 / span 1', '3 / span 1']}
        />
        <Heading
          column={['3 / span 2', '3 / span 2', '3 / span 2', '3 / span 2']}
          inverted={true}
          row={['4 / span 1', '4 / span 1', '4 / span 1', '4 / span 1']}
          text='Stephen J. Nichols'
        />
        <Well bottom={true}>
          <Image
            column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
            fullWidth={true}
            position="center 20%"
            row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
            src={data.FellowNichols.childImageSharp.fluid}
          />
        </Well>
        <Heading
          column={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
          inverted={true}
          row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
          size="s"
          text='“WE ARE NOT TRYING TO INVENT ANYTHING NEW OR DO ANYTHING NOVEL. WE ARE SIMPLY TRYING TO PUT THE WORD OF GOD IN FRONT OF PEOPLE SO THAT THEY CAN COME TO KNOW THE GOD OF THE BIBLE.”'
        />
        <Content
          column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
          inverted={true}
          row={['8 / span 4', '8 / span 4', '8 / span 4', '8 / span 4']}
        >
          <p>Dr. Stephen J. Nichols serves as president of Reformation Bible College and chief academic officer of Ligonier Ministries. Before being appointed to these positions in 2014, Dr. Nichols taught for seventeen years as a Bible college and seminary professor. He was research professor of Christianity and culture at Lancaster Bible College in Lancaster, Pa., and he has also taught courses at Reformed Theological Seminary and Westminster Theological Seminary in Philadelphia.</p>
          <p>Dr. Nichols began serving Ligonier Ministries as a teaching fellow in 2013. Combining his interest in church history and a love for the Reformed tradition, Dr. Nichols has a passion for discipleship. He is author of numerous books, including <em>For Us and for Our Salvation</em>, <em>Peace</em>, and <em>A Time for Confidence</em>. He is coeditor of <em>The Legacy of Luther</em> and Crossway’s Theologians on the Christian Life series.</p>
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
  @media (min-width: ${p => p.theme.breakpoints.medium}){
    grid-column: 1 / span 14;
    grid-row: 1 / span 12;
    position: relative;
  }
`

export default IndexPage
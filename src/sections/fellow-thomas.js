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
      query FellowThomasQuery {
        FellowThomas: file(relativePath: { eq: "FellowThomas.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="fellowthomas">
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
          text='Derek W.H. Thomas'
        />
        <Well bottom={true}>
          <Image
            column={['10 / span 3', '10 / span 3', '10 / span 3', '10 / span 3']}
            fullWidth={true}
            position="center 20%"
            row={['4 / span 6', '4 / span 6', '4 / span 6', '4 / span 6']}
            src={data.FellowThomas.childImageSharp.fluid}
          />
        </Well>
        <Heading
          column={['9 / span 2', '9 / span 2', '9 / span 2', '9 / span 2']}
          inverted={true}
          row={['8 / span 2', '8 / span 2', '8 / span 2', '8 / span 2']}
          size="s"
          text='“WEHAVE DIFFERENT GIFTS AND DIFFERENT STYLES AND DIFFERENT BACKGROUNDS, BUT WE’RE ALL COMMITTED TO PROCLAIMING AND TEACHING THE HISTORIC CHRISTIAN&nbsp;FAITH.”'
        />
        <Content
          column={['3 / span 4', '3 / span 4', '3 / span 4', '3 / span 4']}
          inverted={true}
          row={['8 / span 4', '8 / span 4', '8 / span 4', '8 / span 4']}
        >
          <p>Dr. Derek W.H. Thomas is senior minister of First Presbyterian Church in Columbia, S.C., and Chancellor’s Professor of Systematic and Pastoral Theology at Reformed Theological Seminary. Originally from Wales, Dr. Thomas served as a pastor in Belfast, Northern Ireland, for seventeen years before being called to the United States to serve as minister of teaching at First Presbyterian Church in Jackson, Miss.</p>
          <p>Dr. Thomas began serving Ligonier Ministries as a teaching fellow in 2015. Dr. Thomas’ many years of pastoral ministry in the United States and Northern Ireland, along with his extensive and profound understanding of Reformed theology, have furnished him with a sharp intellect and a pastor's heart. He is author of numerous books, including <em>How the Gospel Brings Us All the Way Home</em>, <em>Calvin’s Teaching on Job</em>, <em>Strength for the Weary</em>, and, with Dr. Sinclair B. Ferguson, <em>Ichthus: Jesus Christ, God’s Son, the Saviour</em>. He has also written commentaries on books of the Bible including Job, Isaiah, Ezekiel, Ezra and Nehemiah, Acts, Galatians, and Revelation.</p>
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
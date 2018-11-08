import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Grid from '../components/grid'
import Well from '../components/well'

class IndexPage extends React.Component{
  constructor() {
    super()
    this.state = { year: '0000'}
  }
  componentDidMount() {
    const year = new Date().getFullYear()
    this.setState({ year })
  }
  render() { 
    return (
      <Grid>
        <Backdrop />
        <Well size="xl">
          <Well>
            <Content
              column={['5 / span 6', '5 / span 6', '5 / span 6', '5 / span 6']}
              row={['5 / span 4', '5 / span 4', '5 / span 4', '5 / span 4']}
              type="deck-intro"
            >
              <p>Our outreach would not be possible without your continued&nbsp;support.<br />Thank you.</p>
            </Content>
          </Well>
          <Content
            column={['5 / span 6', '5 / span 6', '5 / span 6', '5 / span 6']}
            row={['12 / span 1', '12 / span 1', '12 / span 1', '12 / span 1']}
            style={{ textAlign: 'center' }}
          >
            <small>An Outreach of <a href="https://ligonier.org">Ligonier</a> &copy; {this.state.year}</small>
          </Content>
        </Well>
      </Grid>
    )
  }
}

const Backdrop = styled('div')`
  background: #eae8de;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    grid-column: 1 / span 14;
    grid-row: 1 / span 12;
    position: relative;
  }
`

export default IndexPage
import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Grid from '../components/grid'
import Well from '../components/well'

const IndexPage = () => {
  const [year] = React.useState(new Date().getFullYear())

  return (
    <Grid>
      <Backdrop />
      <Well size="xl">
        <Well>
          <Content column="5 / span 6" row="5 / span 4" type="deck-intro">
            <p>
              Our outreach would not be possible without your
              continued&nbsp;support.
              <br />
              Thank you.
            </p>
            <Button
              href="https://gift.ligonier.org/835/donate"
              target="_window"
            >
              Give Now
            </Button>
          </Content>
        </Well>
        <Content
          column="5 / span 6"
          row="12 / span 1"
          style={{ textAlign: 'center' }}
        >
          <small>
            An Outreach of <a href="https://www.ligonier.org">Ligonier</a>{' '}
            &copy; {year}
          </small>
        </Content>
      </Well>
    </Grid>
  )
}

const Backdrop = styled.div`
  background: #eae8de;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    -ms-grid-column: 1;
    -ms-grid-column-span: 14;
    -ms-grid-row: 1;
    -ms-grid-row-span: 12;
    grid-column: 1 / span 14;
    grid-row: 1 / span 12;
    position: relative;
  }
`

const Button = styled.a`
  background: white;
  border-bottom: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px, rgba(0, 0, 0, 0.1) 0 1px 5px 0;
  display: block;
  font-family: 'Whitney SSm A', 'Whitney SSm B', Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 10vh auto 0;
  padding: 12px;
  text-align: center;
  text-transform: uppercase;
  transition: ${(p) => p.theme.transition};
  transition-duration: 100ms;
  width: 200px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px, rgba(0, 0, 0, 0.1) 0 5px 25px 0;
    color: #777777;
  }
`

export default IndexPage

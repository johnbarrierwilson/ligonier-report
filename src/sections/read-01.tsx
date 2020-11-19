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
      query Read01Query {
        TabletalkPlaceholder: file(
          relativePath: { eq: "placeholder-tabletalk.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        GuyWalking: file(relativePath: { eq: "Read01–GuyWalking.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="read01">
        <Well bottom size="l">
          <Backdrop />
          <Subject column="2 / span 5" row="2 / span 1">
            <em>Tabletalk</em> Magazine
          </Subject>
          <Divider column="2 / span 2" row="2 / span 2" />
          <Well>
            <Image
              column="2 / span 5"
              maxWidth="large"
              position="left center"
              row="3 / span 3"
              size="contain"
              src={data.TabletalkPlaceholder.childImageSharp.fluid}
              transform="translateY(10%)"
            />
          </Well>
          <Heading
            center
            column="2 / span 5"
            row="6 / span 2"
            text="Helping Disciples&nbsp;Grow"
          />
          <Content column="2 / span 5" row="7 / span 4">
            <p>
              For more than forty years, <em>Tabletalk</em> magazine has helped
              growing Christians live biblically informed lives. Every month, it
              reaches more than 260,000 people in more than seventy-five
              countries around the world.
            </p>
            <p>
              Each issue contains daily Bible studies to help readers understand
              and apply the Word of God, as well as an effective plan for
              reading through the Bible in a year. Thought-provoking articles
              from gifted pastors and Bible teachers address biblical,
              theological, and practical themes to help strengthen and encourage
              people in their faith.
            </p>
            <p>
              Subscribers can also access <em>Tabletalk</em> at{' '}
              <a href="https://tabletalkmagazine.com">TabletalkMagazine.com</a>.
              Every new issue is available digitally, along with
              online-exclusive content and a searchable archive of back issues.
            </p>
            <p>
              <em>Tabletalk</em> is biblical, reliable, and readable. Above all,{' '}
              <em>Tabletalk</em> exists to help Christians deepen their
              knowledge of God’s Word in order that their minds may be renewed
              and their lives transformed.
            </p>
          </Content>
          <Well>
            <Numbers
              column="2 / span 4"
              number="75+ Countries"
              row="11 / span 1"
            >
              <em>Tabletalk</em>&nbsp;readers around the world
            </Numbers>
          </Well>
        </Well>

        <Well size="l">
          <Subject column="9 / span 2" id="ask-ligonier" row="2 / span 1">
            Ask Ligonier
          </Subject>
          <Divider column="9 / span 2" row="2 / span 2" />
          <Heading
            column="9 / span 2"
            row="4 / span 4"
            text="Answering Your Biblical and Theological Questions"
          />
          <Content column="9 / span 2" row="7 / span 5">
            <p>
              <a href="https://ask.ligonier.org/">Ask Ligonier</a> is our online
              biblical and theological chat service—providing clear, concise,
              and trustworthy answers. Drawing on Ligonier’s vast library of
              resources and Dr. R.C. Sproul’s decades-long ministry of answering
              students’ questions, we’re now able to answer your theological
              questions twenty-four hours a day, six days a week. In 2020, we
              launched the{' '}
              <a href="https://ask.ligonier.org/podcast">
                <em>Ask Ligonier</em>
              </a>{' '}
              podcast as another way for you to receive answers from some of the
              most trusted pastors and theologians who are serving the church
              today.
            </p>
            <p>
              Do you have a question about a Bible passage or theology? Whether
              it’s for tomorrow night’s Bible study or something that’s been
              puzzling you for years, just ask Ligonier.
            </p>
            <p>
              Your generous support means this ground-breaking initiative is
              available free of charge. Well-trained team members are located
              around the world, standing by to answer your questions.
            </p>
          </Content>
        </Well>

        <Well>
          <Image
            column="12 / span 2"
            row="1 / span 4"
            src={data.GuyWalking.childImageSharp.fluid}
          />
        </Well>

        <Well top>
          <Subject column="12 / span 2" id="state-of-theology" row="5 / span 1">
            The State of Theology
          </Subject>
          <Divider column="12 / span 2" row="5 / span 2" />
          <Heading
            center
            column="12 / span 2"
            row="6 / span 2"
            text="Measuring Theological Health"
          />
          <Content column="12 / span 2" row="8 / span 4">
            <p>
              Since 2014, our biennial State of Theology survey has been
              measuring the theological health of Americans. Two years ago, we
              also commissioned the first ever State of Theology in the United
              Kingdom. In 2020, we asked three thousand Americans about their
              beliefs regarding God, the Bible, Jesus Christ, truth, and ethics.
              This professionally conducted survey is designed to help
              Christians understand today’s culture and equip the church with
              better insights for discipleship.
            </p>
            <p>
              The 2020 results, available at{' '}
              <a href="https://thestateoftheology.com">
                TheStateOfTheology.com
              </a>
              , show an urgent need for faithful Bible teaching as society in
              the U.S. drifts from accepting the truth claims of the Christian
              faith.
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

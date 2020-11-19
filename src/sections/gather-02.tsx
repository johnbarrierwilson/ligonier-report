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
      query Gather02Query {
        Connect: file(relativePath: { eq: "Connect.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        House: file(relativePath: { eq: "RBCHouse.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Students: file(relativePath: { eq: "RBCStudents.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid name="gather02">
        <Well bottom size="l">
          <Backdrop />
          <Well bottom>
            <Image
              column="2 / span 3"
              maxWidth="large"
              position="center 30%"
              row="1 / span 4"
              src={data.House.childImageSharp.fluid}
            />
          </Well>
          <Subject column="2 / span 2" row="5 / span 1">
            Reformation Bible&nbsp;College
          </Subject>
          <Divider column="2 / span 2" row="5 / span 2" />
          <Heading
            center
            column="2 / span 2"
            row="6 / span 2"
            text="Teaching the Knowledge of&nbsp;God"
          />
          <Content column="2 / span 2" row="8 / span 4">
            <p>
              Reformation Bible College is gathering the next generation of
              Christian leaders, offering a classically based, theologically
              driven college curriculum. Growing in the knowledge of God is the
              heartbeat of RBC, where faculty seek to ignite a passion for
              theological conviction and equip students for faithful service in
              any vocation.
            </p>
            <p>
              This year, visionary donors provided the needed resources for RBC
              to offer its{' '}
              <a href="https://reformationbiblecollege.org/academics/foundation-year-online">
                Foundation Year certificate program online
              </a>{' '}
              for the first time. This allows students who are currently unable
              to move to Central Florida to gain a firm theological foundation
              for all of life. The on-campus student body was also the largest
              it has been in the college’s history.
            </p>
          </Content>

          <Well>
            <Content
              column="6 / span 2"
              maxWidth="large"
              row="1 / span 5"
              type="sans"
            >
              <p>
                <strong>
                  Winter Conference: Gathering with Today and Tomorrow’s Leaders
                </strong>
                <br />
                Every year, RBC hosts its annual{' '}
                <a href="https://reformationbiblecollege.org/blog/%20winter-conference-the-sufficiency-scripture">
                  Winter Conference
                </a>{' '}
                on its Central Florida campus. Gifted teachers train students
                and Christian leaders in theology and the knowledge of God,
                urging them to hold to the truth of God’s Word—especially where
                it is under attack. With sessions on apologetics, church
                history, and more, this conference seeks to fuel the bold
                proclamation of the gospel of our Savior Jesus Christ.
              </p>
            </Content>
          </Well>
          <Image
            column="6 / span 2"
            maxWidth="large"
            position="left center"
            row="6 / span 3"
            size="contain"
            src={data.Students.childImageSharp.fluid}
            transform="translateY(-2rem)"
          />
          <Well top>
            <Content column="6 / span 2" row="9 / span 3" type="sans">
              <p>
                <strong>Always Ready: Answers to Tough Questions</strong>
                <br />
                Thousands of middle and high school students were equipped to
                defend the Christian faith through{' '}
                <a href="https://reformationbiblecollege.org/blog/always-ready-free-online-event-students">
                  Always Ready, an online livestream
                </a>{' '}
                hosted by Ligonier Ministries and RBC. At a time when the
                Bible’s teaching is rapidly being marginalized, gifted teachers
                and speakers helped young disciples stand firm for the truth of
                God’s Word and give sound answers to the questions posed by
                their non-Christian friends.
              </p>
            </Content>
          </Well>
        </Well>

        <Subject column="10 / span 4" id="ligonier-connect" row="1 / span 2">
          Ligonier Connect
        </Subject>
        <Divider column="10 / span 4" row="2 / span 1" />
        <Heading
          center
          column="10 / span 3"
          row="2 / span 3"
          text="BUILDING A WORLDWIDE DISCIPLESHIP COMMUNITY"
        />
        <Image
          column="9 / span 6"
          maxWidth="large"
          position="center 90%"
          row="4 / span 3"
          src={data.Connect.childImageSharp.fluid}
          transform="translateY(1.5rem)"
        />
        <Well>
          <Content center column="10 / span 4" row="7 / span 4">
            <p>
              <a href="https://connect.ligonier.org/p/ligonier-connect/">
                Ligonier Connect
              </a>{' '}
              allows growing Christians to learn online from an ever-expanding
              library of interactive video courses. Flexibility to study with
              others or to pursue a course at your own pace means how you learn
              is up to you.
            </p>
            <p>
              Sit under the teaching of gifted theologians such as Drs. R.C.
              Sproul, Sinclair Ferguson, and Derek Thomas, together with other
              Ligonier Teaching Fellows and gifted teachers. More than 1,100
              lessons from over one hundred courses are available to choose
              from.
            </p>
            <p>
              Covering the Bible, theology, Christian living, worldview and
              culture, and church history, Ligonier Connect offers teaching,
              interactive activities, and more to build up disciples in the
              knowledge of God.
            </p>
          </Content>
        </Well>
        <Numbers
          column="10 / span 4"
          description="Ligonier Connect students this year"
          number="34,000+"
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
    -ms-grid-column-span: 8;
    -ms-grid-row: 1;
    -ms-grid-row-span: 12;
    bottom: 0;
    grid-column: 1 / span 8;
    grid-row: 1 / span 12;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
  }
`

export default IndexPage

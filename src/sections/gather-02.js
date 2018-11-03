import React from 'react'
import styled from 'styled-components'

import Content from '../components/content'
import Divider from '../components/divider'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Image from '../components/image'
import Numbers from '../components/numbers'
import Subject from '../components/subject'

import House from '../images/RBCHouse.jpg'
import Connect from '../images/Connect.jpg'
import Students from '../images/RBCStudents.jpg'

const IndexPage = () => (
  <Grid name="gather02">
    <Backdrop />
    <Image
      column={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
      position='center 30%'
      row={['1 / span 4', '1 / span 4', '1 / span 4', '1 / span 4']}
      src={House}
    />
    <Subject
      column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      row={['5 / span 1', '5 / span 1', '5 / span 1', '5 / span 1']}
    >
      Reformation Bible&nbsp;College
    </Subject>
    <Divider
      column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      row={['5 / span 2', '5 / span 2', '5 / span 2', '5 / span 2']}
    />
    <Heading
      center={true}
      column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      row={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
      text="Teaching the Knowledge of&nbsp;God"
    />
    <Content
      column={['2 / span 2', '2 / span 2', '2 / span 2', '2 / span 2']}
      row={['8 / span 4', '8 / span 4', '8 / span 4', '8 / span 4']}
    >
      <p><strong>REFORMATION BIBLE COLLEGE</strong> is gathering the next generation of reformers, offering a classically based, theologically driven college curricu- lum. Growing in the knowledge of God is the heartbeat of RBC, where faculty seek to ignite a passion for theological conviction and equip students for faithful service in any vocation.</p>
      <p>Thanks to visionary donors, the college’s new $8.5 million state-of- the-art Student Learning Center allows for much-needed expansion on its campus in Orlando, Fla.</p>
      <p>RBC’s entire outlook is grounded in the Scriptures and provides stu- dents with a firm biblical foundation on which to build their lives for the glory of God.</p>
    </Content>

    <Content
      column={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
      row={['1 / span 5', '1 / span 5', '1 / span 5', '1 / span 5']}
      type='sans'
    >
      <p><strong>Winter Conference: Gathering with Today and Tomorrow’s Leaders</strong><br/>Every year, RBC hosts its annual Winter Conference on its central Florida campus. Trusted teachers train students and Christian leaders in theology and the knowledge of God, urging them to hold to the truth of God’s Word—especially where it is under attack. With sessions on apologetics, church history, and more, this conference seeks to fuel the bold proclamation of the gospel of our Savior Jesus Christ.</p>
    </Content>
    <Image
      column={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
      position='left center'
      row={['6 / span 3', '6 / span 3', '6 / span 3', '6 / span 3']}
      size='contain'
      src={Students}
      transform='translateY(-2rem)'
    />
    <Content
      column={['6 / span 2', '6 / span 2', '6 / span 2', '6 / span 2']}
      row={['9 / span 3', '9 / span 3', '9 / span 3', '9 / span 3']}
      type='sans'
    >
      <p><strong>Always Ready: Equipping Young Apologists</strong><br/>High school students are equipped to defend the Christian faith at RBC’s Always Ready Youth Conference. This annual, one-day apologetics event in Orlando, Fla., helps young disciples to better share their faith and give a defense to their non-Christian friends. In an age when the Bible’s teaching is rapidly being marginalized, RBC is encouraging young people to stand fast on the truth of God’s&nbsp;Word.</p>
    </Content>

    <Subject
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      row={['1 / span 2', '1 / span 2', '1 / span 2', '1 / span 2']}
    >
      Ligonier Connect
    </Subject>
    <Divider
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      row={['2 / span 1', '2 / span 1', '2 / span 1', '2 / span 1']}
    />
    <Heading
      center={true}
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      row={['2 / span 3', '2 / span 3', '2 / span 3', '2 / span 3']}
      text="BUILDING A WORLDWIDE DISCIPLESHIP COMMUNITY"
    />
    <Image
      column={['9 / span 6', '9 / span 6', '9 / span 6', '9 / span 6']}
      position="center 90%"
      row={['4 / span 3', '4 / span 3', '4 / span 3', '4 / span 3']}
      src={Connect}
      transform='translateY(1.5rem)'
    />
    <Content
      center={true}
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      row={['7 / span 4', '7 / span 4', '7 / span 4', '7 / span 4']}
    >
      <p><strong>Ligonier Connect allows</strong> growing Christians to learn online from an ever-expanding library of interactive video courses. Flexibility to study with others or to pursue a course at your own pace means how you learn is up to you.</p>
      <p>Sit under the teaching of gifted theologians such as Drs. R.C. Sproul, Sinclair Ferguson, and Derek Thomas, together with other Ligonier Teaching Fellows and trusted teachers. More than eight hundred lessons from over eighty courses are available to choose from.</p>
      <p>Covering the Bible, theology, Christian living, worldview and culture, and church history, Ligonier Connect offers teaching, interactive activities, and more to build up disciples in the knowledge of God.</p>
    </Content>
    <Numbers
      column={['10 / span 4', '10 / span 4', '10 / span 4', '10 / span 4']}
      description='ACTIVE CONNECT STUDENTS'
      number='5,500+'
      row={['11 / span 1', '11 / span 1', '11 / span 1', '11 / span 1']}
    />
  </Grid>
)

const Backdrop = styled('div')`
  background: ${p => p.theme.colors.tan};
  grid-column: 1 / span 8;
  grid-row: 1 / span 12;
`

export default IndexPage
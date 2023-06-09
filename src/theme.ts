import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    black: '#222222',
    gray: '#dce0df',
    green: '#8fa34e',
    tan: '#f3efea',
    tanDark: '#bfaea2',
    teal: '#06212b',
    white: '#ffffff',
  },
  breakpoints: {
    small: '600px',
    large: '1300px',
  },
  index: {
    containerInner: '2',
    content: '30',
    grid: '10',
    heading: '30',
    image: '20',
    label: '30',
    leftSidebar: '90',
    logoMark: '90',
    logoTitle: '90',
    navigation: '0',
    numbers: '10',
    podcasts: '10',
    rightSidebar: '90',
    share: '90',
    title: '30',
    toggle: '90',
  },
  transition: 'all 500ms cubic-bezier(.55,0,.1,1)',
}

export default theme


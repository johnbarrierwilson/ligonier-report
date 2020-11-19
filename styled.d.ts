import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      gray: string
      green: string
      tan: string
      tanDark: string
      teal: string
      white: string
    },

    breakpoints: {
      small: string
      large: string
    },

    index: {
      containerInner: string
      content: string
      grid: string
      heading: string
      image: string
      label: string
      leftSidebar: string
      logoMark: string
      logoTitle: string
      navigation: string
      numbers: string
      podcasts: string
      rightSidebar: string
      share: string
      title: string
      toggle: string
    },

    transition: string
  }
}

import React from 'react'
import styled, { css } from 'styled-components'

interface WellProps {
  children: React.ReactNode
  readonly bottom?: boolean
  readonly hide?: boolean
  readonly size?: 'xl' | 'l'
  readonly top?: boolean
}

const Well: React.FC<WellProps> = (props) => {
  const [isSmall, setIsSmall] = React.useState(false)

  const setWidth = React.useCallback(
    () => setIsSmall(window.innerWidth <= 1300),
    []
  )

  React.useEffect(() => {
    setWidth()
    window.addEventListener('resize', setWidth)

    return () => {
      window.removeEventListener('resize', setWidth)
    }
  }, [setWidth])

  if (isSmall) {
    return (<Container {...props}>{props.children}</Container>)
  } else {
    return (<>{props.children}</>)
  }
}

const Container = styled.div<WellProps>`
  margin: ${(p) => {
      switch (p.size) {
        case 'xl':
          return '5.75rem'
        case 'l':
          return '5rem'
        default:
          return '2.5rem'
      }
    }}
    0;
  position: relative;

  ${(p) =>
    p.bottom
      ? css`
          margin-top: 0;
        `
      : null}

  ${(p) =>
    p.top
      ? css`
          margin-bottom: 0;
        `
      : null}

  ${(p) =>
    p.hide
      ? css`
          display: none;
        `
      : null}
`

export default Well

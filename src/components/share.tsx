import React from 'react'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'
import styled from 'styled-components'

interface ShareProps {
  readonly isSharing: boolean
}

function Share() {
  const [isSharing, setIsSharing] = React.useState(false)

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    event.preventDefault()
    setIsSharing(!isSharing)
  }

  return (
    <Container isSharing={isSharing}>
      <Channels isSharing={isSharing}>
        <FacebookShareButton
          quote="Get a snapshot of God’s work through Ligonier Ministries in 2018 and the work they hope to do next year. Read it at Report.Ligonier.org."
          url="https://report.ligonier.org"
        >
          <FacebookIcon size={28} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          title="Get a snapshot of God’s work through @Ligonier in 2018 and the work they hope to do next year. Read it at Report.Ligonier.org."
          url="https://report.ligonier.org"
        >
          <TwitterIcon size={28} round={true} />
        </TwitterShareButton>
        <EmailShareButton
          url="https://report.ligonier.org"
          body="Get a snapshot of God’s work through Ligonier in 2018 and the work they hope to do next year. Read it at Report.Ligonier.org."
          subject="Ligonier’s 2020 Ministry Report"
        >
          <EmailIcon iconFillColor="#ffffff" size={28} round={true} />
        </EmailShareButton>
      </Channels>
      <ContainerToggle isSharing={isSharing} onClick={handleClick}>
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="share"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="times-circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
          ></path>
        </svg>
      </ContainerToggle>
    </Container>
  )
}

const Channels = styled.div<ShareProps>`
  align-items: center;
  color: ${(p) => p.theme.colors.black};
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  height: 100%;
  justify-content: space-around;
  padding-left: ${(p) => (p.isSharing ? '5px' : '0px')};
  transition: ${(p) => p.theme.transition};
  transition-duration: 300ms;
  width: ${(p) => (p.isSharing ? '120px' : '0px')};
  button {
    border-bottom: none;
    cursor: pointer;
    display: block;
    height: 28px;
    outline: none;
    pointer-events: ${(p) => (p.isSharing ? 'auto' : 'none')};
    width: 28px;
    &:nth-child(1) svg {
      transition-delay: ${(p) => (!p.isSharing ? '1ms' : '250ms')};
    }
    &:nth-child(2) svg {
      transition-delay: ${(p) => (!p.isSharing ? '1ms' : '150ms')};
    }
    &:nth-child(3) svg {
      transition-delay: ${(p) => (!p.isSharing ? '1ms' : '50ms')};
    }
    svg {
      height: 100%;
      opacity: ${(p) => (p.isSharing ? '1' : '0')};
      transform: ${(p) => (p.isSharing ? 'scale(1)' : 'scale(0.5)')};
      transition-duration: ${(p) => (p.isSharing ? '0' : '300ms')};
      transition: ${(p) => p.theme.transition};
      width: auto;
    }
  }
`

const Container = styled.div<ShareProps>`
  display: none;
  @media (min-width: ${(p) => p.theme.breakpoints.large}) {
    align-items: center;
    background: ${(p) => p.theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px, rgba(0, 0, 0, 0.1) 0 5px 25px 0;
    border-radius: 100px;
    bottom: 20px;
    display: flex;
    flex-flow: row nowrap;
    height: 45px;
    justify-content: flex-end;
    overflow: hidden;
    position: fixed;
    right: 20px;
    transition: ${(p) => p.theme.transition};
    transition-duration: 300ms;
    width: ${(p) => (p.isSharing ? '165px' : '45px')};
    z-index: ${(p) => p.theme.index.share};
  }
`

const ContainerToggle = styled.div<ShareProps>`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  height: 100%;
  justify-content: center;
  transition: ${(p) => p.theme.transition};
  transition-duration: 300ms;
  width: 45px !important;
  svg {
    height: 15px;
    transform: translate(5%, -2%);
    width: 15px;
  }
  svg:first-of-type {
    display: ${(p) => (p.isSharing ? 'none' : 'block')};
    color: ${(p) => p.theme.colors.black};
  }
  svg:last-of-type {
    display: ${(p) => (p.isSharing ? 'block' : 'none')};
    color: ${(p) => p.theme.colors.black};
  }
`

export default Share

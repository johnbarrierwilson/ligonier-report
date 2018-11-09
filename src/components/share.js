import React from 'react'
import styled from 'styled-components'

class Share extends React.Component {
  constructor() {
    super()
    this.state = {
      isSharing: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({isSharing: !this.state.isSharing})
  }

  render () {
    return (
      <Container isSharing={this.state.isSharing}>
        <Channels isSharing={this.state.isSharing}>
          <a href="https://google.com">
            <svg aria-hidden="true" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"></path></svg>
          </a>
          <a href="https://google.com">
            <svg aria-hidden="true" data-prefix="fab" data-icon="twitter"role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
          </a>
          <a href="https://google.com">
            <svg aria-hidden="true" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
          </a>
        </Channels>
        <ContainerToggle isSharing={this.state.isSharing} onClick={this.handleClick}>
          <svg aria-hidden="true" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
          </svg>
          <svg aria-hidden="true" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
          </svg>
        </ContainerToggle>
      </Container>
    )
  }
}

const Channels = styled('div')`
  align-items: center;
  color: ${p => p.theme.colors.black};
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  height: 100%;
  justify-content: space-around;
  padding-left: 20px;
  a {
    border-bottom: none;
    display: block;
    height: 20px;
    opacity: ${p => p.isSharing ? '1' : '0'};
    transform: ${p => p.isSharing ? 'scale(1)' : 'scale(0.5)'};
    transition: ${p => p.theme.transition};
    transition-duration: 300ms;
    width: 20px;
    &:nth-child(1) {
      color: #3b5998;
      transition-delay: ${p => !p.isSharing ? '0' : '225ms'};
    }
    &:nth-child(2) {
      color: #1da1f2;
      transition-delay: ${p => !p.isSharing ? '0' : '150ms'};;
    }
    &:nth-child(3) {
      color: ${p => p.theme.colors.black};
      transition-delay: ${p => !p.isSharing ? '0' : '75ms'};;
    }
  }
  svg {
    height: 100%;
    width: auto;
  }
`

const Container = styled('div')`
  display: none;
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    align-items: center;
    background: ${p => p.theme.colors.white};
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
    transition: ${p => p.theme.transition};
    transition-duration: 300ms;
    width: ${p => p.isSharing ? '175px' : '45px'};
    z-index: ${p => p.theme.index.share};
  }
`

const ContainerToggle = styled('div')`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  height: 100%;
  justify-content: center;
  transition: ${p => p.theme.transition};
  transition-duration: 300ms;
  width: 45px;
  svg {
    height: 15px;
    transform: translate(5%, -2%);
    width: 15px;
  }
  svg:first-of-type {
    display: ${p => p.isSharing ? 'none' : 'block'};
    color: ${p => p.theme.colors.black};
  }
  svg:last-of-type {
    display: ${p => p.isSharing ? 'block' : 'none'};
    color: ${p => p.theme.colors.black};
  }
`

export default Share
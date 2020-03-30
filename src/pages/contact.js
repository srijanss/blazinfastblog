import React from 'react'
import Container from '../components/container'
import Header from '../components/header'

export default () => {
  return (
    <Container>
      <Header />
      <p>Send us message</p>
      <p>
        <a href="mailto:example@example.com">example@example.com</a>
      </p>
    </Container>
  )
}
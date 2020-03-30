import React from "react"
import Container from '../components/container'
import Header from '../components/header'

export default () => (
  <Container>
    <Header headerText={`Homepage Header`}/>
    <h1>
      Hello Gatsby!
    </h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Container>
)
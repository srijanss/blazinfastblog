import React from 'react'
import Header from '../components/header'
import Container from '../components/container'
import styles from './about.module.css'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const User = (props) => {
  return (
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )
}

export default ({ data }) => {
  return (
    <Container>
      <Header headerText={`About header`}/>
      <p>Such wow. Very React. CSS Modules.</p>
      <Img fluid={data.fileName.childImageSharp.fluid} />
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "profile-pic.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
import React from 'react'
import Header from '../components/header'
import Container from '../components/container'
import styles from './about.module.css'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

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

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
// const validate = values => {
//   const errors = {}

//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address'
//   }

//   return errors
// }

const SubscribeForm = (props) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" /> 
        <button type="submit">Submit</button>
      </Form>
    </Formik>
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
      <hr/>
      <SubscribeForm />
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
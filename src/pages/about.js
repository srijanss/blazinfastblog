import React from 'react'
import Header from '../components/header'
import Container from '../components/container'
import styles from './about.module.css'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Formik, Form, useField } from 'formik'
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

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

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
      <Form name="subscribe" method="post" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
        <input type="hidden" name="form-name" value="subscribe" />
        <MyTextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="email@example.com"
        />
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
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import containerStyles from './container.module.css'
import ListLink from './listlink'

export default (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className={containerStyles.container}>
      <header style={{ marginBottom: `1.5rem`}}>
        <Link to='/' style={{ textShadow: `none`, backgroundImage: `none`}}>
          <h3 style={{display: `inline`}}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {props.children}
    </div>
  )
}
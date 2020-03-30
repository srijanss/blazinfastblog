import React from 'react'
import { Link } from 'gatsby'
import containerStyles from './container.module.css'
import ListLink from './listlink'

export default ({children}) => (
  <div className={containerStyles.container}>
    <header style={{ marginBottom: `1.5rem`}}>
      <Link to='/' style={{ textShadow: `none`, backgroundImage: `none`}}>
        <h3 style={{display: `inline`}}>BlazinFastBlog</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)
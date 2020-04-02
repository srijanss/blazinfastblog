import React from "react"
import { Link, graphql } from "gatsby"
import Container from '../components/container'
import Header from '../components/header'

export default ({data}) => (
  <Container>
    <Header headerText={`Homepage Header`}/>
    <h1>
      Hello Gatsby!
    </h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <div key={node.id}>
        <Link 
          to={node.fields.slug}
          style={{ textDecoration: 'none', color: 'inherit'}}
        >
          <h3 style={{marginBottom: '1rem'}}>
            {node.frontmatter.title}{" "}
            <span style={{color: '#bbb'}}>
              - {node.frontmatter.date}
            </span>
          </h3>
        <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </Container>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString:"DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
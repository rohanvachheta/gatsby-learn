import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const BlogPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt

            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const { edges } = data.allMarkdownRemark

  const listBlogs = edges.map(({ node }) => {
    return (
      <li>
        <Link to={`/blog/${node.fields.slug}`}>
          <h3>{node.frontmatter.title}</h3>
          <p>{node.frontmatter.date}</p>
        </Link>
      </li>
    )
  })

  return (
    <div>
      <Layout>
        {/* <h1>blog page</h1>     */}
        <ul>{listBlogs}</ul>
      </Layout>
    </div>
  )
}

BlogPage.propTypes = {
  //
}

export default BlogPage

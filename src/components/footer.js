import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>
        created by{"  "} {data.site.siteMetadata.author} @2020
      </p>
    </footer>
  )
}

Footer.propTypes = {
  // proptype
}

export default Footer

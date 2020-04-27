import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = props => {
  return (
    <div>
      <Layout>
        link to contact <Link to="/contact">contact</Link>
      </Layout>
    </div>
  )
}

AboutPage.propTypes = {
  //
}

export default AboutPage

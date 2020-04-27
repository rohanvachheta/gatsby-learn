import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyle from "./header.module.scss"

const Header = () => {
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
    <header className={headerStyle.header}>
      <h1>
        <Link to="/" className={headerStyle.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyle.navList}>
          <li>
            <Link
              activeClassName={headerStyle.activeNavItem}
              to="/"
              class={headerStyle.navItem}
              href="#"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              activeClassName={headerStyle.activeNavItem}
              class={headerStyle.navItem}
              href="#"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              activeClassName={headerStyle.activeNavItem}
              class={headerStyle.navItem}
              href="#"
            >
              blog
            </Link>
          </li>{" "}
          <li>
            <Link
              to="/contact"
              activeClassName={headerStyle.activeNavItem}
              class={headerStyle.navItem}
              href="#"
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  //
}

export default Header

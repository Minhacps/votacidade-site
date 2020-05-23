import React from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import { Nav, NavItem } from 'reactstrap'

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`

export const Menu = () => {
  const data = useStaticQuery(query)
  const { menuLinks } = data.site.siteMetadata

  return (
    <Nav className="mr-0 ml-auto" navbar>
      {menuLinks && menuLinks.map(link => (
        <NavItem key={link.name}>
          <Link className="nav-link" to={link.link}>{link.name}</Link>
        </NavItem>
      ))}
    </Nav>
  )
}

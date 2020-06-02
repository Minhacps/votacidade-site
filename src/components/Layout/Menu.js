import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import { Nav, NavItem } from 'reactstrap'
import { Link } from '../Link'

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
          <div className="nav-link">
            <Link to={link.link}>{link.name}</Link>
          </div>
        </NavItem>
      ))}
    </Nav>
  )
}

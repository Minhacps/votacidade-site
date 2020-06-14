import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

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

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) =>  theme.darkGray};
  
  &:hover {
    color: ${({ theme }) =>  theme.darkGray};
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
            <StyledLink to={link.link}>{link.name}</StyledLink>
          </div>
        </NavItem>
      ))}
    </Nav>
  )
}

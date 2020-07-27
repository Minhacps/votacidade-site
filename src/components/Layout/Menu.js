import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import { Nav, NavItem, NavLink } from 'reactstrap'

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

const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.darkGray} !important;

  .nav-item:not(:last-child) & {
    margin-right: 15px;
  }

  &.active {
    color: ${({ theme }) => theme.primaryColor} !important;
  }
  
  &:hover {
    color: ${({ theme }) => theme.darkGray} !important;
  }
`

const ExternalLink = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  
  vertical-align:middle;
  color: ${({ theme }) => theme.darkGray} !important;

  .nav-item:not(:last-child) & {
    margin-right: 15px;
  }

  &.active {
    color: ${({ theme }) => theme.primaryColor} !important;
  }
  
  &:hover {
    color: ${({ theme }) => theme.darkGray} !important;
  }
`

export const Menu = () => {
  const data = useStaticQuery(query)
  const { menuLinks } = data.site.siteMetadata

  return (
    <Nav className="mr-0 ml-auto" navbar>
      {menuLinks && menuLinks.map(link => {
        return (
          <NavItem key={link.name}>
            <StyledLink tag={Link} to={link.link} activeClassName="active">
              {link.name}
            </StyledLink>
          </NavItem>
        )
      })}
      <NavItem>
        <ExternalLink
          href="https://drive.google.com/drive/folders/1xQh5dm-XkmQL_deO9sRueERMYpHoCj2a?usp=sharing"
          activeClassName="active"
        >Midia Kit
        </ExternalLink>
      </NavItem>
    </Nav>
  )
}

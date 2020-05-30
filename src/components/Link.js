import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import styled from 'styled-components'

const StyledLink = styled.a`
  color: ${({theme}) => theme.secondaryColor};
  transition: filter 0.2s;
  will-change: filter, text-decoration, color;

  &:hover {
    text-decoration: none;
    color: ${({theme}) => theme.secondaryColor};
    filter: brightness(0.8) contrast(1.2);
  }
`

export const Link = ({ tag, children, ...props }) => (
  <StyledLink
    as={tag || GatsbyLink}
    target={tag === 'a' ? '_blank' : ''}
    {...props}
  >
    {children}
  </StyledLink>
)
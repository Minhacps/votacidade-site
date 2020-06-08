import React from 'react'
import styled from 'styled-components'

const colorMapping = ({ color, theme }) =>
  !color ? theme.primaryColor : color

const StyledTitle = styled.h3`
  color: ${colorMapping};
  font-weight: ${({ weight }) => weight || 700};
  ${({ size }) => size && `font-size: ${size}`};
`

export const Title = ({ tag = 'h3', children, ...props }) => (
  <StyledTitle as={tag} {...props}>
    {children}
  </StyledTitle>
)
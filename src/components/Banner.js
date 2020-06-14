import React from 'react'
import styled from 'styled-components'

const StyledBanner = styled.p`
  color:#959595;
  font-size: 24px;
  font-weight: ${({ weight }) => weight || 700};
  ${({ size }) => size && `font-size: ${size}`};
  height: 124px;
  line-height: 124px;
  background-color: #dedede;
  margin: 0px 0px 0px 0px;
  padding-left: 1rem;
`

export const Banner = ({ children }) => {

    return (
        <StyledBanner>
            {children}
        </StyledBanner>
    )
}
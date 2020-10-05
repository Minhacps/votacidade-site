import React from 'react'
import styled from 'styled-components'

import { Title } from './Title'

import { buildBackgroundImage } from '../utils/styles'

const StyledCard = styled.div`
  background-color: lightgray;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  min-height: 180px;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(0.5) blur(1px);
    ${buildBackgroundImage}
  }
`

const Card = ({ title, subTitle, children, ...props }) => (
  <StyledCard {...props}>
    {title && <Title tag="h4" color="#fff" style={{ zIndex: 1 }}>{title}</Title>}
    {subTitle && <Title tag="h5" color="#fff" style={{ zIndex: 1 }}>{subTitle}</Title>}
    {children}
    {children}
  </StyledCard>
)

export default Card
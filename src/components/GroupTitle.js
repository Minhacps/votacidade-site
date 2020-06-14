import React from 'react'
import styled from 'styled-components'

import { Title as Subtitle } from './Title'

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.secondaryColor};
`

const GroupTitle = (props) => (
  <div>
    <Title>{props.title}</Title>
    <Subtitle>{props.subTitle}</Subtitle>
  </div>
)

export default GroupTitle

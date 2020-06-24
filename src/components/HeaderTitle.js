import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

import { Title } from './Title'

const StyledHeader = styled.header`
  background-color: ${({theme}) => theme.lightGray};
  padding: 48px;
`

const HeaderTitle = ({ title }) => (
  <StyledHeader>
    <Container>
      <Title as="h1" size="24px" color="darkGray">{title}</Title>
    </Container>
  </StyledHeader>
)

export default HeaderTitle;
import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

import { Title } from './Title'

const StyledHeader = styled.header`
  background-color: ${({theme}) => theme.lightGray};
  padding: 48px;
`

const HeaderTitle = (props) => (
  <StyledHeader>
    <Container>
      <Title as="h1" size="24px" color="#959595">O Projeto</Title>
    </Container>
  </StyledHeader>
)

export default HeaderTitle;
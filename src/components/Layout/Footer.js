import React from 'react'
import styled from 'styled-components'

import { Container, Row, Col } from 'reactstrap'

const StyledFooter = styled.footer`
  background: #4F1778;
  padding: 15px 0;
  color: #fff;
`

export const Footer = () => (
  <StyledFooter>
    <Container className="text-center">
      © {new Date().getFullYear()}
      {` `}
      Todos os direitos reservados a <strong>Vota Cidade</strong>
    </Container>
  </StyledFooter>
)
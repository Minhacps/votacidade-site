import React from 'react'
import styled from 'styled-components'

import { Container, Row, Col } from 'reactstrap'

const StyledFooter = styled.footer`
  background: ${({theme}) => theme.primaryColor};
  padding: 20px 0;
  color: #fff;
`

export const Footer = () => (
  <StyledFooter>
    <Container>
      <Row>
        <Col>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
     </Row>
    </Container>
  </StyledFooter>
)
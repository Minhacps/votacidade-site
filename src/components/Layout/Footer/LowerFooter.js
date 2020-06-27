import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

import { Link } from '../../../components/Link';

import { getColor } from '../../../utils/styles'

const StyledFooter = styled.footer`
  background-color: ${getColor};
  padding: 15px 0;
  color: #fff;
  font-size: 15px;

  @media (min-width: 400px) {
    font-size: initial;
  }
`
const StyledAnchor = styled.a`
  color: #DCDCDC;
  &:hover{
    color: #DAA520;
    text-decoration: none;
  }
`

const StyledLink = styled(Link)`
  color: #DCDCDC;
  &:hover{
    color: #DAA520;
    text-decoration: none;
  }
`

const StyledMessage = styled.p`
  margin-bottom: 0;
  margin-left: 15px;
  display: inline-block;
`

export const LowerFooter = () => (
  <StyledFooter color="#4F1778" className="py-3 py-md-4">
    <Container>
      <Row>
        <Col className="col-12 col-md">
          <StyledLink to="/privacidade">Política de Privacidade</StyledLink>
        </Col>
        <Col className="col-12 col-md pt-3 pt-sm-0">
          <a rel="noopener noreferrer" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">
            <img alt="Licença Creative Commons" style={{ borderWidth: '0' }} src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
          </a>
          <StyledMessage>
            Este trabalho está licenciado com uma Licença <StyledLink rel="noopener noreferrer" href="http://creativecommons.org/licenses/by/4.0/" target="_blank"> Creative Commons - Atribuição  4.0 Internacional</StyledLink>.
          </StyledMessage>
        </Col>
      </Row>
    </Container>
  </StyledFooter>
);

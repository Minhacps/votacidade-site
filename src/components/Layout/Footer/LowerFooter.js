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
        <Col xl="2" className="col">
          <StyledLink className="mt-xl-1" to="/privacidade">Política de Privacidade</StyledLink>
        </Col>
        <Col xl="2" className="col text-right">
          <Link tag="a" rel="noopener noreferrer" to="http://creativecommons.org/licenses/by/4.0/" target="_blank">
            <img alt="Licença Creative Commons" style={{ borderWidth: '0' }} src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
          </Link>
        </Col>
        <Col xs="12" xl="8">
          <StyledMessage className="text-center text-xl-right d-block mt-3 mt-xl-1">
            Este trabalho está licenciado com uma Licença <StyledLink tag="a" rel="noopener noreferrer" to="http://creativecommons.org/licenses/by/4.0/" target="_blank"> Creative Commons - Atribuição  4.0 Internacional</StyledLink>.
          </StyledMessage>
        </Col>
      </Row>
    </Container>
  </StyledFooter>
);

import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'

import { Title } from '../../Title'
import { Button } from '../../Button'

import { getColor } from '../../../utils/styles'

const StyledFooter = styled.div`
  background-color: ${getColor};
  padding: 35px 0;
`

const StyledButton = styled(Button)`
  min-width: 185px;
  color: #662D91;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 15px;
`

const ListaDeContato = styled.ul`
  padding-left: 0;
  list-style: none;
  color: #fff;

  @media (min-width: 992px) and (max-width: 1200px) {
    strong {
      display: block;
    }
  }

  strong::after {
    content: '|';
    display: inline-block;
    margin-left: 5px;
  }
`

const ColFixing = styled(Col)`
  @media (min-width: 1200px) {
    margin-left: -90px;
    margin-right: -5px;
  }
`

const Contato = ({ cidade, contato }, index) => (
  <li key={`concato-${index}`}>
    <strong>{cidade}</strong> {contato}
  </li>
)

const Apoiadores = (apoiador, index) => (
  <Col key={`apoiador-${index}`} xs="4" lg="6" xl="4" className="mb-3">
    <img src={apoiador.logo} alt={`${apoiador.nome} logo`} style={{ maxWidth: '100%' }} />
  </Col>
)

export const UpperFooter = ({ contatos = [], apoiadores = []}) => (
  <StyledFooter>
    <Container>
      <Row>
        <Col sm="12" lg="4" xl="5">
          <Title tag="h4" size="18px" color="secondaryColor">Contato</Title>
          <ListaDeContato>
            {contatos.map(Contato)}
          </ListaDeContato>
        </Col>

        <ColFixing sm="12" lg="4" xl="4" className="mb-4">
          <Title tag="h4" size="18px" color="secondaryColor">Apoie o projeto!</Title>
          <p style={{ color: '#fff' }}>O Vota Cidade foi idealizado por cinco cidades da Rede Nossas Cidades, organizações sem fins lucrativos, que tem por objetivo fortalecer e incentivar a cultura da participação em questões públicas.</p>
          <Link to="/page-project">
            <StyledButton size="lg" color="secondaryColor">Saiba Mais</StyledButton>
          </Link>
        </ColFixing>

        <Col sm="12" lg="4" xl="4">
          <Row>
            {apoiadores.map(Apoiadores)}
          </Row>
        </Col>
      </Row>
    </Container>
  </StyledFooter>
)
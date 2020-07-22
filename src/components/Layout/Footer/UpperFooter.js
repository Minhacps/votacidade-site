import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'

import { Title } from '../../Title'
import { Button } from '../../Button'

import { getColor } from '../../../utils/styles'

const StyledFooter = styled.div`
  background-color: ${getColor};
`

const StyledButton = styled(Button)`
  min-width: 185px;
  text-transform: uppercase;
`

const ListaDeContato = styled.ul`
  padding-left: 0;
  list-style: none;
  color: #fff;

  strong::after {
    content: '|';
    display: inline-block;
    margin-left: 5px;
  }
`

const Contato = ({ cidade, contato }, index) => (
  <li key={`concato-${index}`}>
    <strong>{cidade}</strong> {contato}
  </li>
)

const Partnership = (partner, index) => (
  <Col key={`partner-${index}`} xs="4" sm="3" md="2" className="mb-3">
    <img src={partner.logo} alt={`Logotipo ${partner.nome}`} title={partner.nome} className="img-fluid d-block mx-auto" />
  </Col>
)

export const UpperFooter = ({ contatos = [], makers = [], supporters = [] }) => (
  <StyledFooter className="py-3">
    <Container>
      <Row className="mt-3">
        <Col xs="12" lg="6">
          <Title tag="h4" size="1.1em" color="secondaryColor">Contato</Title>
          <ListaDeContato>
            {contatos.map(Contato)}
          </ListaDeContato>
        </Col>

        <Col xs="12" lg="6">
          <Title tag="h4" size="1.1em" color="secondaryColor">Apoie o projeto!</Title>
          <p style={{ color: '#fff' }}>O Vota Cidade foi idealizado por cinco cidades da Rede Nossas Cidades, organizações sem fins lucrativos, que tem por objetivo fortalecer e incentivar a cultura da participação em questões públicas.</p>
          <Link to="/o-projeto">
            <StyledButton bold light size="lg" color="secondaryColor">Saiba Mais</StyledButton>
          </Link>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col xs="12" lg="10">
          <Title tag="h4" size="1.1em" color="secondaryColor" className="mb-3">Realização</Title>
          <Row className="align-items-center">
            {makers.map(Partnership)}
          </Row>
        </Col>
        <Col xs="12" lg="2">
          <Title tag="h4" size="1.1em" color="secondaryColor" className="mb-3">Apoio</Title>
          <Row className="align-items-center">
            {supporters.map(supporter => {
              return (
                <Col key={supporter} xs="4" sm="3" md="2" lg="12" className="mb-3">
                  <img src={supporter.logo} alt={`Logotipo ${supporter.nome}`} title={supporter.nome} className="img-fluid d-block mx-auto" />
                </Col>)
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  </StyledFooter>
)

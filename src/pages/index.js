import React from "react"
import styled from 'styled-components'
import {
  Container, Row, Col,
  Card, CardImg, CardBody, CardTitle, CardText
} from 'reactstrap'

import GroupTitle from '../components/GroupTitle'
import { Title } from '../components/Title'
import { Layout } from "../components/Layout"
import { CTAEmail } from "../components/CTAEmail"

import SEO from "../components/seo"

const StyledCard = styled(Card)`
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header style={{ backgroundColor: '#E6E6E6' }} className="pt-5 pb-5">
      <CTAEmail
        title={['Chamada para se inscrever e', <br className="d-none d-lg-block" />, ' ser avisado do lançamento']}
        subtitle="Nosso projeto está crescendo e esse ano estaremos em 5 cidades!"
      />
    </header>
    <Container className="py-5">
      <Row>
        <Col lg="6" className="mt-5 mb-4">
          <GroupTitle
            title="como funciona"
            subTitle="Chamada falando sobre dar match com o candidato!"
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col md="6" xl="3" className="pr-md-2 pr-lg-3 pr-xl-2 mb-4">
          <StyledCard>
            <CardImg top width="100%" src={require('../images/como-funciona.png')} alt="Como funciona" />
            <CardBody>
              <CardTitle><Title size="24px">Como funciona?</Title></CardTitle>
              <CardText><p style={{ marginBottom: 0 }}>Você responde um questionário de XX perguntas, com questões variadas sobre políticas públicas como transporte, saneamento básico, drogas, etc.</p></CardText>
            </CardBody>
          </StyledCard>
        </Col>
        <Col md="6" xl="3" className="pl-md-2 pl-lg-3 px-xl-2 mb-4">
          <StyledCard>
            <CardImg top width="100%" src={require('../images/afinidade.png')} alt="Afinidade" />
            <CardBody>
              <CardTitle><Title size="24px">Afinidade</Title></CardTitle>
              <CardText><p style={{ marginBottom: 0 }}>Nós cruzamos as suas respostas com os candidatos e candidatas cadastradas e te mostramos quem pensa parecido com você!</p></CardText>
            </CardBody>
          </StyledCard>
        </Col>
        <Col md="6" xl="3" className="pr-md-2 pr-lg-3 px-xl-2 mb-4">
          <StyledCard>
            <CardImg top width="100%" src={require('../images/quero-mais.png')} alt="Quero mais" />
            <CardBody>
              <CardTitle><Title size="24px">Quero mais!</Title></CardTitle>
              <CardText><p style={{ marginBottom: 0 }}>Você pode pesquisar e acessar o perfil de qualquer candidato ou candidata cadastrada para ver as respostas, comparar e tomar a sua decisão final.</p></CardText>
            </CardBody>
          </StyledCard>
        </Col>
        <Col md="6" xl="3" className="pl-md-2 pl-lg-3 pl-xl-2 mb-4">
          <StyledCard>
            <CardImg top width="100%" src={require('../images/seguranca-dos-dados.png')} alt="Segurança dos Dados" />
            <CardBody>
              <CardTitle><Title size="24px">E os dados?</Title></CardTitle>
              <CardText><p style={{ marginBottom: 0 }}>Nós nos preocupamos e respeitamos muito seus dados e por isso te damos a opção de responder o questionário de forma anônima.</p></CardText>
            </CardBody>
          </StyledCard>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage

import React from "react"
import styled from 'styled-components'
import {
  Container, Row, Col, Card, CardBody, CardText
} from 'reactstrap';

import { Layout } from "../components/Layout";
import SEO from "../components/seo";
import { DateBlock } from '../components/DateBlock';
import HeaderTitle from '../components/HeaderTitle';
import GroupTitle from '../components/GroupTitle';
import { Title } from '../components/Title';

import { datasDoCalendario } from '../data/calendario'

const ElectoralCalendarStyled = styled.div`
  background-color: ${({ theme }) => theme.lightSecondary};
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  display: block;
  font-weight: 800;

  &:hover{
    color: #DAA520;
    text-decoration: none;
  }
`

const TagAutor = styled.p`
  margin-bottom: 10px;
  color: #4a4a4a;
  font-size: 13px;
`

const PageNews = () => {
  return (
    <Layout>
      <SEO title="Fique por Dentro" />
      <HeaderTitle
        title="Notícias"
      />
      <Container>
        <GroupTitle
          title="Eleições 2020"
          subTitle="Espaço para notícias e educação política"
          className="my-5"
        />
        <Row>
          <Col md="12" lg="6" className="mb-3 d-flex flex-column justify-content-center">
            <div className="embed-responsive embed-responsive-4by3">
              <iframe title="Vídeo sobre as eleições 2020" className="embed-responsive-item" src="https://www.youtube.com/embed/WnG_UIkYDms" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Col>
          <Col lg="6">
            <Row>
              <Col md="6" className="mb-4 d-flex align-items-stretch">
                <Card>
                  <CardBody className="d-flex flex-column">
                    <Title className="h4" style={{ marginBottom: 0 }}>Novas regras para as eleições 2020</Title>
                    <TagAutor>Material por: Politize</TagAutor>
                    <CardText>Em 2020, ocorrem as eleições municipais. Entretanto, muitas reformas foram feitas nessa questão.</CardText>
                    <StyledLink rel="noopener noreferrer" href="https://www.politize.com.br/novas-regras-para-as-eleicoes-2020/" target="_blank">Leia mais</StyledLink>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="mb-4 d-flex align-items-stretch">
                <Card>
                  <CardBody className="d-flex flex-column">
                    <Title className="h4" style={{ marginBottom: 0 }}>Fundo Eleitoral</Title>
                    <TagAutor>Material por: Politize</TagAutor>
                    <CardText>O fundo eleitoral não é o fundo partidário. Entenda mais o que significa esse novo fundo.</CardText>
                    <StyledLink rel="noopener noreferrer" href="https://www.politize.com.br/fundo-eleitoral/" target="_blank">Leia mais</StyledLink>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="mb-4 d-flex align-items-stretch">
                <Card>
                  <CardBody className="d-flex flex-column">
                    <Title className="h4" style={{ marginBottom: 0 }}>Cotas de gênero em eleições</Title>
                    <TagAutor>Material por: Politize</TagAutor>
                    <CardText>Entre idas e vindas, desde os anos 90, o Brasil adota mecanismos de compensação para corrigir a subrepresentatividade feminina.</CardText>
                    <StyledLink rel="noopener noreferrer" href="https://www.politize.com.br/cotas-de-genero-em-eleicoes/" target="_blank">Leia mais</StyledLink>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="mb-4 d-flex align-items-stretch">
                <Card>
                  <CardBody className="d-flex flex-column">
                    <Title className="h4" style={{ marginBottom: 0 }}>Guia do Eleitor</Title>
                    <TagAutor>Material por: Casa Hacker</TagAutor>
                    <CardText>Saiba o que as empresas de redes sociais e os políticos estão fazendo com os seus dados. </CardText>
                    <StyledLink rel="noopener noreferrer" href="https://casahacker.org/guiadoeleitor" target="_blank">Leia mais</StyledLink>
                  </CardBody>
                </Card>
              </Col>
              {/* <Col md="6" className="mb-4 d-flex align-items-stretch">
                <Card>
                  <CardBody className="d-flex flex-column">
                    <Title className="h4" style={{ marginBottom: 0 }}>5 séries sobre política</Title>
                    <TagAutor>Material por: Politize</TagAutor>
                    <CardText>Que tal entender mais de política assistindo séries? Veja algumas séries citadas por esse artigo e a polêmica que elas geram.  </CardText>
                    <StyledLink rel="noopener noreferrer" href="https://www.politize.com.br/series-sobre-politica-2/" target="_blank">Leia mais</StyledLink>
                  </CardBody>
                </Card>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container >

      <ElectoralCalendarStyled className="mt-3 pt-5 pb-4">
        <Container>
          <GroupTitle
            title="Eleições 2020"
            subTitle="Calendário Eleitoral"
            className="mt-2 mb-4"
          />
          {datasDoCalendario && datasDoCalendario.map((dataCalendario) => (
            <DateBlock
              key={dataCalendario.date}
              date={dataCalendario.date}
              title={dataCalendario.title}
              text={dataCalendario.text}
            />
          ))}
        </Container>
      </ElectoralCalendarStyled>
    </Layout >
  )
}

export default PageNews;
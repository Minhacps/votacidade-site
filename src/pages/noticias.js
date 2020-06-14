import React from "react"
import styled from 'styled-components'
import {
  Container, Row, Col
} from 'reactstrap';


import { Layout } from "../components/Layout";
import SEO from "../components/seo";
import { Banner } from '../components/Banner';
import { Title } from '../components/Title';
import { DateBlock } from '../components/DateBlock';

const StyledVideo = styled.video`
  width: 100%;
`

const StyledSupTitle = styled.p`
  color: #B5B5B5;
  font-size: 0.8rem;
`

const NewsBlockStyled = styled.div`
  color:#959595;
  background-color: #dedede;
  padding: 5px;
  height: 100px;
`

const ElectoralCalendarStyled = styled.div`
  background-color: #dedede;
`

const PageNews = () => {
  return (
    <Layout>
      <SEO title="Fique por Dentro" />
      <Banner>Fique por Dentro</Banner>
      <StyledSupTitle>Eleições 2020</StyledSupTitle>
      <Title>Eleições Municipais</Title>
      <Container>
        <Row>
          <Col md="12" lg="6" className="mb-3">
            <StyledVideo controls >
              <source src="https://www.youtube.com/embed/oavMtUWDBTM" type="video/mp4" />
            </StyledVideo>
          </Col>
          <Col lg="6">
            <Row>
              <Col md="6" className="mb-4"><NewsBlockStyled>Câmara Municipal</NewsBlockStyled></Col>
              <Col md="6" className="mb-4"><NewsBlockStyled>Vereador</NewsBlockStyled></Col>
              <Col md="6" className="mb-4"><NewsBlockStyled>O que é faz um vereador</NewsBlockStyled></Col>
              <Col md="6"><NewsBlockStyled>O que é faz um vereador</NewsBlockStyled></Col>
            </Row>
          </Col>
        </Row>
      </Container >

    <ElectoralCalendarStyled className="mt-3 pt-2">
      <Container>
        <StyledSupTitle>Eleições 2020</StyledSupTitle>
        <Title>Calendário Eleitoral</Title>
        <DateBlock date='05-Jul-2020' title='Início das convenções partidárias' text='Bla bla bla ' />
        <DateBlock date='05-Jul-2020' title='Início das convenções partidárias' text='. ' />
        <DateBlock date='05-Jul-2020' title='Início das convenções partidárias' text='. ' />
      </Container>
    </ElectoralCalendarStyled>
    </Layout >
  )
}

export default PageNews;
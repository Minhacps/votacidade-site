import React from "react"
import styled from 'styled-components'
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';


import { Layout } from "../components/Layout";
import SEO from "../components/seo";
import { Banner } from '../components/Banner';
import { Title } from '../components/Title';
import { DateBlock } from '../components/DateBlock';


const PoliticalEducationStyled = styled.div`
  margin: 5px;
`

const NewsSectionStyled = styled.div`
  display: block;
`

const StyledVideo = styled.video`
  width: 100%;
  padding: 5px;

  @media (min-width: 768px) {
    width: 50%;
    background-color: red;
    display: inline-block;
  }
`

const StyledSupTitle = styled.p`
  color: #B5B5B5;
  font-size: 0.8rem;
`

const NewsSection2Styled = styled.div`

`

const NewsBlockStyled = styled.div`
  color:#959595;
  background-color: #dedede;
  margin: 5px 5px;
  padding: 5px;
  width: 47%;
  height: 100px;
  display: inline-block;
`

const ElectoralCalendarStyled = styled.div`
  background-color: #dedede;
`

const Div = styled.div`
  margin: 5px 5px 0px 5px;
  padding-bottom: 5px;
`



const PageNews = () => {

  return (
    <Layout>
      <SEO title="Fique por Dentro" />
      <Banner>Fique por Dentro</Banner>
      <PoliticalEducationStyled>
        <StyledSupTitle>Eleições 2020</StyledSupTitle>
        <Title>Eleições Municipais</Title>
        <NewsSectionStyled>
          <StyledVideo controls >
            <source src="movie.mp4" type="video/mp4" />
          </StyledVideo>
          <NewsSection2Styled>
            <NewsBlockStyled>Câmara Municipal</NewsBlockStyled>
            <NewsBlockStyled>Vereador</NewsBlockStyled>
            <NewsBlockStyled>O que é faz um vereador</NewsBlockStyled>
            <NewsBlockStyled>O que é faz um vereador</NewsBlockStyled>
          </NewsSection2Styled>
        </NewsSectionStyled>
      </PoliticalEducationStyled>
      <ElectoralCalendarStyled>
        <Div>
          <StyledSupTitle>Eleições 2020</StyledSupTitle>
          <Title>Calendário Eleitoral</Title>
          <DateBlock date='05-Jul-2020' title='Início das convenções partidárias' text='Bla bla bla ' />
          <DateBlock date='05-Jul-2020' title='Início das convenções partidárias' text='. ' />
          <DateBlock date='05-Jul-2020' title='Início das convenções partidárias' text='. ' />
        </Div>
      </ElectoralCalendarStyled>
    </Layout>
  )
}

export default PageNews;
import React from "react"
import styled from 'styled-components'
import {
  Container, Row, Col, Card, CardImg, CardBody, CardText
} from 'reactstrap';

import { Layout } from "../components/Layout";
import SEO from "../components/seo";
import { DateBlock } from '../components/DateBlock';
import HeaderTitle from '../components/HeaderTitle';
import GroupTitle from '../components/GroupTitle';
import series from '../images/5seriessobrepolitica.png';
import novasregras from '../images/novasregraseleicoes.png';
import cotasdegenero from '../images/cotasdegenero.png';
import fundoeleitoral from '../images/fundoeleitoral.png';

import { datasDoCalendario } from '../data/calendario'

const ElectoralCalendarStyled = styled.div`
  background-color: ${({ theme }) => theme.lightSecondary};
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  &:hover{
    color: #DAA520;
    text-decoration: none;
  }
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
          <Col md="12" lg="6" className="mb-3">
            <div className="embed-responsive embed-responsive-4by3">
              <iframe title="Vídeo sobre as eleições 2020" className="embed-responsive-item" src="https://www.youtube.com/embed/WnG_UIkYDms" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

          </Col>
          <Col lg="6">
            <Row>
              <Col md="6" className="mb-4">
                <Card>
                  <CardImg top width="100%" height="70%" src={novasregras} alt="Card image cap" />
                  <CardBody>
                    <CardText>
                      Em 2020, ocorrem as eleições municipais. Entretanto, muitas reformas foram feitas nessa questão.
                      <StyledLink rel="noopener noreferrer" href="https://www.politize.com.br/novas-regras-para-as-eleicoes-2020/" target="_blank">Leia mais</StyledLink>.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="mb-4">
                <Card>
                  <CardImg top width="100%" src={fundoeleitoral} alt="Card image cap" />
                  <CardBody>
                    <CardText>O fundo eleitoral não é o fundo partidário. Entenda mais o que significa esse novo fundo.
                      <StyledLink rel="noopener noreferrer" href="https://www.politize.com.br/fundo-eleitoral/" target="_blank">Leia mais</StyledLink>.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="mb-4">
                <Card>
                  <CardImg top width="100%" src={cotasdegenero} alt="Card image cap" />
                  <CardBody>
                    <CardText>Entre idas e vindas, desde os anos 90, o Brasil adota mecanismos de compensação para corrigir a subrepresentatividade feminina.
                      <StyledLink rel="noopener noreferrer" href="https://www.politize.com.br/cotas-de-genero-em-eleicoes/" target="_blank">Leia mais</StyledLink>.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="mb-4">
                <Card>
                  <CardImg top width="100%" src={series} alt="Card image cap" />
                  <CardBody>
                    <CardText>Que tal entender mais de política assistindo séries? Veja algumas séries citadas por esse artigo e a polêmica que elas geram.
                      <StyledLink rel="noopener noreferrer" href="https://www.politize.com.br/series-sobre-politica-2/" target="_blank">Leia mais</StyledLink>.
                      </CardText>
                  </CardBody>
                </Card>
              </Col>
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
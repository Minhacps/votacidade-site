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

// const Video = styled.div`
// position: relative;
// top: 50%;
// transform: translateY(-50%); 

// `

const ElectoralCalendarStyled = styled.div`
  background-color: #dedede;
`

const PageNews = () => {
  return (
    <Layout>
      <SEO title="Fique por Dentro" />
      <HeaderTitle />
      <Container>
        <GroupTitle
          title="Eleições 2020"
          subTitle="Espaço para notícias e educação política"
        />
        <Row>
          <Col md="12" lg="6" className="mb-3">
            <div className="embed-responsive embed-responsive-4by3">
              <iframe title="Vídeo sobre as eleições 2020" className="embed-responsive-item" src="https://www.youtube.com/embed/kxfGZwFQgHM" allowfullscreen></iframe>
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
                      <a href='https://www.politize.com.br/novas-regras-para-as-eleicoes-2020/'>Leia mais</a>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="mb-4">
                <Card>
                  <CardImg top width="100%" src={fundoeleitoral} alt="Card image cap" />
                  <CardBody>
                    <CardText>O fundo eleitoral não é o fundo partidário. Entenda mais o que significa esse novo fundo. <a href='https://www.politize.com.br/fundo-eleitoral/'>Leia mais</a></CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="mb-4">
                <Card>
                  <CardImg top width="100%" src={cotasdegenero} alt="Card image cap" />
                  <CardBody>
                    <CardText>Entre idas e vindas, desde os anos 90, o Brasil adota mecanismos de compensação para corrigir a subrepresentatividade feminina. <a href='https://www.politize.com.br/cotas-de-genero-em-eleicoes/'>Leia mais</a></CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="mb-4">
                <Card>
                  <CardImg top width="100%" src={series} alt="Card image cap" />
                  <CardBody>
                    <CardText>Que tal entender mais de política assistindo séries? Veja algumas séries citadas por esse artigo e a polêmica que elas geram.  <a href='https://www.politize.com.br/series-sobre-politica-2/'>Leia mais</a></CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >

      <ElectoralCalendarStyled className="mt-3 pt-2">
        <Container>
          <GroupTitle
            title="Eleições 2020"
            subTitle="Calendário Eleitoral"
          />
          <DateBlock date='20-Jul-2020' title='Início da convenções partidárias' text='' />
          <DateBlock date='05-Ago-2020' title='Fim convenções partidárias' text='' />
          <DateBlock date='14-Ago-2020' title='Fim do registros de candidaturas' text='' />
          <DateBlock date='15-Ago-2020' title='Início da propaganda eleitoral' text='' />
          <DateBlock date='19-Set-2020' title='Final do julgamento das candidaturas' text='' />
          <DateBlock date='19-Set-2020' title='Candidatos(as) não pode ser presos' text='' />
          <DateBlock date='04-Out-2020' title='Primeiro turno das eleições' text='' />
          <DateBlock date='25-Out-2020' title='Segundo turno das eleições' text='' />
        </Container>
      </ElectoralCalendarStyled>
    </Layout >
  )
}

export default PageNews;
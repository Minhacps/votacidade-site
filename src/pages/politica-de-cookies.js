import React from "react";
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components'

import { Layout } from "../components/Layout";
import SEO from "../components/seo";
import HeaderTitle from '../components/HeaderTitle';
import LongParagraph from '../components/Text/LongParagraph';

const StyledAnchor = styled.a`
  color: ${({theme}) => theme.primaryColor};
  &:hover{
    color: #4F1778;
    text-decoration: none;
  }
`

const CookiesPolicy = () => {
  return (
    <Layout>
      <SEO title="Política de Cookies" />
      <HeaderTitle title="Política de Cookies" />

      <Container className="my-5">
        <Row>
          <Col>
            <LongParagraph><strong>Data de vigência: 15 de julho de 2020</strong></LongParagraph>
            <LongParagraph>
              Esta Política de Cookies descreve como o Vota Cidade usa cookies e tecnologias similares para fornecer, personalizar, avaliar, melhorar, promover e proteger nossos Serviços.
              Se você tiver quaisquer comentários ou perguntas sobre esta Política de Cookies, sinta-se à vontade para nos contatar em <StyledAnchor href="mailto:privacidade@vota.com" title="E-mail para: privacidade@vota.com">privacidade@vota.com</StyledAnchor>.
            </LongParagraph>

            <LongParagraph>
              <strong>Cookies</strong>
            </LongParagraph>
            <LongParagraph>
              Cookies são pequenos pedaços de texto enviados para o seu navegador quando você visita um site.
              Os Cookies têm uma variedade de funções, como, por exemplo, nos permitir lembrar determinadas informações que você nos fornece enquanto navega em páginas dos Serviços.
              Nós usamos cookies no site, em domínios associados de www.vota.org.br e nos aplicativos móveis e da Web do Vota Cidade para as seguintes finalidades:
              <ul className="mt-3">
                <li>
                  <LongParagraph>
                    <strong>Lorem ipsum dolor sit amet.</strong>&nbsp;
                    Quisque et elit vitae quam porttitor lacinia in at erat. Nam malesuada mi ipsum, vitae scelerisque odio sollicitudin rhoncus.
                    Nam ultricies enim quis mollis varius. Cras vel sem a leo eleifend accumsan.
                  </LongParagraph>
                </li>
              </ul>
            </LongParagraph>

            <LongParagraph>
              Nós podemos atualizar esta Política de Cookies de vez em quando.
              Quando fazemos alterações, atualizamos a "Data de vigência" na parte superior da Política de Cookies e a publicamos em nossos sites.
              Incentivamos você a verificar periodicamente a revisão desta Política de Cookies para quaisquer alterações desde sua última visita.
            </LongParagraph>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default CookiesPolicy;

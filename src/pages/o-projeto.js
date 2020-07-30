import React from "react";
import { Container, Row } from 'reactstrap';
import styled from 'styled-components';

import { Layout } from "../components/Layout";
import SEO from "../components/seo";

import { alfabeticOrder } from '../utils/helper';

import ProjectDetails from "../components/ProjectDetails";
import HeaderTitle from '../components/HeaderTitle';
import GroupTitle from "../components/GroupTitle";
import TeamCard from "../components/TeamCard";
import CidadesCard from "../components/CidadesCard";

import { teamMembers, cidades } from '../data';

const CidadesWrapper = styled.section`
  background-color: ${({theme}) => theme.lightSecondary};
  margin-bottom: 40px;

  .cidades-wrapper {
    display: flex;
    transform: translateY(-50px);
  }

  @media (min-width: 800px) {
    margin-top: -20px;

    .cidades-wrapper {
      transform: translateY(-60px);
    }
  }
`

const PageProject = () => {
  return (
    <Layout>
      <SEO title="O Projeto" />
      <HeaderTitle
        title="O Projeto"
      />
      <ProjectDetails
        miniTitle={"conheça o projeto"}
        title={"Encontre um candidato que realmente te representa"}
        text={"O Vota Cidade é uma ferramenta para a população de Campina Grande (PB), Campinas (SP), João Pessoa (PB), Porto Alegre (RS) e Recife (PE) encontrar candidatos(as) a vereador(a) que pensam parecido nas eleições de 2020. O legislativo tem centenas, e até milhares, de candidatos(as), o que dificulta encontrar alguém que realmente represente a diversidade das cidades. Por isso, o Vota cruza as respostas do(a) eleitor(a) com os(as) candidatos(as) cadastrados(as), mostrando a lista por ordem de afinidade em alguns minutos. Assim, você escolhe alguém que pensa parecido e pode cobrar melhor depois!"}
      />
      <ProjectDetails
        miniTitle={"ajude o projeto"}
        title={"Em busca de eleições cada vez mais democráticas!"}
        text={"Colabore com o Vota! Para garantir as redes de mobilização das 5 cidades que vão fazer o Vota chegar em 2600 candidatas(os) a vereador(a) e nos mais de 3 milhões de eleitores(as), precisamos da sua doação. As 160 cadeiras que estão em jogo, definirão as políticas que impactam a vida de milhares de pessoas. Escolha a sua cidade e construa eleições com participação ativa da sociedade civil e eleitores(as) mais conscientes do seu voto!"}
        style={{ backgroundColor: '#FFF9F1'}}
      />
      <CidadesWrapper>
        <Container>
          <Row className="cidades-wrapper mt-3" xs="2" sm="3" md="4" lg="5" noGutters>
            {cidades
              .sort(alfabeticOrder('title'))
              .map(CidadesCard)}
          </Row>
        </Container>
      </CidadesWrapper>

      <Container>
        <GroupTitle
          title="realização"
          subTitle="Conheça quem faz acontecer!"
        />
        <Row xs="2" sm="3" md="4" lg="5" className="mt-2 mb-5" noGutters>
          {teamMembers
            .sort(alfabeticOrder('name'))
            .map(member => (
              <TeamCard
                key={member.name}
                member={member}
              />
            ))}
        </Row>
      </Container>
    </Layout>
  )

}

export default PageProject

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
  background-color: #FFF9F1;
  margin-bottom: 40px;

  .cidades-wrapper {
    display: flex;
    transform: translateY(-50px);

    @media (min-width: 800px) {
      transform: translateY(-80px);
    }
  }
`

const PageProject = () => {
  return (
    <Layout>
      <SEO title="Page Project" />
      <HeaderTitle
        title="O Projeto"
      />
      <ProjectDetails
        miniTitle={"conheça o projeto"}
        title={"Chamada falando sobre a iniciativa"}
        text={"Nesse texto podemos falar sobre o projeto, a iniciativa e as organizações que fazem parte disso. Aqui pode entrar até algum texto bem elaborado para dar introdução a contribuição em dinheiro. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      />
      <ProjectDetails
        miniTitle={"ajude o projeto"}
        title={"Chamada sobre serem organizações sem fins lucrativos"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        style={{ backgroundColor: '#FFF9F1'}}
      />
      <CidadesWrapper>
        <Container>
          <Row className="cidades-wrapper" xs="2" sm="3" md="4" lg="5" noGutters>
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

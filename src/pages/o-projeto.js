import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Layout } from "../components/Layout";
import SEO from "../components/seo";

import ProjectDetails from "../components/ProjectDetails";
import HeaderTitle from '../components/HeaderTitle';
import Card from '../components/Card'
import GroupTitle from "../components/GroupTitle";
import TeamCard from "../components/TeamCard";
import { teamMembers } from '../data/team-members';

const PageProject = () => {
  return (
    <Layout>
      <SEO title="Page Project" />
      <HeaderTitle />
      <ProjectDetails
        miniTitle={"conheça o projeto"}
        title={"Chamada falando sobre a iniciativa"}
        text={"Nesse texto podemos falar sobre o projeto, a iniciativa e as organizações que fazem parte disso. Aqui pode entrar até algum texto bem elaborado para dar introdução a contribuição em dinheiro. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      />
      <ProjectDetails
        miniTitle={"ajude o projeto"}
        title={"Chamada sobre serem organizações sem fins lucrativos"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        style={{ backgroundColor: '#E8E8E8', paddingBottom: 40 }}
      />
      <Container>
        <Row style={{ transform: 'translateY(-75px)' }} noGutters={true}>
          <Col className="pr-1">
            <Card
              title="Campinas"
              image="https://www.livehere.com.br/blog/wp-content/uploads/2019/05/morar-em-campinas-990x556.jpg"
              linkTo="https://www.minhacampinas.org.br/"
            />
          </Col>
          <Col className="px-1">
            <Card
              title="Campinas"
              image="https://www.livehere.com.br/blog/wp-content/uploads/2019/05/morar-em-campinas-990x556.jpg"
              linkTo="https://www.minhacampinas.org.br/"
            />
          </Col>
          <Col className="px-1">
            <Card
              title="Campinas"
              image="https://www.livehere.com.br/blog/wp-content/uploads/2019/05/morar-em-campinas-990x556.jpg"
              linkTo="https://www.minhacampinas.org.br/"
            />
          </Col >
          <Col className="px-1">
            <Card
              title="Campinas"
              image="https://www.livehere.com.br/blog/wp-content/uploads/2019/05/morar-em-campinas-990x556.jpg"
              linkTo="https://www.minhacampinas.org.br/"
            />
          </Col>
          <Col className="pl-1">
            <Card
              title="Campinas"
              image="https://www.livehere.com.br/blog/wp-content/uploads/2019/05/morar-em-campinas-990x556.jpg"
              linkTo="https://www.minhacampinas.org.br/"
            />
          </Col>
        </Row>
        <GroupTitle
          title="realização"
          subTitle="Conheça quem faz acontecer!"
        />
        <Row className="mt-4">
          {teamMembers.map(member => (
            <TeamCard
              member={member}
            />
          ))}
        </Row>


      </Container>
    </Layout>
  )

}

export default PageProject

import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Layout } from "../components/Layout";
import SEO from "../components/seo";

import ProjectDetails from "../components/PageProject/ProjectDetails";

import './PageProject.css';

const PageProject = (props) => {
  return(
    <Layout>
      <SEO title="Page Project" />
      <Container className='PageProjectHeader' fluid={true}>
        <Row>
          <Col>
            <h1 className='title'>O Projeto</h1>
          </Col>
        </Row>
      </Container>
      <ProjectDetails 
        miniTitle={"conheça o projeto"}
        title={"Chamada falando sobre a iniciativa"}
        text={"Nesse texto podemos falar sobre o projeto, a iniciativa e as organizações que fazem parte disso. Aqui pode entrar até algum texto bem elaborado para dar introdução a contribuição em dinheiro. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        // style={""}
      />
      <ProjectDetails
        miniTitle={"ajude o projeto"}
        title={"Chamada sobre serem organizações sem fins lucrativos"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        style={5}
      />
    </Layout>
  )
  
}

export default PageProject

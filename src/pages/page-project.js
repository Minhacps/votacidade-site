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
      <ProjectDetails />
    </Layout>
  )
  
}

export default PageProject

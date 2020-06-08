import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Layout } from "../components/Layout";
import SEO from "../components/seo";
import { CTAEmail } from "../components/CTAEmail"
import Title from '../components/Title';

import ProjectDetails from "../components/PageProject/ProjectDetails";

import './PageProject.css';

const PageProject = (props) => (
  <Layout>
    <SEO title="Page Project" />
    <Container className='PageProjectHeader' fluid={true}>
      <Row>
        <Col>
          <div>
            <h1 className='title'>O Projeto</h1>
              <h1>çladkjsfçldj</h1>
          </div>
        </Col>

      </Row>
    </Container>
  </Layout>
)

export default PageProject

import React from "react"
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'

import { Layout } from "../components/Layout"
import { Link } from "../components/Link"
import Image from "../components/image"
import { Button } from '../components/Button'
import SEO from "../components/seo"

const CTAEmail = ({ title }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Form action="">
        <Row from>
          <Col lg="4">
            <FormGroup>
              <Input type="mail" name="email" placeholder="Digite seu e-mail" />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <Input type="cidade" name="cidade" placeholder="Digite sua cidade" />
            </FormGroup>
          </Col>
          <Col lg="4">
            <Button block type="submit">Enviar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

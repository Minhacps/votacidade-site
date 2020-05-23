/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { Container, Row, Col } from 'reactstrap'

import { Header, Footer } from "./"

import 'bootstrap/dist/css/bootstrap.min.css'

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }

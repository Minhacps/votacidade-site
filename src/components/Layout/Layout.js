/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components'

import { Header, Footer } from "./"

import 'bootstrap/dist/css/bootstrap.min.css'

import "./layout.css"

const theme = {
  primaryColor: '#662D91',
  secondaryColor: '#FBB040',
  darkGray: '#161616',
  lightGray: '#E6E6E6',
  sucess: '#46A46C',
  error: '#DA304C',
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }

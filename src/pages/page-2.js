import React from "react"

import { Layout } from "../components/Layout"
import SEO from "../components/seo"
import { Link } from '../components/Link';

const SecondPage = (props) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

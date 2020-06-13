import React from "react"

import { Layout } from "../components/Layout"
import { Link } from "../components/Link"
import { CTAEmail } from "../components/CTAEmail"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header style={{ backgroundColor: '#E6E6E6' }} className="pt-5 pb-5">
      <CTAEmail
        title={['Chamada para se inscrever e', <br className="d-none d-lg-block" />, ' ser avisado do lançamento']}
        subtitle="Nosso projeto está crescendo e esse ano estaremos em 5 cidades!"
      />
    </header>
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

import React from "react"
import styled from 'styled-components'

import { Layout } from "../components/Layout"
import SEO from "../components/seo"
import { Banner } from '../components/Banner';
import { Title } from '../components/Title'

const PoliticalEducationStyled = styled.div`
  display: inline-block;
  background-color: yellow;
  margin: 5px;
`

const NewsSectionStyled = styled.div`
  display: inline-block;
`

const StyledVideo = styled.video`
  width: 100%;
  padding-left: 10px;
  padding-rigth: 30px;
`

const NewsBlockStyled = styled.div`
  color:#959595;
  background-color: #dedede;
  margin: auto;
  width: 100%;
`


const PageNews = () => {

    const title = "teste";

    return (
        <Layout>
            <SEO title="Fique por Dentro" />
            <Banner>Fique por Dentro</Banner>
            <PoliticalEducationStyled>
                <Title>Espaço para notícias e educação política</Title>
                <NewsSectionStyled>
                    <StyledVideo controls >
                        <source src="movie.mp4" type="video/mp4" />
                    </StyledVideo>
                    <NewsBlockStyled>Título</NewsBlockStyled>
                </NewsSectionStyled>
            </PoliticalEducationStyled>
        </Layout>
    )
}

export default PageNews;

/*
            {title && <Title tag="h1" weight="800" size="2.5rem">{title}</Title>}



*/
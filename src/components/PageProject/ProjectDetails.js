import React from 'react'
import { Container, Row } from 'reactstrap';

import styled from 'styled-components';
import { Title } from '../Title';
import './ProjectDetails.css';

const P = styled.p`
  font-family: Roboto;
  font-size: 18px;
  margin-top: 24px; 
`;

const Coluna = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
`

const ProjectDetails = (props) => {
  const estlizacao = props.fundo;
  return (
    <>
      <div style={{backgroundColor: estlizacao}}>
        <Container>
          <Row>
            <Coluna>
              <h1 style={{ fontSize: '18px', color: '#FBB040', fontWeight: 'bold' }}>{props.miniTitle}</h1>
              <Title>{props.title}</Title>
              <P>{props.text}</P>
            </Coluna>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ProjectDetails;
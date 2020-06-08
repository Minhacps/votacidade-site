import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const StyledTitle = styled.h3`
  color: #662D91;
  font-weight: ${({ weight }) => weight || 700};
  ${({ size }) => size && `font-size: ${size}`};
`

const P = styled.p`
  font-family: Roboto;
  font-size: 18px;
  margin-top: 24px; 
`;

const Coluna = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
`


const ProjectDetails = () => {
  return (
    <Container>
      <Row>
        <Coluna>
          <h1 style={{fontSize: '18px', color: '#FBB040',fontWeight: 'bold' }}>conheça o projeto</h1>
          <StyledTitle size="40px">Chamada falando sobre a iniciativa</StyledTitle>

          <P>Nesse texto podemos falar sobre o projeto, a iniciativa e as organizações que fazem parte disso. Aqui pode entrar até algum texto bem elaborado para dar introdução a contribuição em dinheiro. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
        </Coluna>
      </Row>
    </Container>
  )
}

export default ProjectDetails;
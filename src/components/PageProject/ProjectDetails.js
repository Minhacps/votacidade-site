import React from 'react'
import { Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { Title } from '../Title';

const StyledContainer = styled.div`
  background-color: #E8E8E8;
`;

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
    <>
      <Container>
        <Row>
          <Coluna>
            <h1 style={{ fontSize: '18px', color: '#FBB040', fontWeight: 'bold' }}>conheça o projeto</h1>
            <Title size="40px">Chamada falando sobre a iniciativa</Title>

            <P>Nesse texto podemos falar sobre o projeto, a iniciativa e as organizações que fazem parte disso. Aqui pode entrar até algum texto bem elaborado para dar introdução a contribuição em dinheiro. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
          </Coluna>
        </Row>
      </Container>

      <StyledContainer>
        <Container>
          <Row>
            <Coluna>
              <h1 style={{ fontSize: '18px', color: '#FBB040', fontWeight: 'bold' }}>ajude o projeto</h1>
              <Title size="40px">Chamada sobre serem organizações<br></br> sem fins lucrativos</Title>

              <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
            </Coluna>
          </Row>
        </Container>
      </StyledContainer>
    </>
  )
}

export default ProjectDetails;
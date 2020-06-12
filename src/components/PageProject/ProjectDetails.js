import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

import GroupTitle from '../GroupTitle';
import './ProjectDetails.css'

const P = styled.p`
  font-family: Roboto;
  font-size: 18px;
  margin-top: 24px; 
`;

const Coluna = styled.div`
  padding: 80px 0;
`

const ProjectDetails = ({ miniTitle, title, text, ...props }) => (
  <div {...props}>
    <Container>
      <Coluna>
        <GroupTitle 
          title={miniTitle}
          subTitle={title}
        />
        <P>{text}</P>
      </Coluna>
    </Container>
  </div>
  )

export default ProjectDetails;
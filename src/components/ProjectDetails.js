import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

import GroupTitle from './GroupTitle'

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
        <p className="mt-3">{text}</p>
      </Coluna>
    </Container>
  </div>
  )

export default ProjectDetails;
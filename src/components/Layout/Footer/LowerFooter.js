import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

import { getColor } from '../../../utils/styles'

const StyledFooter = styled.div`
  background-color: ${getColor};
  padding: 15px 0;
  color: #fff;
  font-size: 15px;

  @media (min-width: 400px) {
    font-size: initial;
  }
`
const StyledLink = styled.a`
  color: #FBB040;
  &:hover{
    color: #DAA520;
    text-decoration: none;
  }
`

const StyledMessage = styled.p`
  margin-bottom: 0;
  margin-left: 15px;
  display: inline-block;
`

export const LowerFooter = () => (
  <StyledFooter color="#4F1778">
    <Container className="text-center">
      <a rel="noopener noreferrer" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">
        <img alt="Licença Creative Commons" style={{ borderWidth: '0' }} src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
      </a>
      <StyledMessage>
        Este trabalho está licenciado com uma Licença <StyledLink rel="noopener noreferrer" href="http://creativecommons.org/licenses/by/4.0/" target="_blank"> Creative Commons - Atribuição  4.0 Internacional</StyledLink>.
      </StyledMessage>
    </Container>
  </StyledFooter >
)


/*

 © {new Date().getFullYear()} Todos os direitos reservados a <strong>Vota Cidade</strong>

*/
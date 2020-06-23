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

export const LowerFooter = () => (
  <StyledFooter color="#4F1778">
    <Container className="text-center">
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        <img alt="Licença Creative Commons" style={{borderWidth:'0'}} src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
        </a>
        <br />Este trabalho está licenciado com uma Licença 
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"> Creative Commons - Atribuição  4.0 Internacional</a>.
    </Container>
  </StyledFooter >
)


/*

 © {new Date().getFullYear()} Todos os direitos reservados a <strong>Vota Cidade</strong>

*/
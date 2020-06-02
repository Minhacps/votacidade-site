import React, { useState } from "react"
import styled from 'styled-components'

import { Container, Row, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

import { Menu } from './'

const StyledHeader = styled.header`
  background: ${({theme}) => theme.primaryColor};
`

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledHeader isOpen={isOpen}>
      <Container>
        <Row>
        <Navbar className="col" light expand="md">
          <NavbarBrand href="/">Vota Cidade</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Menu />
          </Collapse>
        </Navbar>
        </Row>
      </Container>
    </StyledHeader>
  )
}

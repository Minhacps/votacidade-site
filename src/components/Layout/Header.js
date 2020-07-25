import React, { useState } from "react"

import { Container, Row, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

import { Menu } from './'

import logo from '../../images/logo-vota-cidades.svg'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Container>
        <Row>
        <Navbar className="col" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="Logo VotaCidades" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Menu />
          </Collapse>
        </Navbar>
        </Row>
      </Container>
    </header>
  )
}

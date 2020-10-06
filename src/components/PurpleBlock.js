import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Title } from '../components/Title';
import { Button } from '../components/Button';
import {Link} from '../components/Link';

import styled from 'styled-components';

const PurpleContainer = styled(Container)`
    background-color: #662D91;
    text-align: center;
    padding: 48px;
`;

const PurpleBlock = () => {
    return (
        <PurpleContainer fluid>
            <Container>
                <Row>
                    <Col lg={8}>
                        <Title tag="h3" color="white " className="h4">É candidato(a) a vereador(a)? Garanta sua participação</Title>
                    </Col>
                    <Col lg={3}>
                        <Link tag="a" href="https://app.vota.org.br" >
                            <Button block bold size="lg" color="primaryColor" style={{ border: '2px solid white', transform: 'translateY(-15px)' }} className="py-3 mt-xs-3">COMEÇAR</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </PurpleContainer>
    )

}

export default PurpleBlock;
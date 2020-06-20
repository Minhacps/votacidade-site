import React from 'react'
import styled from 'styled-components';
import {  Col } from 'reactstrap';

import { Title } from './Title';

const StyledTeamImage = styled.img`
    border-radius: 10px;
    max-width: 100%;
`

const TeamCard = (props) => {
    return (
        <Col className="text-center px-2 mt-3" xs="6" sm="4" md="3" lg="3" xl="2">
            <figure className="mb-2">
                <StyledTeamImage style={{maxWidth: '100%'}} src={props.member.photo} alt={props.member.name}/>
            </figure>
            <Title size="0.9rem" tag="h5" color="#662D91">
                {props.member.name}
            </Title>
            <Title style={{ marginTop: '-8px' }} size="0.8rem" tag="h6" color="#959595">
                {props.member.role}
            </Title>
        </Col>
    )
}

export default TeamCard

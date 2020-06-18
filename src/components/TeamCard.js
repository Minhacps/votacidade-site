import React from 'react'
import styled from 'styled-components';
import {  Col } from 'reactstrap';

import { Title } from './Title';

const StyledTeamCard = styled.div`
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 175px;
`

const TeamCard = (props) => {
    return (
        <Col className="px-2 mt-3" xs="6" sm="5" md="3" lg="3" xl="2">
            <StyledTeamCard className="mb-2">
                <img style={{borderRadius: '10px'}} src={props.member.photo} alt={props.member.name}/>
            </StyledTeamCard>
            <Title style={{ textAlign: 'center' }} size="0.9rem" tag="h5" color="#662D91">
                {props.member.name}
            </Title>
            <Title style={{ textAlign: 'center', marginTop: '-8px' }} size="0.8rem" tag="h6" color="#959595">
                {props.member.role}
            </Title>
        </Col>
    )
}

export default TeamCard

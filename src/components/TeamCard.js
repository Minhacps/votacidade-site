import React from 'react'
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

import { buildBackgroundImage } from '../utils/styles'
import { Title } from './Title';

const StyledTeamCard = styled.div`
    background-color: lightgray;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    min-height: 170px;
    overflow: hidden;
    ${buildBackgroundImage}
`

const TeamCard = (props) => {
    return (
        <Row noGutters={true} className="mt-4">
            <Col className="pr-2">
                <StyledTeamCard />
                <Title style={{textAlign: 'center'}} size="0.9rem" tag="h6" color="#662D91">{props.nome1}</Title>
            </Col>
            <Col className="px-2">
                <StyledTeamCard />
                <Title style={{textAlign: 'center'}} size="0.9rem" tag="h6" color="#662D91">{props.nome2}</Title>
            </Col>
            <Col className="px-2">
                <StyledTeamCard />
                <Title style={{textAlign: 'center'}} size="0.9rem" tag="h6" color="#662D91">{props.nome3}</Title>
            </Col>
            <Col className="px-2">
                <StyledTeamCard />
                <Title style={{textAlign: 'center'}} size="0.9rem" tag="h6" color="#662D91">{props.nome4}</Title>
            </Col>
            <Col className="px-2">
                <StyledTeamCard />
                <Title style={{textAlign: 'center'}} size="0.9rem" tag="h6" color="#662D91">{props.nome5}</Title>
            </Col>
            <Col className="px-2">
                <StyledTeamCard />
                <Title style={{textAlign: 'center'}} size="0.9rem" tag="h6" color="#662D91">{props.nome6}</Title>
            </Col>
        </Row>
    )
}

export default TeamCard

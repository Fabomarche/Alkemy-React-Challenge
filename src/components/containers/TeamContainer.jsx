import {useState} from 'react'
import {UseTeamContext} from '../../context/teamContext'

import HeroTeamCard from '../Card/HeroTeamCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'

const TeamContainer = () => {
    const {team, teamStats} = UseTeamContext()
    return (
        <Container>
            <h3 className="text-center">Your Hero Team</h3>
            {team.length === 0 ? <h3>Team Empty</h3>
            :
            <div className="d-flex justify-content-center flex-wrap bg-dark">
                {team.map(hero => <HeroTeamCard hero={hero} key={hero.id}/>)}
            </div>
            
            }
            <h4 className="text-center">Team Stats</h4>
            <Container>
            <Row className="d-flex align-items-center mb-1"> 
                    <Col>
                        <p className="mb-0 me-2">Intelligence</p>
                    </Col>
                    <Col>
                        <ProgressBar variant="info" now={teamStats.intelligencePer} label={teamStats.intelligencePer} className="w-100"/>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-1">
                    <Col>
                        <p className="mb-0 me-2">Strength</p>
                    </Col>
                    <Col>
                        <ProgressBar variant="success" now={teamStats.strengthPer} label={teamStats.strengthPer} className="w-100"/>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-1">
                    <Col>
                        <p className="mb-0 me-2">Speed</p>
                    </Col>
                    <Col>
                        <ProgressBar variant="primary" now={teamStats.speedPer} label={teamStats.speedPer} className="w-100" />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-1">
                    <Col>
                        <p className="mb-0 me-2">Durability</p>
                    </Col>
                    <Col>
                        <ProgressBar variant="warning" now={teamStats.durabilityPer} label={teamStats.durabilityPer} className="w-100" />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-1">
                    <Col>
                        <p className="mb-0 me-2">Power</p>
                    </Col>
                    <Col>
                        <ProgressBar variant="danger" now={teamStats.powerPer} label={teamStats.powerPer} className="w-100" />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-1">
                    <Col>
                        <p className="mb-0 me-2">Combat</p>
                    </Col>
                    <Col>
                        <ProgressBar variant="dark" now={teamStats.combatPer} label={teamStats.combatPer} className="w-100" />
                    </Col>
                </Row> 
            </Container>

        </Container>
    )
}

export default TeamContainer

import { Link as RouterLink } from "react-router-dom"
import {UseTeamContext} from '../../context/teamContext'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

const HeroTeamCard = ({ hero }) => {
    const {addTeam, removeTeam} = UseTeamContext()

    return (
        <>
            <Card style={{ width: '14rem' }} className="m-1 text-center">
                <Card.Img variant="top" src={hero.image.url} />
                <Card.Body >
                <Card.Title>{hero.name}</Card.Title>

                <h6>Power Stats</h6>
                <Row className="d-flex align-items-center mb-1">
                    <Col>
                        <p className="mb-0 me-2">Intelligence</p>
                    </Col>
                    <Col>
                        <ProgressBar variant="info" now={hero.powerstats.intelligence} label={hero.powerstats.intelligence} className="w-100"/>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-1">
                    <Col>
                        <p className="mb-0 me-2">Strength</p>
                    </Col>
                    <Col>
                        <ProgressBar variant="success" now={hero.powerstats.strength} label={hero.powerstats.intelligence} className="w-100"/>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-1">
                    <Col>
                        <p className="mb-0 me-2">Speed</p>
                    </Col>
                    <Col>
                        <ProgressBar variant="primary" now={hero.powerstats.speed} label={hero.powerstats.speed} className="w-100" />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-1">
                    <Col>
                        <p className="mb-0 me-2">Durability</p>
                    </Col>
                    <Col>
                        <ProgressBar variant="warning" now={hero.powerstats.durability} label={hero.powerstats.durability} className="w-100" />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-1">
                    <Col>
                        <p className="mb-0 me-2">Power</p>
                    </Col>
                    <Col>
                        <ProgressBar variant="danger" now={hero.powerstats.power} label={hero.powerstats.power} className="w-100" />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-1">
                    <Col>
                        <p className="mb-0 me-2">Combat</p>
                    </Col>
                    <Col>
                        <ProgressBar variant="dark" now={hero.powerstats.combat} label={hero.powerstats.combat} className="w-100" />
                    </Col>
                </Row>

                <RouterLink to={`/heroDetail/${hero.id}`}>
                    <Button variant="primary" className="mt-1 me-1">Details</Button>
                </RouterLink>
                <Button variant="danger" className="mt-1" onClick={(e) => removeTeam(e, hero)}>Delete</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default HeroTeamCard

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'

const HeroStats = ({hero}) => {
    console.log(hero)
    return (
        <>
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
                        <ProgressBar variant="success" now={hero.powerstats.strength} label={hero.powerstats.strength} className="w-100"/>
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
        </>
    )
}

export default HeroStats

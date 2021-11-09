import { Link as RouterLink } from "react-router-dom"
import {UseTeamContext} from '../../context/teamContext'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

const HeroSearchCard = ({ hero }) => {
    const {addTeam, removeTeam} = UseTeamContext()

    return (
        <>
            <Card style={{ width: '18rem' }} className="m-1 text-center">
                <Card.Img variant="top" src={hero.image.url} />
                <Card.Body >
                <Card.Title>{hero.name}</Card.Title>

                <RouterLink to={`/heroDetail/${hero.id}`}>
                    <Button variant="primary" className="mt-1">Details</Button>
                </RouterLink>
                <Button variant="success" className="mx-1 mt-1" onClick={(e) => addTeam(e, hero)}>Add</Button>
                <Button variant="danger" className="mt-1" onClick={(e) => removeTeam(e, hero)}>Delete</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default HeroSearchCard

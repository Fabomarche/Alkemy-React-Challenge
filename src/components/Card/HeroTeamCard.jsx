import { Link as RouterLink } from "react-router-dom"
import {UseTeamContext} from '../../context/teamContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import HeroStats from "../Stats/HeroStats";

const HeroTeamCard = ({ hero }) => {
    const {removeTeam} = UseTeamContext()

    return (
        <>
            <Card style={{ width: '14rem' }} className="m-1 text-center bg-dark text-white border-white">
                <Card.Img variant="top" src={hero.image.url} />
                <Card.Body >
                <Card.Title>{hero.name}</Card.Title>

                <h6>Power Stats</h6>
                <HeroStats hero={hero}/>

                <RouterLink to={`/heroDetail/${hero.id}`}>
                    <Button variant="outline-secondary" className="mt-1 me-1">Details</Button>
                </RouterLink>
                <Button variant="outline-danger" className="mt-1" onClick={(e) => removeTeam(e, hero)}>Delete</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default HeroTeamCard

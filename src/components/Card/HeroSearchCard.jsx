import { useState, useEffect } from 'react'
import { Link as RouterLink } from "react-router-dom"
import {UseTeamContext} from '../../context/teamContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


const HeroSearchCard = ({ hero }) => {
    const {addTeam} = UseTeamContext()
    const [alignmentColor, setAlignmentColor] = useState("")
    useEffect(() => {
        if(hero.biography.alignment === "bad"){
            setAlignmentColor("danger")
        }else if(hero.biography.alignment === "good"){
            setAlignmentColor("success")
        }else{
            setAlignmentColor("primary")
        }

    }, [alignmentColor])
    return (
        <>
            <Card style={{ width: '18rem' }} className="m-1 text-center bg-dark text-white">
                <Card.Img variant="top" src={hero.image.url} />
                <Card.Body >
                <Card.Title>{hero.name}</Card.Title>

                <RouterLink to={`/heroDetail/${hero.id}`}>
                    <Button variant="outline-secondary" className="mt-1">Details</Button>
                </RouterLink>
                <Button variant={`outline-${alignmentColor}`} className="mx-1 mt-1" onClick={(e) => addTeam(e, hero)}>Add</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default HeroSearchCard

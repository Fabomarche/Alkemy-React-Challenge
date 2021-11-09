import {useState} from 'react'
import {UseTeamContext} from '../../context/teamContext'

import HeroTeamCard from '../Card/HeroTeamCard'
import Container from 'react-bootstrap/Container'
import TeamGlobalStats from '../Stats/TeamGlobalStats'


const TeamContainer = () => {
    const {team} = UseTeamContext()
    return (
        <Container>
            <h3 className="text-center">Your Hero Team</h3>
            {team.length === 0 ? <h3>Team Empty</h3>
            :
            <div>
                <div className="d-flex justify-content-center flex-wrap bg-dark">
                    {team.map(hero => <HeroTeamCard hero={hero} key={hero.id}/>)}
                </div>

                <h4 className="text-center">Team Stats</h4>
                <TeamGlobalStats/>
            </div>
            }
        </Container>
    )
}

export default TeamContainer

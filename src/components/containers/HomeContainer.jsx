import { Redirect } from "react-router-dom"
import SearchHero from '../SearchHero'
import HerosSerachedList from './HerosSerachedList'
import TeamContainer from './TeamContainer'


const HomeContainer = ({login}) => {
    
    console.log(login)
    return (
        <div>
            {!login && <Redirect to={'/'}/>}
            <SearchHero />
            <TeamContainer />
            <HerosSerachedList />
        </div>
    )

}

export default HomeContainer

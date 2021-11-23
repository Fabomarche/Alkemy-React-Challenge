import SearchHero from '../SearchHero'
import HerosSerachedList from './HerosSerachedList'
import TeamContainer from './TeamContainer'
import { Redirect } from 'react-router'



const HomeContainer = () => {
    
    return (
        <>
            <SearchHero />
            <TeamContainer />
            <HerosSerachedList />
        </>
    )

}

export default HomeContainer

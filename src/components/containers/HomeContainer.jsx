import { Redirect } from "react-router-dom"
import SearchHero from '../SearchHero'
import HerosSerachedList from './HerosSerachedList'
import TeamContainer from './TeamContainer'
import Login from "../../components/Login";


const HomeContainer = ({login}) => {
    
    console.log(login)
    return (
        <>
            {login === false ? <Login />
                    :
                    <div>
                        <SearchHero />
                        <TeamContainer />
                        <HerosSerachedList />
                    </div>
            }
        </>
    )

}

export default HomeContainer

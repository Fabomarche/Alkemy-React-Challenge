import { UseSearchContext } from '../../context/searchContext'
import HeroSearchCard from "../Card/HeroSearchCard"
import Container from "react-bootstrap/Container"

const HerosSerachedList = () => {
    const { heroSearched } =  UseSearchContext()
    

    return (
        <Container className="d-flex justify-content-center flex-wrap">
            {heroSearched !== undefined ?
                    heroSearched.map( hero => <HeroSearchCard hero={hero} key={hero.id}/>)
                    :
                    <div>sin busqueda</div>
                    }   
        </Container>
    )
}

export default HerosSerachedList

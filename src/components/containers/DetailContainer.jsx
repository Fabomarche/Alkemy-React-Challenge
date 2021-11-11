import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Loading from '../Loading/Loading'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import HeroStats from '../Stats/HeroStats'

const DetailContainer =  () => {
    const { hid } = useParams()
    const [heroDetail, setHeroDetail] = useState("")

    useEffect(() => {
        axios.get(`https://www.superheroapi.com/api.php/4859376540747559/${hid}`)
        .then((response) =>  setHeroDetail(response.data))
        .catch((error) => {
        console.log(error);
        })
    }, []) 
    
    console.log(heroDetail)

    return (
        <Container>
            {heroDetail === "" ? <Loading/>
            :
            <div>
                <h2 className="text-center fs-1">{heroDetail.name}</h2>
                <Row>
                    <Col>
                        <Container>
                            <img src={heroDetail.image.url} alt={heroDetail.name}/>
                        </Container>
                    </Col>
                    <Col>
                    <ul >
                        <li className='fs-4'>Full Name: <span>{heroDetail.biography["full-name"]}</span></li>
                        <li className='fs-4'>Aliases: <span>{heroDetail.biography.aliases}</span></li>
                        <li className='fs-4'>Height: <span>{heroDetail.appearance.height}</span></li>
                        <li className='fs-4'>Weight: <span>{heroDetail.appearance.weight}</span></li>
                        <li className='fs-4'>Hair Color: <span>{heroDetail.appearance['hair-color']}</span></li>
                        <li className='fs-4'>Eyes Color: <span>{heroDetail.appearance['eye-color']}</span></li>
                        <li className='fs-4'>Work: <span>{heroDetail.work.occupation} in {heroDetail.work.base}</span></li>
                        <li className='fs-4'>Alignment: <span>{heroDetail.biography.alignment}</span></li>
                        <li className='fs-4'>Publisher: <span>{heroDetail.biography.publisher}</span></li>
                    </ul>
                        <Container className="text-end">
                            <HeroStats hero={heroDetail}/>
                        </Container>
                    </Col> 
                </Row>
            </div>

        }
        </Container>
    )
}

export default DetailContainer
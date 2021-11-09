import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
            {heroDetail === "" ? <h2>loading</h2>
            :
            <div>
                <h2 className="text-center">{heroDetail.name}</h2>
                <Row>
                    <Col>
                        <Container>
                            <img src={heroDetail.image.url} alt={heroDetail.name}/>
                        </Container>
                    </Col>
                    <Col>
                        <p className='fs-4'>Full Name: <span>{heroDetail.biography["full-name"]}</span></p>
                        <p className='fs-4'>Aliases: <span>{heroDetail.biography.aliases}</span></p>
                        <p className='fs-4'>Height: <span>{heroDetail.appearance.height}</span></p>
                        <p className='fs-4'>Weight: <span>{heroDetail.appearance.weight}</span></p>
                        <p className='fs-4'>Hair Color: <span>{heroDetail.appearance['hair-color']}</span></p>
                        <p className='fs-4'>Eyes Color: <span>{heroDetail.appearance['eye-color']}</span></p>
                        <p className='fs-4'>Work: <span>{heroDetail.work.occupation} in {heroDetail.work.base}</span></p>
                        <p className='fs-4'>Alignment: <span>{heroDetail.biography.alignment}</span></p>
                        <HeroStats hero={heroDetail}/>
                    </Col> 
                </Row>
            </div>

        }
        </Container>
    )
}

export default DetailContainer

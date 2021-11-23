import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import { Link as RouterLink } from "react-router-dom"

import heroImage from '../assets/images/superHero.png'

const NavBar = () => {
    const signout= (e) =>{
        (e).preventDefault()
        localStorage.clear()
        window.location.reload()
    }
    
    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Container className="d-flex flex-column justify-content-center ">
                    <RouterLink to={localStorage.Token ? '/home' : '/'} className="text-decoration-none">
                        <Navbar.Brand className="d-flex flex-column align-items-center">
                            <img
                            alt="hero cartoon"
                            src={heroImage}
                            width="75"
                            height="75"
                            className="d-inline-block align-top"
                            />
                        <h1 className="text-center fw-bolder mt-1">SUPER<span className="text-info">HERO</span></h1>
                        </Navbar.Brand>
                    </RouterLink>

                    {localStorage.Token && <Button onClick={signout} variant="outline-info" className="align-self-end">Sign out</Button>}
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar

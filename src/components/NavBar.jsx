
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import { Link as RouterLink } from "react-router-dom"

import heroImage from '../assets/images/superHero.png'

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Container className="d-flex justify-content-center">
                    <RouterLink to='/'>
                        <Navbar.Brand href="#home" className="d-flex flex-column align-items-center">
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

                    <RouterLink to='/login'>
                        <Nav.Link href="#home" className="">Login</Nav.Link>
                    </RouterLink>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar

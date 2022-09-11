import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


export const NavBar: React.FC = props => {

    const navigate = useNavigate()

    return(
        <>
            <Navbar bg="dark" >
                <Container>
                    <Navbar.Brand onClick={() => navigate('/')}>Test API</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate('/')}>Inicio</Nav.Link>
                            <Nav.Link onClick={() => navigate('/pokemon')}>Pokemon</Nav.Link>
                            <Nav.Link onClick={() => navigate('/digimon')}>Digimon</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
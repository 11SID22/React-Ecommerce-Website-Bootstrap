import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";  // Make sure to import Nav
import CustomButton from '../UI/CustomButton';

const CustomNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-center">
                    <Nav className="d-flex" style={{ gap: '70px' }}>  {/* Flexbox with reduced gap */}
                        <Nav.Link href="#home" style={{ color: 'white' }}>HOME</Nav.Link>
                        <Nav.Link href="#store" style={{ color: 'white' }}>STORE</Nav.Link>
                        <Nav.Link href="#about" style={{ color: 'white' }}>ABOUT</Nav.Link>
                    </Nav>
                </Container>
                <CustomButton className="mt-2" />

            </Navbar>
        </div>
    );
};

export default CustomNavbar;

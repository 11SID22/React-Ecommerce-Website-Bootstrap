import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import CustomCartButton from './CustomCartButton';
import { NavLink } from "react-router-dom";

const CustomNavbar = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-center">
                    <Nav className="d-flex" style={{ gap: '70px' }}>  {/* Flexbox with reduced gap */}
                        <NavLink to="/home" style={{ color: 'white', textDecoration: 'none' }}>HOME</NavLink>
                        <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>STORE</NavLink>
                        <NavLink to="/about" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</NavLink>
                    </Nav>
                </Container>
                {/* Conditionally render the cart button based on current path */}
                {/* Add a check for the Home page */}
                {props.currentPath !== '/about' && props.currentPath !== '/home' && (
                    <CustomCartButton onShowModal={props.onShowModal} className="mt-2" />
                )}
            </Navbar>
        </div>
    );
};

export default CustomNavbar;

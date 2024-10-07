import React from "react";
import { Container } from "react-bootstrap";
import classes from './CustomHeader.module.css';  // Import custom CSS

const CustomHeader = () => {
    return (
        <div>
            <header className={`text-center ${classes.customContainer}`}>  {/* Apply Bootstrap and custom class */}
                <Container >
                    <h1>The Generics</h1>
                </Container>
            </header>
        </div>
    );
};

export default CustomHeader;

import React from "react";
import { Container } from "react-bootstrap";

const CustomHeader = (props) => {
    return (
        <div>
            <header className="text-center bg-secondary pb-5"> {/* Background grey and padding */}
                <Container>
                    {/* Large text and primary color */}
                    <h1 className="display-1 text-light">The Generics</h1>
                    {props.children}
                </Container>
            </header>
        </div>
    );
};

export default CustomHeader;

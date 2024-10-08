import React from "react";
import { Button } from "react-bootstrap";
import classes from './CustomCartButton.module.css';  // Import the CSS module

const CustomCartButton = (props) => {
    return (
        <div>
            <Button 
                onClick={props.onShowModal}
                variant="light" 
                className={classes.neonBlueBorder}  // Apply custom class with Bootstrap
            >
                Cart
            </Button>
        </div>
    );
};

export default CustomCartButton;

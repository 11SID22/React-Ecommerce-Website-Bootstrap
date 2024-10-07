import React from "react";
import { Button } from "react-bootstrap";
import classes from './CustomButton.module.css';  // Import the CSS module

const CustomButton = () => {
    return (
        <div>
            <Button 
                variant="light" 
                className={classes.neonBlueBorder}  // Apply custom class with Bootstrap
            >
                Cart
            </Button>
        </div>
    );
};

export default CustomButton;

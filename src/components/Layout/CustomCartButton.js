import React, { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import classes from './CustomCartButton.module.css';  // Import the CSS module
import CartContext from "../../store/cart-context";

const CustomCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    let quantity = 0;
    cartCtx.items.forEach((item) => {
        quantity = quantity + Number(item.quantity)
    })
    return (
        <div>
            <Button
                onClick={props.onShowModal}
                variant="light"
                size="sm"
                className={classes.neonBlueBorder}  // Apply custom class with Bootstrap
            >
                Cart
            </Button>
            <Badge bg="dark">{quantity}</Badge>
        </div>
    );
};

export default CustomCartButton;

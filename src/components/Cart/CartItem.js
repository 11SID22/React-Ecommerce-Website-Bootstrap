import React from "react";

import { Button } from "react-bootstrap";
const CartItem = (props) => {
    const removeItemFromCartHandler =  () => {
        props.onRemove(props.id); // Calls the remove function passed via props
    }

    return (
        <tr>
            <td key={props.id} className="d-flex align-items-center">
                <img src={props.imageUrl} alt={props.title} width="50" className="me-2" />
                <span className="ms-2">{props.albumName}</span>
            </td>
            <td>${props.price}</td>
            <td>{props.quantity}</td>
            <td>
                <Button
                    variant="danger"
                    className="ms-2"
                    size="sm"
                    onClick={removeItemFromCartHandler}
                >
                    Remove
                </Button>
            </td>
        </tr>
    );
};

export default CartItem
import React, { useState } from "react";
import { Modal, ModalBody, Button } from "react-bootstrap";

const cartElements = [
  {
    id: 1, // Add unique ID for each item
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  }
];

const Cart = (props) => {
  const [cartElementsDisplay, setCartElementsDisplay] = useState(cartElements);

  // Function to remove an item from the cart
  const removeCartElements = (id) => {
    setCartElementsDisplay((prevElements) => prevElements.filter((item) => item.id !== id));
  };

  const cartList = (
    <ul>
      {cartElementsDisplay.map((item) => ( // Use cartElementsDisplay instead of cartElements
        <li key={item.id} className="d-flex align-items-center"> {/* Flexbox for alignment */}
          <img src={item.imageUrl} alt={item.title} width="50" />
          <span className="ms-2"> {/* Add margin start (left margin) */}
            {item.title} - ${item.price} - Qty: {item.quantity}
          </span>
          <Button
            variant="danger"
            className="ms-2"
            size="sm"
            onClick={() => removeCartElements(item.id)} // Pass the item id to the remove function
          >
            Remove
          </Button>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal show={true} onHide={props.onClose}>
      <ModalBody>
        {cartList}
      </ModalBody>
      <Button variant="secondary" onClick={props.onClose}>
        Close
      </Button>
    </Modal>
  );
};

export default Cart;

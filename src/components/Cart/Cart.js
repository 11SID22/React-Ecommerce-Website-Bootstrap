import React, { useContext } from "react";
import { Modal, ModalBody, Button, Table } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount}`;

  const cartList = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      imageUrl={item.imageUrl}
      albumName={`Album ${item.id.replace('album', '')}`}
      price={item.price}
      quantity={item.quantity}
      onRemove={() => cartCtx.removeItem(item.id)} // Pass the remove function
    />
  ));

  return (
    <Modal show={true} onHide={props.onClose}>
      <ModalBody>
        <h3 className="text-center">CART</h3> {/* Main header */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartList}
          </tbody>
        </Table>
        <div className="d-flex justify-content-end align-items-center">
          <h4 className="fw-bold me-3">Total</h4>
          <span>{totalAmount}</span>
        </div>
      </ModalBody>
      <div className="d-flex justify-content-center p-3">
        <Button variant="info" size="sm" className="fs-4 text-white" >Purchase</Button>
      </div>
      <Button variant="secondary" onClick={props.onClose}>
        Close
      </Button>
    </Modal>
  );
};

export default Cart;

import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, updateItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler = (item) => {
        updateItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
            const existingItem = prevItems[existingItemIndex];

            let updatedItems;
            if (existingItem) {
                // Update existing item
                const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 }; // Always add 1
                updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                // Add new item
                updatedItems = prevItems.concat({ ...item, quantity: 1 }); // Start with quantity 1
            }

            // Update total amount
            const newTotalAmount = updatedItems.reduce((total, currentItem) => {
                return total + currentItem.price * currentItem.quantity;
            }, 0);

            setTotalAmount(newTotalAmount);
            return updatedItems;
        });
    };

    const removeItemFromCartHandler = (id) => {
        updateItems((prevItems) => {
            const updatedItems = prevItems.filter(item => item.id !== id);
            const newTotalAmount = updatedItems.reduce((total, currentItem) => {
                return total + currentItem.price * currentItem.quantity;
            }, 0);

            setTotalAmount(newTotalAmount);
            return updatedItems;
        });
    };

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;

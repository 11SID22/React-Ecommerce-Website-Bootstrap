import React, { useState } from 'react';

import CustomNavbar from './components/Layout/CustomNavbar'
import CustomHeader from './components/Layout/CustomHeader';
import CustomAlbum from './components/Albums/CustomAlbum';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showModal, setShowModal] = useState(false);

  const modalShowHandler = () => {
    setShowModal(true);
  }
  const modalCloseHandler = () => {
    setShowModal(false);
  }

  return (
    <CartProvider>
      <CustomNavbar onShowModal={modalShowHandler}/>
      <CustomHeader />
      {showModal && <Cart onClose={modalCloseHandler}/>}
      <CustomAlbum />
    </CartProvider>
  );
}

export default App;

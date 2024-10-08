import React, { useState } from 'react';

import CustomNavbar from './components/Layout/CustomNavbar'
import CustomHeader from './components/Layout/CustomHeader';
import CustomAlbum from './components/Albums/CustomAlbum';
import Cart from './components/Cart/Cart';

function App() {
  const [showModal, setShowModal] = useState(false);

  const modalShowHandler = () => {
    setShowModal(true);
  }
  const modalCloseHandler = () => {
    setShowModal(false);
  }

  return (
    <div>
      <CustomNavbar onShowModal={modalShowHandler}/>
      <CustomHeader />
      {showModal && <Cart onClose={modalCloseHandler}/>}
      <CustomAlbum />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import About from './pages/About'; // Import About page
import Store from './pages/Store'; // Import Store page
import Home from './pages/Home'; // Import Home page

function App() {
  const [showModal, setShowModal] = useState(false);

  const modalShowHandler = () => {
    setShowModal(true);
  };

  const modalCloseHandler = () => {
    setShowModal(false);
  };

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <RootLayout onShowModal={modalShowHandler} />,
      children: [
        { path: 'about', element: <About /> }, // About page route
        { path: '/', element: <Store /> }, // Store page route
        {path: '/home', element: <Home />} // Home page route
      ]
    }
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
      {showModal && <Cart onClose={modalCloseHandler} />}
    </CartProvider>
  );
}

export default App;

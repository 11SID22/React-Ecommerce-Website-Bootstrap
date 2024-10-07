import React from 'react';

import CustomNavbar from './components/Layout/CustomNavbar'
import CustomHeader from './components/Layout/CustomHeader';
import CustomAlbum from './components/Albums/CustomAlbum';

function App() {
  return (
    <div>
      <CustomNavbar />
      <CustomHeader />
      <CustomAlbum />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ShopPage from './Components/NavbarComponents/ShopPage';
import SignUpPage from './Components/NavbarComponents/SignUpPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

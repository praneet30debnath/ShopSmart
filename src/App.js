import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ShopPage from './Components/NavbarComponents/ShopPage';
import SignUpPage from './Components/NavbarComponents/SignUpPage';
import SignInPage from './Components/NavbarComponents/SignInPage';
import HomePage from './Components/NavbarComponents/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

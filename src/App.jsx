import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Offers from './pages/Offers';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Cart from './pages/Cart';
import { ThemeContext } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CartProvider>
        <Router>
          <div className={`App ${theme}-mode`}>
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/account" element={<Account />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
            <Footer />
            <ToastContainer />
          </div>
        </Router>
      </CartProvider>
    </ThemeContext.Provider>
  );
}

export default App;
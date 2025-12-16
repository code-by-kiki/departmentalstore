import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Form, FormControl, Dropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaSearch, FaPhoneAlt, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

const NavigationBar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, toggleTheme } = useTheme();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const navLinks = [
    { path: '/home', label: 'Home', icon: '🏠' },
    { path: '/products', label: 'Products', icon: '🛒' },
    { path: '/offers', label: 'Hot Offers', icon: '🔥' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
    { path: '/contact', label: 'Contact', icon: '📞' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${searchQuery}`;
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-announcement bg-primary text-white py-2">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <small className="d-none d-md-block">
              🚚 Free shipping on orders | 🕒 Open 24/7
            </small>
            <div className="d-flex align-items-center gap-3">
              <small>📞 +1 (234) 567-8910</small>
              <Link to="/offers" className="text-white text-decoration-underline fw-bold">
                Today's Deals →
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Navbar bg="white" expand="lg" className="shadow-sm py-3" data-bs-theme={theme}>
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-3">
            🛍️ MegaStore
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            {/* Search Bar */}
            <Form className="d-flex mx-lg-4 my-2 my-lg-0" onSubmit={handleSearch}>
              <div className="input-group">
                <FormControl
                  type="search"
                  placeholder="Search products..."
                  className="border-end-0"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" variant="primary" className="border-start-0">
                  <FaSearch />
                </Button>
              </div>
            </Form>

            {/* Navigation Links */}
            <Nav className="mx-auto my-2 my-lg-0">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link.path}
                  as={Link}
                  to={link.path}
                  className={`mx-2 fw-medium ${location.pathname === link.path ? 'active text-primary' : 'text-dark'}`}
                >
                  <span className="d-none d-lg-inline">{link.icon} </span>
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>

            {/* User Actions */}
            <div className="d-flex align-items-center gap-3">
              {/* Theme Toggle */}
              <Button 
                variant="outline-secondary" 
                className="rounded-circle p-2"
                onClick={toggleTheme}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </Button>

              <Button variant="outline-primary" className="d-none d-md-flex" as={Link} to="/account">
                <FaUser className="me-1" /> Account
              </Button>
              <Button variant="primary" className="position-relative" as={Link} to="/cart">
                <FaShoppingCart className="me-1" /> Cart
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
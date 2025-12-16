import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Products', path: '/products' },
    { label: 'Offers', path: '/offers' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const categories = [
    { label: 'Electronics', path: '/products?category=electronics' },
    { label: 'Fashion', path: '/products?category=fashion' },
    { label: 'Home & Kitchen', path: '/products?category=home' },
    { label: 'Groceries', path: '/products?category=groceries' },
    { label: 'Beauty & Health', path: '/products?category=beauty' }
  ];

  const policies = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Return Policy', path: '/returns' },
    { label: 'Shipping Policy', path: '/shipping' },
    { label: 'FAQ', path: '/faq' }
  ];

  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="g-4">
          {/* Company Info */}
          <Col lg={4} md={6}>
            <div className="mb-4">
              <h3 className="text-warning mb-3">🛍️ MegaStore</h3>
              <p className="text-light">
                Your one-stop destination for all shopping needs. Quality products at affordable prices with premium service.
              </p>
            </div>
            <div className="social-icons mb-4">
              <h6 className="mb-3">Follow Us</h6>
              <div className="d-flex gap-3">
                <a href="#" className="text-white fs-5"><FaFacebook /></a>
                <a href="#" className="text-white fs-5"><FaTwitter /></a>
                <a href="#" className="text-white fs-5"><FaInstagram /></a>
                <a href="#" className="text-white fs-5"><FaLinkedin /></a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.label} className="mb-2">
                  <Link to={link.path} className="text-light text-decoration-none">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Categories */}
          <Col lg={2} md={6}>
            <h5 className="mb-3">Categories</h5>
            <ul className="list-unstyled">
              {categories.map((category) => (
                <li key={category.label} className="mb-2">
                  <Link to={category.path} className="text-light text-decoration-none">
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact & Newsletter */}
          <Col lg={4} md={6}>
            <div className="mb-4">
              <h5 className="mb-3">Contact Info</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <FaMapMarkerAlt className="me-2 text-warning" />
                  123 Mall Street, City Center, NY 10001
                </li>
                <li className="mb-2">
                  <FaPhone className="me-2 text-warning" />
                  +1 (234) 567-8900
                </li>
                <li className="mb-2">
                  <FaEnvelope className="me-2 text-warning" />
                  info@megastore.com
                </li>
                <li>
                  <FaClock className="me-2 text-warning" />
                  Mon-Sun: 8:00 AM - 10:00 PM
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h5 className="mb-3">Newsletter</h5>
              <p className="text-light small mb-3">
                Subscribe to get updates on new arrivals and special offers.
              </p>
              <Form className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="me-2"
                />
                <Button variant="warning" type="submit">
                  Subscribe
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        <hr className="bg-light my-4" />

        {/* Bottom Footer */}
        <Row>
          <Col md={6}>
            <p className="mb-0">
              &copy; {currentYear} MegaStore. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <ul className="list-inline mb-0">
              {policies.map((policy) => (
                <li key={policy.label} className="list-inline-item me-3">
                  <Link to={policy.path} className="text-light text-decoration-none">
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Payment Methods */}
        <div className="text-center mt-4">
          <p className="text-light small mb-2">We Accept:</p>
          <div className="d-flex justify-content-center gap-3 fs-4">
            <span>💳</span>
            <span>🏦</span>
            <span>📱</span>
            <span>🔒</span>
            <span>💲</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
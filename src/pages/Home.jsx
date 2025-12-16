import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Carousel, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFire, FaStar, FaRocket } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { getPopularProducts, getFeaturedProducts, getNewArrivals } from '../data/products';




const Home = () => {
  const [index, setIndex] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);
  const [activeTab, setActiveTab] = useState('popular');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderPaused) {
        setIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderPaused]);

  const popularProducts = getPopularProducts();
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  // Slider Images
  const sliderImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=500&q=80",
      title: "Summer Collection 2025",
      description: "Up to 60% OFF on Fashion Items",
      buttonText: "Shop Now"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=500&q=80",
      title: "Home & Kitchen Sale",
      description: "Premium Quality at Affordable Prices",
      buttonText: "Explore Now"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=500&q=80",
      title: "Electronics Mega Sale",
      description: "Latest Gadgets with Amazing Discounts",
      buttonText: "View Electronics"
    }
  ];

  // Categories
  const categories = [
    { id: 1, name: 'Electronics', icon: '📱', products: '200+ Products', color: 'primary' },
    { id: 2, name: 'Fashion', icon: '👗', products: '500+ Items', color: 'success' },
    { id: 3, name: 'Home & Kitchen', icon: '🏠', products: '300+ Products', color: 'warning' },
    { id: 4, name: 'Groceries', icon: '🛒', products: '1000+ Items', color: 'info' },
    { id: 5, name: 'Beauty & Health', icon: '💄', products: '250+ Products', color: 'danger' },
    { id: 6, name: 'Sports & Fitness', icon: '⚽', products: '180+ Items', color: 'secondary' }
  ];

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <section className="hero-slider-section">
        <Carousel 
          activeIndex={index} 
          onSelect={setIndex}
          fade={true}
          controls={true}
          indicators={true}
          pause={sliderPaused ? 'hover' : false}
          interval={5000}
        >
          {sliderImages.map((slide) => (
            <Carousel.Item key={slide.id}>
              <div className="slider-image-container">
                <img
                  className="slider-image"
                  src={slide.image}
                  alt={slide.title}
                />
                <Carousel.Caption className="slider-caption">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <Button as={Link} to="/products" variant="primary" size="lg">
                    {slide.buttonText}
                  </Button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5">
        <Container>
          <h2 className="text-center mb-5">Shop by Categories</h2>
          <Row className="g-4">
            {categories.map((category) => (
              <Col key={category.id} lg={2} md={4} sm={6}>
                <Card 
                  as={Link} 
                  to={`/products?category=${category.name}`} 
                  className="category-card text-center h-100"
                >
                  <Card.Body>
                    <div className={`category-icon mb-3 text-${category.color}`}>
                      <span className="display-3">{category.icon}</span>
                    </div>
                    <Card.Title>{category.name}</Card.Title>
                    <Card.Text className="text-muted">
                      {category.products}
                    </Card.Text>
                    <Button variant="outline-primary" size="sm">
                      Shop Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Popular Products Section */}
      <section className="popular-products-section py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="d-flex align-items-center justify-content-center">
              <FaFire className="text-danger me-3" />
              Popular Products
              <FaFire className="text-danger ms-3" />
            </h2>
            <p className="text-muted">Best selling items loved by our customers</p>
          </div>

          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-4 justify-content-center"
          >
            <Tab eventKey="popular" title={
              <span className="d-flex align-items-center">
                <FaFire className="me-2" /> Popular
              </span>
            }>
              <Row className="g-4 mt-3">
                {popularProducts.map(product => (
                  <Col key={product.id} lg={3} md={4} sm={6}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="featured" title={
              <span className="d-flex align-items-center">
                <FaStar className="me-2" /> Featured
              </span>
            }>
              <Row className="g-4 mt-3">
                {featuredProducts.map(product => (
                  <Col key={product.id} lg={3} md={4} sm={6}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="new" title={
              <span className="d-flex align-items-center">
                <FaRocket className="me-2" /> New Arrivals
              </span>
            }>
              <Row className="g-4 mt-3">
                {newArrivals.map(product => (
                  <Col key={product.id} lg={3} md={4} sm={6}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>

          <div className="text-center mt-5">
            <Button as={Link} to="/products" variant="primary" size="lg" className="px-5">
              View All Products
            </Button>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center mb-5">Why Shop With Us</h2>
          <Row className="g-4">
            <Col lg={3} md={6}>
              <div className="feature-item text-center p-4">
                <div className="feature-icon mb-3 text-primary">
                  <span className="display-1">🚚</span>
                </div>
                <h5 className="mb-3">Free Shipping</h5>
                <p className="text-muted mb-0">On orders above $50</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="feature-item text-center p-4">
                <div className="feature-icon mb-3 text-success">
                  <span className="display-1">💳</span>
                </div>
                <h5 className="mb-3">Secure Payment</h5>
                <p className="text-muted mb-0">100% secure transactions</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="feature-item text-center p-4">
                <div className="feature-icon mb-3 text-warning">
                  <span className="display-1">↩️</span>
                </div>
                <h5 className="mb-3">Easy Returns</h5>
                <p className="text-muted mb-0">30-day return policy</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="feature-item text-center p-4">
                <div className="feature-icon mb-3 text-info">
                  <span className="display-1">🏷️</span>
                </div>
                <h5 className="mb-3">Best Price</h5>
                <p className="text-muted mb-0">Price match guarantee</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Banner */}
      <section className="stats-banner py-5 bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col md={3} sm={6} className="mb-4">
              <h2 className="display-4 fw-bold mb-2">10K+</h2>
              <p className="mb-0">Happy Customers</p>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <h2 className="display-4 fw-bold mb-2">500+</h2>
              <p className="mb-0">Premium Brands</p>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <h2 className="display-4 fw-bold mb-2">24/7</h2>
              <p className="mb-0">Customer Support</p>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <h2 className="display-4 fw-bold mb-2">15+</h2>
              <p className="mb-0">Years Experience</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <Container className="text-center">
          <h2 className="mb-4">Ready to Shop?</h2>
          <p className="lead mb-4">
            Discover thousands of products at unbeatable prices. Join millions of satisfied customers.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button as={Link} to="/products" variant="primary" size="lg" className="px-5">
              Start Shopping
            </Button>
            <Button as={Link} to="/offers" variant="outline-primary" size="lg" className="px-5">
              View Offers
            </Button>
            <Button as={Link} to="/account" variant="outline-secondary" size="lg" className="px-5">
              Create Account
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
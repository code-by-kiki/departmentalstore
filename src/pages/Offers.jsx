import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFire, FaClock, FaTag, FaPercent } from 'react-icons/fa';

const Offers = () => {
  const currentOffers = [
    {
      id: 1,
      title: 'Flash Sale - Electronics',
      discount: '50% OFF',
      description: 'On all smartphones and laptops',
      code: 'ELECTRO50',
      expiry: 'Ends in 2 days',
      bgColor: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)'
    },
    {
      id: 2,
      title: 'Weekend Fashion Frenzy',
      discount: 'BUY 1 GET 1',
      description: 'On selected clothing items',
      code: 'FASHIONB1G1',
      expiry: 'This weekend only',
      bgColor: 'linear-gradient(135deg, #1dd1a1 0%, #10ac84 100%)'
    },
    {
      id: 3,
      title: 'Grocery Super Saver',
      discount: '30% OFF',
      description: 'Minimum purchase $100',
      code: 'GROCERY30',
      expiry: 'Valid till month end',
      bgColor: 'linear-gradient(135deg, #54a0ff 0%, #2e86de 100%)'
    },
    {
      id: 4,
      title: 'Home Makeover Sale',
      discount: '40% OFF',
      description: 'Home appliances & furniture',
      code: 'HOME40',
      expiry: 'Limited stock',
      bgColor: 'linear-gradient(135deg, #f368e0 0%, #ff9ff3 100%)'
    },
    {
      id: 5,
      title: 'Free Shipping',
      discount: 'FREE',
      description: 'On orders above $50',
      code: 'FREESHIP',
      expiry: 'No expiry',
      bgColor: 'linear-gradient(135deg, #00d2d3 0%, #01a3a4 100%)'
    },
    {
      id: 6,
      title: 'First Order Bonus',
      discount: '20% OFF',
      description: 'For new customers',
      code: 'WELCOME20',
      expiry: 'One-time use',
      bgColor: 'linear-gradient(135deg, #feca57 0%, #ff9f43 100%)'
    }
  ];

  return (
    <Container className="py-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">
          <FaFire className="text-danger me-2" />
          Special Offers & Deals
        </h1>
        <p className="lead text-muted">
          Don't miss out on these amazing offers. Limited time only!
        </p>
      </div>

      {/* Alert Banner */}
      <Alert variant="warning" className="mb-5">
        <div className="d-flex align-items-center">
          <FaClock className="fs-4 me-3" />
          <div>
            <Alert.Heading>Limited Time Offers!</Alert.Heading>
            <p className="mb-0">These offers are valid for a limited time only. Hurry up!</p>
          </div>
        </div>
      </Alert>

      {/* Current Offers Grid */}
      <Row className="g-4 mb-5">
        {currentOffers.map(offer => (
          <Col key={offer.id} lg={4} md={6}>
            <Card 
              className="offer-card border-0 shadow-lg h-100"
              style={{ background: offer.bgColor }}
            >
              <Card.Body className="text-white p-4 d-flex flex-column">
                {/* Offer Header */}
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <Badge bg="light" text="dark" className="fs-6">
                    <FaClock className="me-1" /> {offer.expiry}
                  </Badge>
                  <FaTag className="fs-4 opacity-75" />
                </div>
                
                {/* Offer Details */}
                <div className="text-center mb-4">
                  <h2 className="display-4 fw-bold mb-3">{offer.discount}</h2>
                  <Card.Title className="fs-3 mb-3">{offer.title}</Card.Title>
                  <Card.Text className="opacity-90">{offer.description}</Card.Text>
                </div>
                
                {/* Coupon Code */}
                <div className="mt-auto">
                  <div className="bg-light text-dark p-3 rounded mb-3 text-center">
                    <p className="mb-1 text-muted">Use Coupon Code:</p>
                    <h3 className="fw-bold mb-0">{offer.code}</h3>
                  </div>
                  <Button 
                    variant="light" 
                    className="w-100 fw-bold py-3"
                    as={Link}
                    to="/products"
                  >
                    🛒 Shop Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Mega Sale Banner */}
      <div className="text-center p-5 mb-5 rounded-3" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <h2 className="display-5 fw-bold mb-3">Seasonal Mega Sale!</h2>
        <p className="lead mb-4">
          Get up to 70% OFF on thousands of products. Limited stock available.
        </p>
        <Button as={Link} to="/products" variant="light" size="lg" className="px-5 py-3 fw-bold">
          <FaPercent className="me-2" />
          Shop All Discounts
        </Button>
      </div>

      {/* Terms & Conditions */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-4">
          <h5 className="mb-3">
            📋 Offer Terms & Conditions
          </h5>
          <ul className="text-muted">
            <li className="mb-2">Offers cannot be combined with other promotions</li>
            <li className="mb-2">Valid on select items only</li>
            <li className="mb-2">Limited to one use per customer</li>
            <li className="mb-2">MegaStore reserves the right to modify or cancel offers</li>
            <li>Offers valid while stocks last</li>
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Offers;
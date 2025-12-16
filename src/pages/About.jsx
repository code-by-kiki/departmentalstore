import React from 'react';
import { Container, Row, Col, Card, ListGroup, ProgressBar } from 'react-bootstrap';
import bus from '../assets/depbusiness.jpg'
const About = () => {
  const teamMembers = [
    { id: 1, name: 'John Smith', role: 'CEO', image: '👨‍💼' },
    { id: 2, name: 'Sarah Johnson', role: 'Marketing Head', image: '👩‍💼' },
    { id: 3, name: 'Mike Chen', role: 'Operations Manager', image: '👨‍🔧' },
    { id: 4, name: 'Emma Wilson', role: 'Customer Service Head', image: '👩‍💻' }
  ];

  const milestones = [
    { year: '2010', event: 'First store opened' },
    { year: '2013', event: 'Expanded to 5 locations' },
    { year: '2016', event: 'Launched online store' },
    { year: '2019', event: 'Reached 1M customers' },
    { year: '2023', event: '50+ stores nationwide' }
  ];

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="mb-5 align-items-center">
        <Col lg={6}>
          <h1 className="display-4 fw-bold mb-3">
            About <span className="text-primary">MegaStore</span>
          </h1>
          <p className="lead mb-4">
            Since 2010, MegaStore has been committed to providing quality products at affordable prices, 
            making shopping convenient and enjoyable for everyone.
          </p>
          <div className="d-flex gap-3">
            <div className="text-center p-3 border rounded">
              <h3 className="text-primary mb-0">50+</h3>
              <p className="mb-0">Stores</p>
            </div>
            <div className="text-center p-3 border rounded">
              <h3 className="text-primary mb-0">1M+</h3>
              <p className="mb-0">Customers</p>
            </div>
            <div className="text-center p-3 border rounded">
              <h3 className="text-primary mb-0">10K+</h3>
              <p className="mb-0">Products</p>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <img 
            src={bus}
            alt="MegaStore"
            className="img-fluid rounded shadow-lg"
          />
        </Col>
      </Row>

      {/* Mission & Vision */}
      <Row className="mb-5">
        <Col md={6} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <span className="display-1">🎯</span>
              </div>
              <Card.Title className="text-center h3 mb-3">Our Mission</Card.Title>
              <Card.Text className="text-center">
                To provide exceptional value through quality products, outstanding customer service, 
                and sustainable business practices that enrich our community and create lasting relationships.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <span className="display-1">👁️</span>
              </div>
              <Card.Title className="text-center h3 mb-3">Our Vision</Card.Title>
              <Card.Text className="text-center">
                To be the most trusted and preferred departmental store nationwide, 
                recognized for innovation, quality, and exceptional customer satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Values */}
      <section className="mb-5">
        <h2 className="text-center mb-5">Our Values</h2>
        <Row>
          <Col md={3} sm={6} className="mb-4">
            <div className="text-center p-3">
              <div className="bg-primary text-white rounded-circle p-3 d-inline-flex mb-3">
                <span className="display-4">🤝</span>
              </div>
              <h4>Integrity</h4>
              <p className="text-muted">Honest and transparent in all our dealings</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <div className="text-center p-3">
              <div className="bg-success text-white rounded-circle p-3 d-inline-flex mb-3">
                <span className="display-4">💝</span>
              </div>
              <h4>Customer First</h4>
              <p className="text-muted">Always putting customers first</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <div className="text-center p-3">
              <div className="bg-warning text-white rounded-circle p-3 d-inline-flex mb-3">
                <span className="display-4">🌱</span>
              </div>
              <h4>Sustainability</h4>
              <p className="text-muted">Eco-friendly and sustainable practices</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <div className="text-center p-3">
              <div className="bg-info text-white rounded-circle p-3 d-inline-flex mb-3">
                <span className="display-4">🚀</span>
              </div>
              <h4>Innovation</h4>
              <p className="text-muted">Constantly improving and innovating</p>
            </div>
          </Col>
        </Row>
      </section>

      {/* Team */}
      <section className="mb-5">
        <h2 className="text-center mb-5">Our Leadership Team</h2>
        <Row>
          {teamMembers.map(member => (
            <Col key={member.id} lg={3} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="display-1 mb-3">{member.image}</div>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">{member.role}</Card.Subtitle>
                  <Card.Text className="text-muted small">
                    Leading with expertise and dedication to excellence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Timeline */}
      <section className="mb-5">
        <h2 className="text-center mb-5">Our Journey</h2>
        <div className="position-relative">
          <div className="timeline-line"></div>
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-event">{milestone.event}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <Row className="bg-light p-5 rounded">
        <Col md={3} className="text-center mb-4">
          <h2 className="text-primary">99%</h2>
          <p>Customer Satisfaction</p>
          <ProgressBar now={99} variant="primary" className="mt-2" />
        </Col>
        <Col md={3} className="text-center mb-4">
          <h2 className="text-success">24/7</h2>
          <p>Customer Support</p>
          <ProgressBar now={100} variant="success" className="mt-2" />
        </Col>
        <Col md={3} className="text-center mb-4">
          <h2 className="text-warning">15+</h2>
          <p>Years Experience</p>
          <ProgressBar now={100} variant="warning" className="mt-2" />
        </Col>
        <Col md={3} className="text-center mb-4">
          <h2 className="text-info">50+</h2>
          <p>Awards Won</p>
          <ProgressBar now={100} variant="info" className="mt-2" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
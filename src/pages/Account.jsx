import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Tab, Tabs, Image } from 'react-bootstrap';
import { FaUser, FaShoppingBag, FaHeart, FaMapMarkerAlt, FaCreditCard, FaBell } from 'react-icons/fa';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <Container className="py-5">
      <Row>
        {/* Sidebar */}
        <Col lg={3} md={4} className="mb-4">
          <Card className="border-0 shadow-sm">
            <Card.Body className="text-center">
              <div className="mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  roundedCircle 
                  width={120}
                  height={120}
                  className="border border-3 border-primary mb-3"
                />
                <h4 className="mb-1">John Doe</h4>
                <p className="text-muted mb-0">Premium Member</p>
                <small className="text-primary">⭐ Gold Tier</small>
              </div>

              <div className="list-group">
                <button 
                  className={`list-group-item list-group-item-action ${activeTab === 'profile' ? 'active' : ''}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <FaUser className="me-2" /> My Profile
                </button>
                <button 
                  className={`list-group-item list-group-item-action ${activeTab === 'orders' ? 'active' : ''}`}
                  onClick={() => setActiveTab('orders')}
                >
                  <FaShoppingBag className="me-2" /> My Orders
                </button>
                <button 
                  className={`list-group-item list-group-item-action ${activeTab === 'wishlist' ? 'active' : ''}`}
                  onClick={() => setActiveTab('wishlist')}
                >
                  <FaHeart className="me-2" /> Wishlist
                </button>
                <button 
                  className={`list-group-item list-group-item-action ${activeTab === 'address' ? 'active' : ''}`}
                  onClick={() => setActiveTab('address')}
                >
                  <FaMapMarkerAlt className="me-2" /> Addresses
                </button>
                <button 
                  className={`list-group-item list-group-item-action ${activeTab === 'payment' ? 'active' : ''}`}
                  onClick={() => setActiveTab('payment')}
                >
                  <FaCreditCard className="me-2" /> Payment Methods
                </button>
                <button 
                  className={`list-group-item list-group-item-action ${activeTab === 'notifications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('notifications')}
                >
                  <FaBell className="me-2" /> Notifications
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Main Content */}
        <Col lg={9} md={8}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              {activeTab === 'profile' && (
                <div>
                  <h4 className="mb-4">My Profile</h4>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" defaultValue="John" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" defaultValue="Doe" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" defaultValue="john.doe@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" defaultValue="+1 (234) 567-8900" />
                    </Form.Group>
                    <Button variant="primary">Update Profile</Button>
                  </Form>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h4 className="mb-4">My Orders</h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Items</th>
                          <th>Total</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#ORD-001</td>
                          <td>Dec 14, 2024</td>
                          <td>3 Items</td>
                          <td>$349.99</td>
                          <td><span className="badge bg-success">Delivered</span></td>
                          <td><Button size="sm" variant="outline-primary">View</Button></td>
                        </tr>
                        <tr>
                          <td>#ORD-002</td>
                          <td>Dec 10, 2024</td>
                          <td>2 Items</td>
                          <td>$129.99</td>
                          <td><span className="badge bg-warning">Processing</span></td>
                          <td><Button size="sm" variant="outline-primary">Track</Button></td>
                        </tr>
                        <tr>
                          <td>#ORD-003</td>
                          <td>Dec 5, 2024</td>
                          <td>1 Item</td>
                          <td>$89.99</td>
                          <td><span className="badge bg-danger">Cancelled</span></td>
                          <td><Button size="sm" variant="outline-primary">Reorder</Button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h4 className="mb-4">My Wishlist</h4>
                  <Row>
                    {[1, 2, 3].map(item => (
                      <Col md={4} key={item}>
                        <Card className="mb-3">
                          <Card.Img variant="top" src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" />
                          <Card.Body>
                            <Card.Title>Smartphone X12</Card.Title>
                            <Card.Text className="text-primary fw-bold">$699.99</Card.Text>
                            <div className="d-flex gap-2">
                              <Button variant="primary" size="sm">Add to Cart</Button>
                              <Button variant="outline-danger" size="sm">Remove</Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}

              {/* Add other tabs content similarly */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
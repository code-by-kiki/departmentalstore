import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Form, Image, Alert, Modal } from 'react-bootstrap';
import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaShoppingBag, FaCreditCard, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal,
    placeOrder 
  } = useCart();

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    setShowCheckoutModal(true);
  };

  const confirmOrder = () => {
    const success = placeOrder();
    if (success) {
      setOrderPlaced(true);
      setOrderDetails({
        orderId: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        total: total.toFixed(2),
        date: new Date().toLocaleDateString(),
        items: cartItems.length
      });
      setTimeout(() => {
        setShowCheckoutModal(false);
        setOrderPlaced(false);
      }, 3000);
    }
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">🛒 Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <Card className="text-center py-5 border-0 shadow-sm">
          <Card.Body>
            <FaShoppingBag className="display-1 text-muted mb-4" />
            <h3>Your cart is empty</h3>
            <p className="text-muted mb-4">Add some products to your cart to see them here</p>
            <Button as={Link} to="/products" variant="primary" size="lg">
              Start Shopping
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <>
          <Row>
            {/* Cart Items */}
            <Col lg={8} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <div className="table-responsive">
                    <Table className="mb-0">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map(item => (
                          <tr key={item.id}>
                            <td>
                              <div className="d-flex align-items-center">
                                <Image 
                                  src={item.image} 
                                  alt={item.name}
                                  width={80}
                                  height={80}
                                  className="rounded me-3"
                                />
                                <div>
                                  <h6 className="mb-1">{item.name}</h6>
                                  <small className="text-muted">{item.category}</small>
                                  {item.brand && <div><small className="text-primary">{item.brand}</small></div>}
                                </div>
                              </div>
                            </td>
                            <td className="align-middle">
                              <strong>${item.price.toFixed(2)}</strong>
                              {item.originalPrice && (
                                <div>
                                  <small className="text-muted text-decoration-line-through">
                                    ${item.originalPrice.toFixed(2)}
                                  </small>
                                </div>
                              )}
                            </td>
                            <td className="align-middle">
                              <div className="d-flex align-items-center">
                                <Button 
                                  variant="outline-secondary" 
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <FaMinus />
                                </Button>
                                <span className="mx-3">{item.quantity}</span>
                                <Button 
                                  variant="outline-secondary" 
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <FaPlus />
                                </Button>
                              </div>
                            </td>
                            <td className="align-middle">
                              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                            </td>
                            <td className="align-middle">
                              <Button 
                                variant="outline-danger" 
                                size="sm"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <FaTrash />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>

                  <div className="mt-4 d-flex justify-content-between">
                    <Button as={Link} to="/products" variant="outline-primary">
                      <FaArrowLeft className="me-2" /> Continue Shopping
                    </Button>
                    <Button variant="outline-danger" onClick={clearCart}>
                      Clear Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Order Summary */}
            <Col lg={4}>
              <Card className="border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
                <Card.Body>
                  <h5 className="mb-4">Order Summary</h5>
                  
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-success">FREE</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mb-4">
                      <strong>Total</strong>
                      <strong className="text-primary">${total.toFixed(2)}</strong>
                    </div>
                  </div>

                  {/* Coupon Code */}
                  <Form className="mb-4">
                    <Form.Group>
                      <Form.Label>Coupon Code</Form.Label>
                      <div className="input-group">
                        <Form.Control type="text" placeholder="Enter coupon code" />
                        <Button variant="primary">Apply</Button>
                      </div>
                    </Form.Group>
                  </Form>

                  {/* Proceed to Checkout Button */}
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-100 mb-3"
                    onClick={handleCheckout}
                  >
                    <FaCreditCard className="me-2" />
                    Proceed to Checkout (${total.toFixed(2)})
                  </Button>

                  <Alert variant="info" className="mb-0">
                    <small>
                      <strong>Free shipping</strong> on orders above $50. <br />
                      <strong>30-day return policy.</strong> Easy returns within 30 days.
                    </small>
                  </Alert>
                </Card.Body>
              </Card>

              {/* Secure Payment */}
              <Card className="border-0 shadow-sm mt-4">
                <Card.Body>
                  <h6 className="mb-3">🔒 Secure Payment</h6>
                  <div className="d-flex justify-content-around fs-4 mb-3">
                    <span>💳</span>
                    <span>🏦</span>
                    <span>📱</span>
                    <span>🔒</span>
                  </div>
                  <p className="text-muted small mb-0">
                    Your payment information is encrypted and secure.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Checkout Modal */}
          <Modal show={showCheckoutModal} onHide={() => setShowCheckoutModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                {orderPlaced ? '🎉 Order Successful!' : 'Confirm Order'}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {orderPlaced ? (
                <div className="text-center py-4">
                  <FaCheckCircle className="display-1 text-success mb-4" />
                  <h4>Thank You for Your Order!</h4>
                  <p className="text-muted mb-3">
                    Your order has been placed successfully.
                  </p>
                  {orderDetails && (
                    <div className="bg-light p-3 rounded mb-3">
                      <p className="mb-1"><strong>Order ID:</strong> {orderDetails.orderId}</p>
                      <p className="mb-1"><strong>Total:</strong> ${orderDetails.total}</p>
                      <p className="mb-0"><strong>Date:</strong> {orderDetails.date}</p>
                    </div>
                  )}
                  <p>
                    You will receive a confirmation email shortly with tracking details.
                  </p>
                </div>
              ) : (
                <>
                  <h6 className="mb-3">Order Summary</h6>
                  <div className="mb-3">
                    {cartItems.map(item => (
                      <div key={item.id} className="d-flex justify-content-between mb-2">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <hr />
                    <div className="d-flex justify-content-between">
                      <strong>Total Amount:</strong>
                      <strong className="text-primary">${total.toFixed(2)}</strong>
                    </div>
                  </div>
                  
                  <Form className="mb-3">
                    <Form.Group className="mb-3">
                      <Form.Label>Delivery Address</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Enter your delivery address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Payment Method</Form.Label>
                      <Form.Select>
                        <option>Credit/Debit Card</option>
                        <option>PayPal</option>
                        <option>Cash on Delivery</option>
                        <option>Bank Transfer</option>
                      </Form.Select>
                    </Form.Group>
                  </Form>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              {!orderPlaced && (
                <>
                  <Button variant="secondary" onClick={() => setShowCheckoutModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={confirmOrder}>
                    Confirm & Place Order
                  </Button>
                </>
              )}
              {orderPlaced && (
                <Button variant="success" onClick={() => setShowCheckoutModal(false)}>
                  Continue Shopping
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default Cart;
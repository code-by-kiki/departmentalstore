import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Store',
      details: ['2A kalavasal main road','madurai.', 'Tamil Nadu', 'India']
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+91 8870387018', '91 9865534001']
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@megastore.com', 'support@megastore.com']
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: ['Mon–Fri: 9AM–10PM', 'Sat–Sun: 9AM–11PM']
    }
  ];

  const faqs = [
    { q: 'Do you offer home delivery?', a: 'Yes, we offer free delivery on orders above $50.' },
    { q: 'What is your return policy?', a: 'We offer a 30-day return policy.' },
    { q: 'Do you have physical stores?', a: 'Yes, we have 50+ stores nationwide.' }
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Contact Us</h1>

      {submitted && (
        <Alert variant="success" dismissible>
          Thank you for your message! We’ll get back to you shortly.
        </Alert>
      )}

      <Row className="align-items-start">
        {/* LEFT SIDE */}
        <Col lg={4} className="mb-5">
          <div className="p-3 p-md-4 border rounded h-100">
            <h3 className="mb-4">Get in Touch</h3>

            {contactInfo.map((info, index) => (
              <div key={index} className="d-flex mb-3">
                <span className="fs-4 me-3">{info.icon}</span>
                <div>
                  <h6 className="mb-1">{info.title}</h6>
                  {info.details.map((d, i) => (
                    <p key={i} className="mb-0 text-muted">{d}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* MAP */}
            <div className="mt-4">
              <h6 className="mb-2">📍 Find Us</h6>
              <div className="ratio ratio-16x9">
                <iframe
                  title="map"
                  loading="lazy"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps?q=New%20York&output=embed"
                />
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-4">
              <h6 className="mb-3">❓ Quick FAQs</h6>
              <div className="accordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${index}`}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div id={`faq${index}`} className="accordion-collapse collapse">
                      <div className="accordion-body">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>

        {/* RIGHT SIDE */}
        <Col lg={8}>
          <div className="p-4 shadow rounded mb-5">
            <h3 className="mb-4">Send us a Message</h3>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select Subject</option>
                    <option>General</option>
                    <option>Order Issue</option>
                    <option>Returns</option>
                  </Form.Select>
                </Col>
              </Row>

              <Form.Control
                as="textarea"
                rows={4}
                className="mb-4"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button type="submit" className="w-100 py-2">
                📨 Send Message
              </Button>
            </Form>
          </div>

          {/* DEPARTMENTS */}
          <Row className="g-3">
            {['Sales', 'Returns', 'Corporate'].map((dept, i) => (
              <Col md={4} key={i}>
                <div className="border rounded p-3 text-center h-100">
                  <h6>{dept}</h6>
                  <p className="mb-1 text-muted">{dept.toLowerCase()}@megastore.com</p>
                  <p className="mb-0 text-muted">+91 9865534765{i}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>




      {/* WHY CONTACT US */}
      <section className="mt-5 pt-5 border-top">
        <h2 className="text-center mb-4 animate-fade">Why Contact MegaStore?</h2>
        <Row className="text-center g-4">
          <Col md={4} className="animate-slide">
            <div className="p-4 border rounded h-100">
              <h5>🤝 Dedicated Support</h5>
              <p className="text-muted">
                Our support team is always ready to help you with product queries,
                order issues, and personalized recommendations.
              </p>
            </div>
          </Col>
          <Col md={4} className="animate-slide">
            <div className="p-4 border rounded h-100">
              <h5>⚡ Fast Response</h5>
              <p className="text-muted">
                We respond to most inquiries within 24 hours to ensure smooth
                shopping experience.
              </p>
            </div>
          </Col>
          <Col md={4} className="animate-slide">
            <div className="p-4 border rounded h-100">
              <h5>🏬 Trusted Brand</h5>
              <p className="text-muted">
                Serving millions of customers with quality products and reliable
                services nationwide.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      {/* SUPPORT HIGHLIGHTS */}
      <section className="mt-5">
        <Row className="g-4 align-items-center">
          <Col md={6} className="animate-fade">
            <h3>Customer Care That Truly Cares</h3>
            <p className="text-muted">
              At MegaStore, customer satisfaction is our top priority. Whether you
              need assistance with an order, want to know more about our products,
              or have feedback to share, we are always here for you.
            </p>
            <ul className="text-muted">
              <li>✔ Secure & easy communication</li>
              <li>✔ Friendly customer support</li>
              <li>✔ Transparent return & refund policy</li>
              <li>✔ Support available 7 days a week</li>
            </ul>
          </Col>
          <Col md={6} className="animate-slide">
            <div className="p-4 bg-light rounded shadow-sm">
              <h5 className="mb-3">📞 Need Immediate Help?</h5>
              <p className="mb-1">Call our toll-free number:</p>
              <h4 className="text-success">+91 98655334756</h4>
              <p className="text-muted mt-2">
                Available during business hours.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      {/* STORE LOCATIONS */}
      <section className="mt-5">
        <h2 className="text-center mb-4 animate-fade">Our Store Locations</h2>
        <Row className="g-4">
          {['New York', 'California', 'Texas', 'Florida'].map((city, index) => (
            <Col md={3} sm={6} key={index} className="animate-slide">
              <div className="border rounded p-3 text-center h-100">
                <h6>🏬 {city}</h6>
                <p className="text-muted mb-1">MegaStore Outlet</p>
                <p className="text-muted mb-0">Open: 9AM – 10PM</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* TRUST STATS */}
      <section className="mt-5 text-center">
        <Row className="g-4">
          <Col md={3} className="animate-zoom">
            <h2 className="text-success">10M+</h2>
            <p className="text-muted">Happy Customers</p>
          </Col>
          <Col md={3} className="animate-zoom">
            <h2 className="text-success">50+</h2>
            <p className="text-muted">Stores Nationwide</p>
          </Col>
          <Col md={3} className="animate-zoom">
            <h2 className="text-success">24/7</h2>
            <p className="text-muted">Customer Support</p>
          </Col>
          <Col md={3} className="animate-zoom">
            <h2 className="text-success">99%</h2>
            <p className="text-muted">Customer Satisfaction</p>
          </Col>
        </Row>
      </section>



    </Container>
  );
};



export default Contact;


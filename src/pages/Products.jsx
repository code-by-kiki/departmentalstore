import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Pagination, Dropdown } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { 
  FaFilter, 
  FaSort, 
  FaSearch, 
  FaTimes,
  FaStar,
  FaFire,
  FaTag
} from 'react-icons/fa';
import { 
  allProducts, 
  productCategories,
} from '../data/products';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('search') || '';

  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showPopular, setShowPopular] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  
  const productsPerPage = 12;
  const brands = ['Apple', 'Samsung', 'Sony', 'Nike', 'LEGO', 'Dyson', 'KitchenAid', 'Rolex'];

  // Filter and sort products
  useEffect(() => {
    let products = [...allProducts];

    // Filter by category
    if (selectedCategory !== 'all') {
      products = products.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      products = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.brand?.toLowerCase().includes(query)
      );
    }

    // Filter by price range
    products = products.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by special offers
    if (showDiscount) {
      products = products.filter(product => product.discount > 0);
    }

    if (showNew) {
      products = products.filter(product => product.isNew);
    }

    if (showPopular) {
      products = products.filter(product => product.isPopular);
    }

    // Filter by brands
    if (selectedBrands.length > 0) {
      products = products.filter(product => 
        product.brand && selectedBrands.includes(product.brand)
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        products.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - sort by popularity and rating
        products.sort((a, b) => {
          const aScore = (a.isPopular ? 2 : 0) + (a.rating || 0);
          const bScore = (b.isPopular ? 2 : 0) + (b.rating || 0);
          return bScore - aScore;
        });
    }

    setFilteredProducts(products);
    setCurrentPage(1);
  }, [selectedCategory, priceRange, sortBy, searchQuery, showDiscount, showNew, showPopular, selectedBrands]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 2000]);
    setSortBy('featured');
    setShowDiscount(false);
    setShowNew(false);
    setShowPopular(false);
    setSelectedBrands([]);
  };

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <Container className="py-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Our Products Collection</h1>
        <p className="lead text-muted">
          Discover {filteredProducts.length} amazing products from our curated collection
        </p>
      </div>

      {/* Search Bar */}
      <Card className="border-0 shadow-sm mb-4">
        <Card.Body>
          <Row className="align-items-center">
            <Col lg={8}>
              <div className="input-group">
                <span className="input-group-text bg-light border-0">
                  <FaSearch />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => {
                    const params = new URLSearchParams();
                    if (e.target.value) params.set('search', e.target.value);
                    window.location.href = `/products?${params.toString()}`;
                  }}
                />
                {searchQuery && (
                  <Button 
                    variant="outline-secondary"
                    onClick={() => window.location.href = '/products'}
                  >
                    <FaTimes />
                  </Button>
                )}
              </div>
            </Col>
            <Col lg={4} className="mt-3 mt-lg-0">
              <div className="d-flex gap-2">
                <Button 
                  variant="outline-primary" 
                  className="w-50"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <FaFilter className="me-2" />
                  {showFilters ? 'Hide' : 'Show'} Filters
                </Button>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" className="w-50">
                    <FaSort className="me-2" />
                    Sort
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setSortBy('featured')}>
                      Featured
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortBy('price-low')}>
                      Price: Low to High
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortBy('price-high')}>
                      Price: High to Low
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortBy('rating')}>
                      Highest Rated
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortBy('newest')}>
                      Newest First
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
          </Row>

          {/* Quick Category Filters */}
          <div className="mt-3">
            <div className="d-flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'primary' : 'outline-primary'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
              >
                All Products
              </Button>
              {productCategories.slice(0, 6).map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? 'primary' : 'outline-primary'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.icon} {category.name}
                </Button>
              ))}
            </div>
          </div>
        </Card.Body>
      </Card>

      <Row>
        {/* Filters Sidebar */}
        {showFilters && (
          <Col lg={3} className="mb-4">
            <Card className="border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="mb-0">
                    <FaFilter className="me-2" /> Filters
                  </h5>
                  <Button 
                    variant="link" 
                    size="sm"
                    onClick={clearFilters}
                    className="text-decoration-none"
                  >
                    Clear All
                  </Button>
                </div>

                {/* Category Filter */}
                <div className="mb-4">
                  <h6 className="mb-3">
                    <FaTag className="me-2" />
                    Categories
                  </h6>
                  <div className="d-flex flex-column">
                    <Form.Check
                      type="radio"
                      id="cat-all"
                      label="All Categories"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="mb-2"
                    />
                    {productCategories.map(category => (
                      <Form.Check
                        key={category.id}
                        type="radio"
                        id={`cat-${category.id}`}
                        label={
                          <span>
                            {category.icon} {category.name}
                          </span>
                        }
                        name="category"
                        checked={selectedCategory === category.name}
                        onChange={() => setSelectedCategory(category.name)}
                        className="mb-2"
                      />
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-4">
                  <h6 className="mb-3">Price Range: ${priceRange[1]}</h6>
                  <Form.Range 
                    min="0" 
                    max="2000" 
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <small>$0</small>
                    <small>$2000</small>
                  </div>
                </div>

                {/* Special Filters */}
                <div className="mb-4">
                  <h6 className="mb-3">Special Offers</h6>
                  <div className="d-flex flex-column">
                    <Form.Check
                      type="checkbox"
                      id="discount"
                      label="Discounted Items"
                      checked={showDiscount}
                      onChange={(e) => setShowDiscount(e.target.checked)}
                      className="mb-2"
                    />
                    <Form.Check
                      type="checkbox"
                      id="new"
                      label="New Arrivals"
                      checked={showNew}
                      onChange={(e) => setShowNew(e.target.checked)}
                      className="mb-2"
                    />
                    <Form.Check
                      type="checkbox"
                      id="popular"
                      label="Popular Items"
                      checked={showPopular}
                      onChange={(e) => setShowPopular(e.target.checked)}
                      className="mb-2"
                    />
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-4">
                  <h6 className="mb-3">Brands</h6>
                  <div className="d-flex flex-column">
                    {brands.map(brand => (
                      <Form.Check
                        key={brand}
                        type="checkbox"
                        id={`brand-${brand}`}
                        label={brand}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                        className="mb-2"
                      />
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )}

        {/* Products Grid */}
        <Col lg={showFilters ? 9 : 12}>
          {/* Products Stats */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <p className="mb-0">
                Showing <strong>{Math.min(productsPerPage, currentProducts.length)}</strong> of{' '}
                <strong>{filteredProducts.length}</strong> products
                {selectedCategory !== 'all' && (
                  <span className="ms-2">
                    in <strong>{selectedCategory}</strong>
                  </span>
                )}
              </p>
              {searchQuery && (
                <small className="text-muted">
                  Search results for: <strong>"{searchQuery}"</strong>
                </small>
              )}
            </div>
            <div className="d-flex align-items-center">
              <FaSort className="me-2 text-muted" />
              <Form.Select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-auto"
                size="sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </Form.Select>
            </div>
          </div>

          {/* Products Grid */}
          {currentProducts.length > 0 ? (
            <>
              <Row className="g-4">
                {currentProducts.map(product => (
                  <Col key={product.id} xl={3} lg={4} md={6} sm={6}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-5">
                  <Pagination>
                    <Pagination.Prev 
                      onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    />
                    {[...Array(Math.min(5, totalPages))].map((_, index) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = index + 1;
                      } else if (currentPage <= 3) {
                        pageNum = index + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + index;
                      } else {
                        pageNum = currentPage - 2 + index;
                      }
                      
                      return (
                        <Pagination.Item
                          key={pageNum}
                          active={pageNum === currentPage}
                          onClick={() => handlePageChange(pageNum)}
                        >
                          {pageNum}
                        </Pagination.Item>
                      );
                    })}
                    <Pagination.Next 
                      onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    />
                  </Pagination>
                </div>
              )}
            </>
          ) : (
            <Card className="text-center py-5 border-0 shadow-sm">
              <Card.Body>
                <FaSearch className="display-1 text-muted mb-4" />
                <h3>No products found</h3>
                <p className="text-muted mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button variant="primary" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </Card.Body>
            </Card>
          )}

          {/* Products Summary */}
          <Card className="border-0 shadow-sm mt-5">
            <Card.Body>
              <Row>
                <Col md={4} className="text-center mb-3 mb-md-0">
                  <FaFire className="display-4 text-danger mb-3" />
                  <h5>Popular Items</h5>
                  <p className="text-muted small">
                    {filteredProducts.filter(p => p.isPopular).length} popular products
                  </p>
                </Col>
                <Col md={4} className="text-center mb-3 mb-md-0">
                  <FaStar className="display-4 text-warning mb-3" />
                  <h5>Top Rated</h5>
                  <p className="text-muted small">
                    {filteredProducts.filter(p => p.rating >= 4.5).length} highly rated products
                  </p>
                </Col>
                <Col md={4} className="text-center">
                  <FaTag className="display-4 text-success mb-3" />
                  <h5>Best Deals</h5>
                  <p className="text-muted small">
                    {filteredProducts.filter(p => p.discount > 0).length} products on sale
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaEye, FaCheck } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, isInCart } = useCart();
  const itemInCart = isInCart(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card className="product-card h-100 border-0 shadow-sm">
      {/* Product Image with Badges */}
      <div className="product-image-container position-relative">
        <Card.Img 
          variant="top" 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        
        {/* Product Badges */}
        <div className="product-badges position-absolute top-0 start-0 p-2">
          {product.isNew && (
            <Badge bg="success" className="me-1">New</Badge>
          )}
          {product.discount && (
            <Badge bg="danger">{product.discount}% OFF</Badge>
          )}
        </div>

        {/* In Cart Badge */}
        {itemInCart && (
          <Badge bg="success" className="position-absolute top-0 end-0 m-2">
            <FaCheck className="me-1" /> In Cart
          </Badge>
        )}
      </div>

      <Card.Body className="d-flex flex-column">
        {/* Category */}
        <div className="mb-2">
          <small className="text-muted">{product.category}</small>
        </div>

        {/* Product Name */}
        <Card.Title className="h6 mb-2 flex-grow-1">
          <Link to={`/products/${product.id}`} className="text-dark text-decoration-none">
            {product.name}
          </Link>
        </Card.Title>

        {/* Rating */}
        {product.rating && (
          <div className="mb-2">
            <span className="text-warning">{"★".repeat(product.rating)}</span>
            <span className="text-muted">{"★".repeat(5 - product.rating)}</span>
            <small className="text-muted ms-1">({product.reviews})</small>
          </div>
        )}

        {/* Price */}
        <div className="price-section mb-3">
          <span className="h5 text-primary fw-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-muted text-decoration-line-through ms-2">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button 
          variant={itemInCart ? "success" : "primary"}
          className="w-100 d-flex align-items-center justify-content-center"
          onClick={handleAddToCart}
          disabled={itemInCart}
        >
          {itemInCart ? (
            <>
              <FaCheck className="me-2" />
              Added to Cart
            </>
          ) : (
            <>
              <FaShoppingCart className="me-2" />
              Add to Cart
            </>
          )}
        </Button>

        {/* Quick Actions */}
        <div className="d-flex gap-2 mt-3">
          <Button 
            variant="outline-secondary" 
            size="sm" 
            className="flex-fill"
            as={Link}
            to={`/products/${product.id}`}
          >
            <FaEye className="me-1" /> View
          </Button>
          <Button 
            variant="outline-danger" 
            size="sm" 
            className="flex-fill"
          >
            <FaHeart className="me-1" /> Wish
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
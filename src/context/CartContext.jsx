import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart - ONLY ONE NOTIFICATION
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // If item exists, increase quantity - NO DUPLICATE NOTIFICATION
        const updatedItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedItems;
      } else {
        // If item doesn't exist, add new item - SHOW NOTIFICATION HERE ONLY
        const newItem = {
          ...product,
          quantity: 1,
          addedAt: new Date().toISOString()
        };
        toast.success(`${product.name} added to cart successfully! 🛒`, {
          position: "top-right",
          autoClose: 3000,
        });
        return [...prevItems, newItem];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.id === id);
      const filteredItems = prevItems.filter(item => item.id !== id);
      if (item) {
        toast.error(`${item.name} removed from cart`, {
          position: "top-right",
          autoClose: 3000,
        });
      }
      return filteredItems;
    });
  };

  // Update item quantity - NO NOTIFICATION ON QUANTITY CHANGE
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }

    setCartItems(prevItems => {
      return prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    toast.info('Cart cleared successfully!', {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // Place order - NEW FUNCTION
  const placeOrder = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!', {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }

    const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const orderTotal = getCartTotal();
    
    toast.success(
      <div>
        <strong>🎉 Order Placed Successfully!</strong><br/>
        Order ID: <strong>{orderId}</strong><br/>
        Total: <strong>${orderTotal.toFixed(2)}</strong><br/>
        You will receive a confirmation email shortly.
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
      }
    );

    // Clear cart after successful order
    setTimeout(() => {
      clearCart();
    }, 1000);

    return true;
  };

  // Get cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Get cart count
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Check if item is in cart
  const isInCart = (id) => {
    return cartItems.some(item => item.id === id);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      placeOrder, // NEW
      getCartTotal,
      getCartCount,
      isInCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

import React, { useState, useEffect } from 'react';
import './Homepage.css';
import '../api/items.json'
function Homepage() {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3005/api/items')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        return response.json();
      })
      .then(data => {
        setItems(data);
        setCartItems([]);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const addToCart = (title) => {
    // Find the selected item
    const selectedItem = items.find(item => item.title === title);
    // If selectedItem is not found, exit function
    if (!selectedItem) {
      return;
    }
  
    // Add the selected item to the cartItems state
    setCartItems([...cartItems, selectedItem]);
  };
  

  const removeFromCart = (title) => {
    const updatedCartItems = cartItems.filter(item => item.title !== title);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h1 data-testid="heading">{showCart ? 'Cart Items' : 'Shopping Items'}</h1>
      <button onClick={toggleCart} data-testid="cart-button">
        {showCart ? 'Show Shopping Items' : 'Show Cart Items'}
      </button>
      <button onClick={() => window.location.href='/request'} data-testid="request-button">Request Page</button>
      <div className="item-container">
        {showCart ? (
          cartItems.map(item => (
            <div className="item" key={item.title}>
              <h3 data-testid={`title-${item.title}`}>{item.title}</h3>
              <p data-testid={`price-${item.title}`}>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.title)} data-testid={`removeCartButton-${item.title}`}>
                Remove From Cart
              </button>
            </div>
          ))
        ) : (
          items.map(item => (
            <div className="item" key={item.id}>
              <h3 data-testid={`title-${item.title}`}>{item.title}</h3>
              <p data-testid={`price-${item.title}`}>Price: ${item.price}</p>
              <button onClick={() => addToCart(item.title)} data-testid={`addCartButton-${item.title}`}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Homepage;

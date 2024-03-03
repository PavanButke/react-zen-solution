// RequestPage.js
import React, { useState } from 'react';
import './RequestPage.css';

function RequestPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [item, setItem] = useState('');

  const submitRequest = () => {
    // Perform validation if needed

    fetch('http://localhost:3005/requestItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        name,
        item
      })
    })
    .then(response => {
      if (response.ok) {
        alert('Request submitted successfully');
        // Optionally clear form fields or perform other actions
      } else {
        alert('Error submitting request');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error submitting request');
    });
  };

  return (
    <div>
      <h1>Request Page</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required data-testid="input-mail" />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required data-testid="input-name" />
        </div>
        <div>
          <label>Item:</label>
          <input type="text" value={item} onChange={e => setItem(e.target.value)} required data-testid="input-item" />
        </div>
        <button type="button" onClick={submitRequest} data-testid="submit">Request</button>
      </form>
    </div>
  );
}

export default RequestPage;

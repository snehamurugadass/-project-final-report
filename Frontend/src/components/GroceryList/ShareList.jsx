import React, { useState } from 'react';
import axios from 'axios';

const ShareList = () => {
  const [email, setEmail] = useState('');

  const shareGroceryList = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/grocery-list/share', { email });
      alert(`Grocery list shared with ${email}`);
    } catch (error) {
      console.error('Failed to share grocery list', error);
    }
  };

  return (
    <div>
      <h2>Share Grocery List</h2>
      <form onSubmit={shareGroceryList}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Friend's Email" required />
        <button type="submit">Share</button>
      </form>
    </div>
  );
};

export default ShareList;

import React, { useState } from 'react';
import { getProductPrice } from './GetProdData';
function PriceChecker() {
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async () => {
    try {
      const fetchedPrice = await getProductPrice(url);
      setPrice(fetchedPrice);
    } catch (error) {
      console.error('Error fetching price:', error);
    }
  };

  return (
    <div>
      <h1>Price Checker</h1>
      <label>
        Enter the URL:
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Get Price</button>
      {price && <p>Price: {price}</p>}
    </div>
  );
}

export default PriceChecker;

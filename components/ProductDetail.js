"use client";

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCart } from './CartContext';

function ProductDetailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addToCart } = useCart();

  const title = searchParams.get('name') || "Nike Pegasus 42";
  const imageSrc = searchParams.get('image') || "/images/pegasus.png";
  const price = searchParams.get('price') || "4,059,000đ";

  const sizesList = ['EU 36', 'EU 36.5', 'EU 37.5', 'EU 38', 'EU 38.5', 'EU 39', 'EU 40', 'EU 40.5', 'EU 41', 'EU 42', 'EU 42.5'];
  
  const [selectedSize, setSelectedSize] = useState(sizesList[0]);

  const handleAddToCart = () => {
    addToCart({
      title,
      type: "Unisex Shoes",
      color: "Standard",
      size: selectedSize,
      price,
      imageSrc,
    });
    router.push('/cart');
  };

  return (
    <main className="detail-container">
      <div className="detail-image">
        <img src={imageSrc} alt={title} />
      </div>
      
      <div className="detail-info">
        <h1 className="detail-title">{title}</h1>
        <p className="detail-subtitle">Unisex Shoes</p>
        <p className="detail-price">{price}</p>

        <div className="size-section">
          <div className="size-header">
            <span>Select Size</span>
            <span className="size-guide">Size Guide</span>
          </div>
          
          <div className="size-grid">
            {sizesList.map((size, index) => (
              <button 
                key={index} 
                className="size-btn"
                style={{
                  borderColor: selectedSize === size ? '#111' : '#E5E5E5',
                  borderWidth: selectedSize === size ? '2px' : '1px',
                  fontWeight: selectedSize === size ? 'bold' : 'normal'
                }}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button className="btn-dark" onClick={handleAddToCart}>Add to Bag</button>
          <button className="btn-outline">Favourite ♡</button>
        </div>
        
        <p style={{marginTop: '24px', lineHeight: '1.6', color: '#707072'}}>
          A springy ride for every run, familiar, just-for-you feel returns to help you accomplish your goals.
        </p>
      </div>
    </main>
  );
}

export default function ProductDetail() {
  return (
    <Suspense fallback={<div style={{padding: '50px', textAlign: 'center'}}>Loading...</div>}>
      <ProductDetailContent />
    </Suspense>
  );
}
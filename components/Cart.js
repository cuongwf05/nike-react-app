"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <Link href="/product" className="cart-item-img" style={{ display: 'block' }}>
         <img src={item.imageSrc} alt={item.title} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius: '4px', cursor: 'pointer'}} />
      </Link>
      
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div>
            <h1 style={{fontSize: '15px', fontWeight: 'bold'}}>{item.title}</h1>
            <p className="text-gray" style={{fontSize: '15px'}}>{item.type}</p>
            <p className="text-gray" style={{fontSize: '15px'}}>{item.color}</p>
            <p className="text-gray" style={{fontSize: '15px'}}>Size {item.size}</p>
          </div>
          <span style={{fontWeight: '500'}}>{item.price}</span>
        </div>
        
        <div style={{display:'flex', gap:'16px', alignItems:'center', marginTop:'24px'}}>
          <span className="text-gray" style={{fontSize:'16px', cursor:'pointer'}} onClick={() => onRemove(item.id)}>🗑 Remove</span>
          <div className="qty-box">
            <span style={{fontWeight:'500'}}>{item.quantity}</span> <span>⌄</span>
          </div>
          <div className="icon-box" style={{cursor:'pointer'}}>♡</div>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      const priceNum = parseInt(item.price.replace(/\D/g, '')) || 0;
      total += priceNum * item.quantity;
    });
    return total;
  };

  const subtotal = calculateTotal();
  const shipping = cartItems.length > 0 ? 250000 : 0;
  const total = subtotal + shipping;
  const formatPrice = (num) => new Intl.NumberFormat('vi-VN').format(num) + 'đ';

  return (
    <>
      <div className="promo-banner">FREE DELIVERY Applies to orders of 5.000.000đ or more. View details.</div>
      <main className="main-container">
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
             <h3 style={{fontSize: '20px', fontWeight: '500'}}>Your Bag is empty.</h3>
          ) : (
            cartItems.map(item => (
              <CartItem key={item.id} item={item} onRemove={removeFromCart} />
            ))
          )}
        </div>

        <div className="summary-box">
          <h2 style={{fontSize: '24px', fontWeight: '500'}}>Summary</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <div className="summary-row"><span>Subtotal 🛈</span> <span>{formatPrice(subtotal)}</span></div>
            <div className="summary-row"><span>Estimated Delivery & Handling</span> <span>{formatPrice(shipping)}</span></div>
            <div className="summary-row" style={{borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5', padding: '20px 0', fontWeight: '500'}}>
              <span>Total</span> <span>{formatPrice(total)}</span>
            </div>
          </div>
          <div style={{marginTop: '16px', display:'flex', flexDirection:'column', gap:'16px'}}>
            <button className="btn-dark">Guest Checkout</button>
            <button className="btn-dark">Member Checkout</button>
          </div>
        </div>
      </main>
    </>
  );
}
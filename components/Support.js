import React from 'react';

export default function Support() {
  return (
    <main className="support-container">
      <h1 style={{fontSize: '40px', fontWeight: '900', textTransform: 'uppercase'}}>GET HELP</h1>
      <input 
        type="text" 
        placeholder="🔍 Search for answers" 
        style={{width: '600px', padding: '16px', border: '1px solid #CCCCCC', borderRadius: '4px', marginTop: '32px', fontSize: '16px'}}
      />
      
      <div className="support-grid">
        <div className="support-card"><h3>📦</h3><p style={{marginTop: '16px', fontWeight: '500'}}>DISPATCH & DELIVERY</p></div>
        <div className="support-card"><h3>🔄</h3><p style={{marginTop: '16px', fontWeight: '500'}}>RETURNS</p></div>
        <div className="support-card"><h3>📝</h3><p style={{marginTop: '16px', fontWeight: '500'}}>ORDER STATUS</p></div>
        <div className="support-card"><h3>💳</h3><p style={{marginTop: '16px', fontWeight: '500'}}>NIKE</p></div>
      </div>
    </main>
  );
}
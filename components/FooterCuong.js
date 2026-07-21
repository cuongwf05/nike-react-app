"use client";

import Link from 'next/link';

export default function FooterCuong() {
  return (
    <footer className="footer">
      <div className="logo">NIKE</div>
      <div className="footer-col">
        <Link href="/contact">HELP</Link>
        <span>ORDER STATUS</span>
        <span>SHIPPING</span>
        <span>RETURNS</span>
      </div>
      <div className="footer-col">
        <span>COMPANY INFO</span>
        <span>NEWS</span>
        <span>CAREERS</span>
        <span>SUSTAINABILITY</span>
      </div>
    </footer>
  );
}
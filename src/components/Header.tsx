"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMobile = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <Link href="/" className="logo-wrap">
            {/* We use standard img to perfectly preserve the vanilla CSS rendering */}
            <img src="/Logos/image.png" alt="Joscar Turf Logo" />
          </Link>
          <div className="header-right">
            <a href="tel:7204358409" className="header-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call
            </a>
            <a href="sms:7204358409" className="header-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Text
            </a>
            <a href="https://calendly.com/bamlandscaping-zohomail/bam-sprinklers-and-landscaping-free-estimate-ca-clone" target="_blank" rel="noreferrer" className="btn btn-primary header-book">Book Free Estimate</a>
          </div>
          <button className="hamburger" aria-label="Menu" onClick={() => setMenuOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button className="mobile-close" aria-label="Close" onClick={closeMobile}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <a href="tel:7204358409" onClick={closeMobile}>Call (720) 435-8409</a>
        <a href="sms:7204358409" onClick={closeMobile}>Text (720) 435-8409</a>
        <a href="#gallery" onClick={closeMobile}>Gallery</a>
        <a href="#service-area" onClick={closeMobile}>Service Area</a>
        <a href="https://calendly.com/bamlandscaping-zohomail/bam-sprinklers-and-landscaping-free-estimate-ca-clone" target="_blank" rel="noreferrer" onClick={closeMobile} className="btn btn-primary">Book Free Estimate</a>
      </div>
    </>
  );
}

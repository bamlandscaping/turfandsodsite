"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMobile = () => setMenuOpen(false);

  return (
    <>
      {/* MAIN HEADER — static, not sticky */}
      <header className="header">
        <div className="container">
          <Link href="/" className="logo-wrap" aria-label="Joscar Turf Home">
            <img src="/Logos/image.png" alt="Joscar Turf — Fresh Sod Denver" />
          </Link>

          <div className="header-right hidden-mobile">
            <div className="header-cta-group">
              <div className="header-cta-btns">
                <a href="tel:7204358409" className="header-phone" aria-label="Call Joscar Turf">
                  {/* Phone handset SVG */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call (720) 435-8409
                </a>
                <a href="sms:7204358409" className="header-sms" aria-label="Text Joscar Turf">
                  {/* Chat bubble SVG */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  Text Us
                </a>
              </div>
              <div className="header-pickup">
                {/* Location pin SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                <a href="https://maps.google.com/?q=5250+Sheridan+Blvd,+Arvada,+CO+80002" target="_blank" rel="noopener noreferrer">
                  Pickup: 5250 Sheridan Blvd, Arvada CO
                </a>
                <span className="pickup-divider">·</span>
                {/* Truck SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="1"/>
                  <path d="M16 8h4l3 5v3h-7V8z"/>
                  <circle cx="5.5" cy="18.5" r="2"/>
                  <circle cx="18.5" cy="18.5" r="2"/>
                </svg>
                Fresh Sod Delivery — Denver Metro
              </div>
            </div>
          </div>

          <button className="hamburger" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN MENU */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`} role="dialog" aria-modal="true">
        <button className="mobile-close" aria-label="Close menu" onClick={closeMobile}>
          {/* X close SVG */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Address block in mobile menu */}
        <div className="mobile-address">
          <div className="mobile-address-label">Fresh Sod Pickup &amp; Delivery</div>
          <a
            href="https://maps.google.com/?q=5250+Sheridan+Blvd,+Arvada,+CO+80002"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="mobile-address-link"
          >
            {/* Location pin SVG */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            5250 Sheridan Blvd, Arvada, CO 80002
          </a>
        </div>

        <div className="mobile-cta-btns">
          <a href="tel:7204358409" onClick={closeMobile} aria-label="Call Joscar Turf">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call (720) 435-8409
          </a>
          <a href="sms:7204358409" onClick={closeMobile} aria-label="Text Joscar Turf">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Text (720) 435-8409
          </a>
        </div>

        <a href="#gallery" onClick={closeMobile}>Gallery</a>
        <a href="#service-area" onClick={closeMobile}>Service Area</a>
        <a href="#booking" onClick={closeMobile}>Get Estimate</a>
      </div>
    </>
  );
}

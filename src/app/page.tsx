import dynamic from "next/dynamic";
import Header from "@/components/Header";
import ScrollObserver from "@/components/ScrollObserver";
import CalendlyWidget from "@/components/CalendlyWidget";

import MapWrapper from "@/components/MapWrapper";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="/Website Pics/installing-fresh-sod-in-a-lush-garden-a-gardener-rolls-out-new-sod-in-a-green-landscape-during-a-sunny-afternoon-enhancing-the-beauty-of-the-yard-photo.webp"
            alt="Fresh sod installation in Denver Colorado"
          />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot"></span>
              Fresh Sod Available Every Day
            </div>
            <h1>
              <span className="accent">Fresh Sod</span>
              <br />
              Delivery & Pickup
              <br />
              in Denver
            </h1>
            <p>
              Farm-fresh sod available daily for delivery or pickup across the Denver metro area. Call or book your free estimate today.
            </p>
            <div className="hero-buttons">
              <a href="tel:7204358409" className="btn btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call
              </a>
              <a href="sms:7204358409" className="btn btn-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Text
              </a>
              <a
                href="https://calendly.com/bamlandscaping-zohomail/bam-sprinklers-and-landscaping-free-estimate-ca-clone"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section what-we-do">
        <div className="container">
          <div className="section-label">
            <svg viewBox="0 0 24 2">
              <line x1="0" y1="1" x2="24" y2="1" />
            </svg>
            What We Do
          </div>
          <h2 className="section-title">Sod Delivery & Pickup in Denver</h2>
          <p className="section-sub">
            Fresh sod cut daily — delivered to your door or available for pickup. Serving the greater Denver metro area.
          </p>
          <div className="wwd-grid">
            <div className="wwd-card">
              <div className="wwd-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="1" y="6" width="15" height="12" rx="1" />
                  <polygon points="16 8 21 11 21 18 16 18 16 8" />
                  <circle cx="6" cy="19" r="2" />
                  <circle cx="18" cy="19" r="2" />
                </svg>
              </div>
              <h3>Sod Delivery</h3>
              <p>
                Fresh sod delivered right to your property across the Denver metro area. Cut fresh daily and ready to lay on arrival.
              </p>
            </div>
            <div className="wwd-card">
              <div className="wwd-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3>Sod Pickup</h3>
              <p>
                Pick up your fresh sod directly from our location. Same-day availability — cut fresh every single day for guaranteed quality.
              </p>
            </div>
            <div className="wwd-card">
              <div className="wwd-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Sod Installation</h3>
              <p>
                Full professional installation available. Our crew handles ground prep, grading, and flawless sod laying for a perfect lawn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section gallery" id="gallery">
        <div className="container">
          <div className="section-label">
            <svg viewBox="0 0 24 2">
              <line x1="0" y1="1" x2="24" y2="1" />
            </svg>
            Our Work
          </div>
          <h2 className="section-title">Fresh Sod, Real Results</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="/Website Pics/installing-fresh-sod-in-a-lush-garden-a-gardener-rolls-out-new-sod-in-a-green-landscape-during-a-sunny-afternoon-enhancing-the-beauty-of-the-yard-photo.webp"
                alt="Sod installation"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img src="/Website Pics/sod-rolls.webp" alt="Sod rolls stacked" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/Website Pics/SOD.webp" alt="Fresh sod roll" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/Website Pics/rolled-sod-lawn-26983560.webp" alt="Sod being laid" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/Website Pics/Sod-Low-Angle.webp" alt="Close-up sod grass" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img
                src="/Website Pics/cc827322a5da987b8e63f9f120a148a3205a33aa-3.jpeg"
                alt="Joscar Turf fresh sod sign"
                loading="lazy"
                style={{ objectPosition: "center 25%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="container">
          <h2>Ready for a Green Lawn?</h2>
          <p>Fresh sod available every day — delivery or pickup across the Denver metro.</p>
          <div className="cta-btns">
            <a href="tel:7204358409" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call
            </a>
            <a href="sms:7204358409" className="btn btn-secondary" style={{ borderColor: "rgba(255,255,255,.3)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Text
            </a>
            <a
              href="https://calendly.com/bamlandscaping-zohomail/bam-sprinklers-and-landscaping-free-estimate-ca-clone"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ borderColor: "rgba(255,255,255,.3)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section service-area" id="service-area">
        <div className="container">
          <div className="section-label">
            <svg viewBox="0 0 24 2">
              <line x1="0" y1="1" x2="24" y2="1" />
            </svg>
            Service Area
          </div>
          <h2 className="section-title">Serving the Greater Denver Area</h2>
          <p className="section-sub">
            We deliver fresh sod across the Denver metro — up to a 1-hour drive. If you're on the map, we've got you covered.
          </p>
          <MapWrapper />
          <div className="area-cities">
            {[
              "Denver",
              "Aurora",
              "Lakewood",
              "Arvada",
              "Westminster",
              "Thornton",
              "Centennial",
              "Englewood",
              "Littleton",
              "Commerce City",
              "Broomfield",
              "Northglenn",
              "Boulder",
              "Castle Rock",
              "Parker",
              "Golden",
              "Brighton",
              "Longmont",
              "Erie",
              "Frederick",
              "Highlands Ranch",
              "Ken Caryl",
              "Lone Tree",
              "Superior",
            ].map((city) => (
              <span key={city} className="area-chip">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="section booking" id="booking">
        <div className="container">
          <div className="section-label">
            <svg viewBox="0 0 24 2">
              <line x1="0" y1="1" x2="24" y2="1" />
            </svg>
            Book Now
          </div>
          <h2 className="section-title">Schedule Your Free Estimate</h2>
          <div className="booking-layout">
            <div className="booking-left">
              <h3>Let's Talk About Your Project</h3>
              <p>
                Whether you need sod delivered, picked up, or professionally installed — we're here to help. Serving the greater Denver metro
                area with quality work and honest pricing.
              </p>
              <div className="booking-checks">
                {["Free estimates — no obligation", "Fresh sod cut daily", "Delivery & pickup available", "Hablamos Español"].map((check) => (
                  <div key={check} className="booking-check">
                    <span className="ico">
                      <svg viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {check}
                  </div>
                ))}
              </div>
              <div className="booking-phones">
                <a href="tel:7204358409" className="btn btn-primary" style={{ width: "fit-content" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call (720) 435-8409
                </a>
                <a href="sms:7204358409" className="btn btn-secondary" style={{ width: "fit-content" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Text (720) 435-8409
                </a>
              </div>
            </div>
            <div className="calendly-box">
              <CalendlyWidget />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/image.png" alt="Joscar Turf" />
              <p>
                Denver's trusted source for farm-fresh sod. Delivery and pickup available every day. Serving the greater Denver metro area
                with quality work and honest pricing.
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#service-area">Service Area</a>
                </li>
                <li>
                  <a href="#booking">Book Estimate</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:7204358409">(720) 435-8409</a>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:7202756691">(720) 275-6691</a>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Denver, CO & Surrounding Areas</span>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Call or Text Anytime</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Joscar Turf. All rights reserved. Fresh Sod Every Day — Denver, CO.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

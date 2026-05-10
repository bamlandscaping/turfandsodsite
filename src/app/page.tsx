import Header from "@/components/Header";
import ScrollObserver from "@/components/ScrollObserver";
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
            alt="Fresh sod installation in Denver Colorado — Joscar Turf"
            fetchPriority="high"
          />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot"></span>
              Fresh Sod Cut Daily — Pickup &amp; Delivery Available
            </div>
            <h1>
              <span className="accent">Joscar Turf</span>
              <br />
              Fresh Sod Delivery &amp; Pickup
              <br />
              in Denver, CO
            </h1>
            <p>
              Farm-fresh sod available every day for pickup or delivery across the Denver metro. 
              Premium Kentucky Bluegrass &amp; Fescue blends. Call or text for a fast estimate.
            </p>

            {/* Seed Blend Info */}
            <div style={{
              marginTop: '0',
              marginBottom: '32px',
              background: 'rgba(34,161,52,.1)',
              padding: '20px 24px',
              borderRadius: '12px',
              border: '1px solid rgba(34,161,52,.3)',
              maxWidth: '100%',
            }}>
              <h2 style={{color:'var(--g400)',marginBottom:'10px',fontSize:'1.1rem',fontFamily:'var(--font)',fontWeight:700,letterSpacing:'.2px'}}>
                Premium Blends Only Sod
              </h2>
              <p style={{fontSize:'.97rem',lineHeight:'1.65',color:'#e8ece8',margin:'0'}}>
                <strong style={{color:'var(--g300)'}}>4-Way Kentucky Bluegrass</strong> — shade, sun, traffic &amp; low water<br/>
                <strong style={{color:'var(--g300)'}}>90/10 Fescue Blend</strong> — drought-tolerant &amp; durable
              </p>
            </div>

            <div className="hero-buttons">
              <a href="tel:7204358409" className="btn btn-primary" id="hero-call-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call (720) 435-8409
              </a>
              <a href="sms:7204358409" className="btn btn-secondary" id="hero-text-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Text (720) 435-8409
              </a>
              <a href="https://maps.google.com/?q=5250+W+53rd+Pl,+Arvada,+CO+80002" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="hero-directions-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section what-we-do">
        <div className="container">
          <div className="section-label">
            <svg viewBox="0 0 24 2"><line x1="0" y1="1" x2="24" y2="1" /></svg>
            What We Do
          </div>
          <h2 className="section-title">Fresh Sod Pickup &amp; Delivery — Denver Metro</h2>
          <p className="section-sub">
            Premium Kentucky Bluegrass and Fescue sod cut fresh every day. Delivered to your door or ready for pickup at our Arvada location. Serving the greater Denver metro area.
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
              <h3>Sod Delivery — Denver Area</h3>
              <p>
                Fresh Kentucky Bluegrass and Fescue sod delivered directly to your property across the Denver metro. Cut fresh daily and ready to lay on arrival.
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
              <h3>Sod Pickup — Arvada, CO</h3>
              <p>
                Pick up directly at <strong>5250 W 53rd Pl, Arvada, CO 80002</strong>. Same-day availability — cut fresh every single day for guaranteed quality.
              </p>
            </div>
            <div className="wwd-card">
              <div className="wwd-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Professional Installation</h3>
              <p>
                Full professional sod installation available in Denver &amp; surrounding areas. Ground prep, grading, and flawless laying for a perfect lawn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section gallery" id="gallery">
        <div className="container">
          <div className="section-label">
            <svg viewBox="0 0 24 2"><line x1="0" y1="1" x2="24" y2="1" /></svg>
            Our Work
          </div>
          <h2 className="section-title">Fresh Sod — Real Results in Denver</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="/Website Pics/installing-fresh-sod-in-a-lush-garden-a-gardener-rolls-out-new-sod-in-a-green-landscape-during-a-sunny-afternoon-enhancing-the-beauty-of-the-yard-photo.webp"
                alt="Fresh sod installation Denver Colorado"
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img src="/Website Pics/sod-rolls.webp" alt="Kentucky Bluegrass sod rolls Denver" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/Website Pics/SOD.webp" alt="Fresh sod roll ready for pickup Denver" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/New Pics/new-sod-installation-two-men-laying-sod-home-lawn.webp" alt="Two men laying new sod on home lawn" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/New Pics/senior-man-laying-sod-for-new-lawn.webp" alt="Man laying sod for new lawn" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img
                src="/Website Pics/cc827322a5da987b8e63f9f120a148a3205a33aa-3.jpeg"
                alt="Joscar Turf fresh sod sign — Pickup &amp; Delivery"
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
          <p>Fresh sod pickup &amp; delivery every day — Denver metro area.</p>
          <div className="cta-btns">
            <a href="tel:7204358409" className="btn btn-primary" id="cta-call-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call (720) 435-8409
            </a>
            <a href="sms:7204358409" className="btn btn-secondary" id="cta-text-btn" style={{ borderColor: "rgba(255,255,255,.4)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Text (720) 435-8409
            </a>
            <a href="https://maps.google.com/?q=5250+W+53rd+Pl,+Arvada,+CO+80002" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="cta-directions-btn" style={{ borderColor: "rgba(255,255,255,.4)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Directions
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section service-area" id="service-area">
        <div className="container">
          <div className="section-label">
            <svg viewBox="0 0 24 2"><line x1="0" y1="1" x2="24" y2="1" /></svg>
            Service Area
          </div>
          <h2 className="section-title">Sod Delivery &amp; Pickup — Greater Denver Area</h2>
          <p className="section-sub">
            We deliver fresh sod across the Denver metro — up to a 1-hour drive. Pickup available at 5250 W 53rd Pl, Arvada, CO 80002.
          </p>
          <MapWrapper />
          <div className="area-cities">
            {[
              "Denver","Aurora","Lakewood","Arvada","Westminster","Thornton",
              "Centennial","Englewood","Littleton","Commerce City","Broomfield",
              "Northglenn","Boulder","Castle Rock","Parker","Golden","Brighton",
              "Longmont","Erie","Frederick","Highlands Ranch","Ken Caryl",
              "Lone Tree","Superior",
            ].map((city) => (
              <span key={city} className="area-chip">{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="section booking" id="booking">
        <div className="container">
          <div className="section-label">
            <svg viewBox="0 0 24 2"><line x1="0" y1="1" x2="24" y2="1" /></svg>
            Get an Estimate
          </div>
          <h2 className="section-title">Schedule Your Free Sod Estimate</h2>
          <div className="booking-layout">
            <div className="booking-left" style={{ margin: "0 auto", maxWidth: "600px", textAlign: "center" }}>
              <h3>Let&apos;s Talk About Your Project</h3>
              <p>
                Whether you need sod delivered, picked up, or professionally installed — we&apos;re here to help. Serving the greater Denver metro with quality work and honest pricing.
              </p>
              <div className="booking-checks" style={{ display: "inline-flex", flexDirection: "column", gap: "14px", marginBottom: "32px", textAlign: "left" }}>
                {[
                  "Free estimates — no obligation",
                  "Fresh sod cut daily",
                  "Pickup & delivery available",
                  "Hablamos Español",
                  "Estimate by phone or text",
                  "Bring measurements for fastest estimate",
                ].map((check) => (
                  <div key={check} className="booking-check">
                    <span className="ico">
                      <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {check}
                  </div>
                ))}
              </div>
              <div className="booking-phones">
                <a href="tel:7204358409" className="btn btn-primary" id="booking-call-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call (720) 435-8409
                </a>
                <a href="sms:7204358409" className="btn btn-secondary" id="booking-text-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Text (720) 435-8409
                </a>
                <a href="https://maps.google.com/?q=5250+W+53rd+Pl,+Arvada,+CO+80002" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="booking-directions-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/Logos/image.png" alt="Joscar Turf — Fresh Sod Denver" />
              <p>
                Denver&apos;s #1 source for farm-fresh sod. Kentucky Bluegrass &amp; Fescue pickup and delivery available every day across the greater Denver metro.
              </p>
              {/* Address Block */}
              <div style={{ marginTop: '4px', padding: '14px 16px', background: 'rgba(46,216,67,.08)', borderRadius: '10px', border: '1px solid rgba(46,216,67,.2)' }}>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--g400)', marginBottom: '6px', fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  Pickup Location
                </strong>
                <a
                  href="https://maps.google.com/?q=5250+W+53rd+Pl,+Arvada,+CO+80002"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--white)', fontSize: '.95rem', lineHeight: 1.5 }}
                >
                  5250 W 53rd Pl<br />Arvada, CO 80002
                </a>
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#gallery">Our Work / Gallery</a></li>
                <li><a href="#service-area">Service Area</a></li>
                <li><a href="#booking">Free Estimate</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact Us</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href="tel:7204358409" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call Now
                </a>
                <a href="sms:7204358409" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center", borderColor: "rgba(255,255,255,.4)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Text Us
                </a>
                <a href="https://maps.google.com/?q=5250+W+53rd+Pl,+Arvada,+CO+80002" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center", borderColor: "rgba(255,255,255,.4)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  Directions
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Joscar Turf. All rights reserved. Fresh Sod Pickup &amp; Delivery — Denver, CO. | 5250 W 53rd Pl, Arvada, CO 80002</p>
          </div>
        </div>
      </footer>
    </>
  );
}

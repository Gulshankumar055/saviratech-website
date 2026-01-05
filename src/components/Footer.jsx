import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Newsletter subscription logic
  };

  return (
    <footer className="footer">
      <div className="container">

        {/* TOP */}
        <div className="footer-top">

          {/* ABOUT */}
          <div className="footer-about">
            <h3 className="footer-logo">Saviratech</h3>
            <p>
              Go-to platform for CRM tools and resources: wide range of products,
              from video lectures and professional guides to advanced tools
              designed to streamline your workflow.
            </p>
          </div>

          {/* SHOP */}
          <div className="footer-links">
            <h4>SHOP</h4>
            <a href="#">Guides</a>
            <a href="#">Video Lectures</a>
            <a href="#">Collections</a>
            <a href="#">Shop All</a>
          </div>

          {/* COMPANY */}
          <div className="footer-links">
            <h4>COMPANY</h4>
            <a href="#">Services</a>
            <a href="#">Case Studies</a>
            <a href="#">Newsroom</a>
            <a href="#">Contact</a>
          </div>

          {/* NEWSLETTER */}
          <div className="footer-newsletter">
            <h3>Stay Up to Date with New Releases</h3>
            <p>
              Get notified about new updates, products, tips and tutorials.
              No spam. You can always unsubscribe.
            </p>

            <div className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
          </div>

        </div>

        <hr />

        {/* MIDDLE */}
        <div className="footer-middle">
          <div className="footer-selectors">
            <select className="currency">
              <option>CAD $</option>
              <option>USD $</option>
              <option>INR ₹</option>
            </select>

            <select className="languge">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className="footer-payments">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" />
          </div>

          <div className="footer-social">
            <a href="#">X</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>
        </div>

        <hr />

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Saviratech. Powered by Shopify</p>

          <div className="footer-bottom-links">
            <a href="#">About</a>
            <a href="#">Case Studies</a>
            <a href="#">Refund Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Service</a>
          </div>
        </div>

      </div>
      
      <div 
        id="backToTop" 
        className="backToTop"
        style={{
          opacity: showButton ? 1 : 0,
          visibility: showButton ? 'visible' : 'hidden'
        }}
      >
        <button className='button_wrap' onClick={scrollToTop} title="Back to Top">
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 15L12 10L7 15" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    
    </footer>
  );
}
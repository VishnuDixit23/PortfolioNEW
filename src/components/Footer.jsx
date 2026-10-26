import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="c-space pt-8 pb-4 gradient-divider-top flex justify-between items-center flex-wrap gap-5">
        <div className="flex gap-2" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
          <a
            href="https://github.com/VishnuDixit23"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link w-10 h-10 rounded-xl glass flex items-center justify-center"
          >
            <img src="/assets/github.svg" alt="github" className="w-4 h-4 opacity-70" />
          </a>

          <a
            href="https://x.com/dixitvishnu23"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link w-10 h-10 rounded-xl glass flex items-center justify-center"
          >
            <img src="/assets/x.svg" alt="twitter" className="w-4 h-4 opacity-70" />
          </a>

          <a
            href="https://instagram.com/dixitvishnu23"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link w-10 h-10 rounded-xl glass flex items-center justify-center"
          >
            <img src="/assets/instagram.svg" alt="instagram" className="w-4 h-4 opacity-70" />
          </a>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Vishnu Dixit. All rights reserved.
        </p>
      </footer>

      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
};

export default Footer;
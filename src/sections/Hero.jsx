import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const roles = ['Full-Stack Developer', 'AI Enthusiast', 'Creative Coder'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);

  const currentRole = roles[roleIndex];
  const displayText = currentRole.slice(0, charIndex);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 90);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRole]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-greeting',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.15 }
      )
        .fromTo(
          '.hero-name',
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          '.hero-role',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.hero-desc',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.35'
        )
        .fromTo(
          '.hero-actions',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '.hero-social-row',
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=0.2'
        )
        .fromTo(
          '.hero-scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.1'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center"
      id="home"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-5">
        {/* Greeting */}
        <p className="hero-greeting text-sm sm:text-base mb-5" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
          Hi there, I'm
        </p>

        {/* Name */}
        <h1 className="hero-name hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4">
          Vishnu Dixit
        </h1>

        {/* Role with typewriter */}
        <div className="hero-role mb-7">
          <p className="hero-subtitle text-xl sm:text-2xl md:text-3xl" style={{ color: 'var(--text-secondary)' }}>
            {displayText}
            <span className="typewriter-cursor" />
          </p>
        </div>

        {/* Description */}
        <p className="hero-desc hero-description mx-auto mb-10">
          I build fast, clean web applications with modern tools.
          Focused on great UX, solid architecture, and thoughtful design.
        </p>

        {/* CTAs */}
        <div className="hero-actions flex flex-wrap items-center justify-center gap-4 mb-10">
          <a href="#projects" className="btn-primary">
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="hero-social-row flex items-center gap-3">
          <a href="https://github.com/VishnuDixit23" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
            <img src="/assets/github.svg" alt="GitHub" />
          </a>
          <a href="https://x.com/dixitvishnu23" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="X/Twitter">
            <img src="/assets/x.svg" alt="X" />
          </a>
          <a href="https://instagram.com/dixitvishnu23" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Instagram">
            <img src="/assets/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/vishnu-dixit-b3815729a" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="scroll-indicator relative" />
        <span className="text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--text-quaternary)' }}>
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;

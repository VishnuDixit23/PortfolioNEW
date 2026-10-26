import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {}, activeSection = '' }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => {
      const sectionId = item.href.replace('#', '');
      const isActive = activeSection === sectionId;

      return (
        <li key={item.id} className="nav-li nav-item">
          <a
            href={item.href}
            className={`nav-li_a relative ${isActive ? 'text-white' : 'text-neutral-400'}`}
            onClick={onClick}
          >
            {item.name}
            {isActive && (
              <span
                className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                style={{
                  background: 'var(--accent-primary)',
                  boxShadow: '0 0 8px var(--glow-primary)',
                }}
              />
            )}
          </a>
        </li>
      );
    })}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'resume', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.nav-item',
      { y: -15, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, delay: 0.4, duration: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mx-auto c-space">
          <a
            href="/"
            className="font-bold text-xl transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
          >
            Vishnu<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems activeSection={activeSection} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} activeSection={activeSection} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
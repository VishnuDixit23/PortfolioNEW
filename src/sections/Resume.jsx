import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { skills } from '../constants/index.js';

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const containerRef = useRef(null);
  const skillBarRefs = useRef([]);

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'ai', label: 'AI / LLM' },
    { key: 'language', label: 'Languages' },
    { key: 'animation', label: 'UI / 3D' },
    { key: 'database', label: 'Database' },
  ];

  const filteredSkills = activeFilter === 'all'
    ? skills
    : skills.filter((s) => s.badge === activeFilter);

  useGSAP(() => {
    gsap.from('.skills-heading', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#resume',
        start: 'top 80%',
      },
    });

    gsap.from('.skills-filter', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#resume',
        start: 'top 75%',
      },
    });

    gsap.from('.skill-card-item', {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
      clearProps: 'transform',
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 75%',
      },
    });
  }, { scope: containerRef });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    skillBarRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredSkills]);

  return (
    <section className="c-space py-24" id="resume" ref={containerRef}>
      {/* Section Header */}
      <div className="skills-heading mb-12">
        <p className="section-label">Capabilities</p>
        <h2 className="section-heading">Skills & technologies.</h2>
        <p className="section-subheading">
          The languages, frameworks, and developer tools I build with daily.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="skills-filter flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border ${
              activeFilter === f.key
                ? 'bg-white text-black border-white shadow-sm font-semibold'
                : 'bg-white/[0.04] text-neutral-300 border-white/[0.08] hover:border-white/20 hover:text-white hover:bg-white/[0.08]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {filteredSkills.map((item, index) => (
          <div key={`${item.name}-${index}`} className="skill-card-item">
            <div className="skill-card">
              <div className="flex items-start gap-4">
                <div className="skill-card-icon flex-shrink-0">
                  <img src={item.icon} alt={item.name} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`badge badge-${item.badge}`}>{item.level}</span>
                  <h3 className="skill-card-name">{item.name}</h3>
                  <p className="skill-card-desc">{item.description}</p>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ maxWidth: `${item.proficiency}%` }}
                      ref={(el) => {
                        skillBarRefs.current[index] = el;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resume Download & View Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-14">
        <a href="/assets/Resume.pdf" download="Vishnu_Dixit_Resume.pdf" className="resume-btn">
          <span>Download Resume</span>
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>

        <a
          href="/assets/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary !py-3 !px-6 !text-sm"
        >
          <span>View PDF in New Tab</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Resume;

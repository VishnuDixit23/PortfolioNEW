import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import { myProjects } from '../constants/index.js';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.projects-label', {
      y: 16,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: { trigger: '#projects', start: 'top 80%' },
    });

    gsap.from('.projects-heading', {
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: '#projects', start: 'top 78%' },
    });

    gsap.from('.project-card-item', {
      y: 48,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.projects-grid', start: 'top 75%' },
    });
  }, { scope: sectionRef });

  return (
    <section className="c-space py-24" id="projects" ref={sectionRef}>
      {/* Section Header */}
      <div className="mb-16">
        <p className="projects-label section-label">Work</p>
        <h2 className="projects-heading section-heading">Selected projects.</h2>
        <p className="projects-heading section-subheading">
          A few things I've built that I'm proud of.
        </p>
      </div>

      {/* Project Grid */}
      <div className="projects-grid grid lg:grid-cols-2 grid-cols-1 gap-6">
        {myProjects.map((project, index) => (
          <div key={index} className="project-card-item">
            <div className="project-card">
              {/* Media */}
              <div className="project-card-media">
                <video
                  src={project.texture}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>

              {/* Content */}
              <div className="project-card-content">
                {/* Logo */}
                <div className="project-card-logo" style={project.logoStyle}>
                  <img src={project.logo} alt={project.title} />
                </div>

                {/* Title */}
                <h3 className="project-card-title">{project.title}</h3>

                {/* Description */}
                <p className="project-card-desc">{project.desc}</p>

                {/* Tags */}
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag.id} className="project-tag">
                      <img src={tag.path} alt={tag.name} />
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    className="project-card-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                  {project.github && (
                    <a
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 transition-all duration-200"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/assets/github.svg" alt="GitHub" className="w-3.5 h-3.5 opacity-70" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
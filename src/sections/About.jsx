import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const techGridItems = [
  { name: 'React / Next.js', icon: '/assets/react.svg' },
  { name: 'Node.js / Express', icon: '/assets/nodejs.svg' },
  { name: 'Generative AI', icon: '/assets/generative.png' },
  { name: 'Agentic AI', icon: '/assets/generative.png' },
  { name: 'JS / TypeScript', icon: '/assets/js.svg' },
  { name: 'THREE.js', icon: '/assets/three.svg' },
  { name: 'GSAP', icon: '/assets/gsap.jpg' },
  { name: 'Tailwind CSS', icon: '/assets/tailwindcss.png' },
  { name: 'MongoDB', icon: '/assets/mongodb.svg' },
];

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const sectionRef = useRef(null);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('dixitvishnu57@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  useGSAP(() => {
    gsap.from('.about-label', {
      y: 16,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: { trigger: '#about', start: 'top 80%' },
    });

    gsap.from('.about-heading', {
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: '#about', start: 'top 78%' },
    });

    gsap.from('.about-card', {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '#about', start: 'top 65%' },
    });
  }, { scope: sectionRef });

  return (
    <section className="c-space py-24" id="about" ref={sectionRef}>
      {/* Section Header */}
      <div className="mb-16">
        <p className="about-label section-label">About</p>
        <h2 className="about-heading section-heading">A bit about me.</h2>
        <p className="about-heading section-subheading">
          Full-stack developer building things that matter.
        </p>
      </div>

      {/* Balanced Bento Grid: Row 1 = 3 equal cards, Row 2 = 2 cards (2 cols + 1 col) */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {/* Card 1 — Intro */}
        <div className="about-card">
          <div className="about-card-inner">
            <div className="card-media">
              <img
                src="assets/edit-183.jpg"
                alt="Vishnu Dixit"
                loading="lazy"
                className="cover-img w-full h-[220px] object-cover"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Hi, I'm Vishnu Dixit
                </h3>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/[0.06] text-neutral-300 border border-white/[0.08]">
                  Full-Stack
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                A full-stack developer proficient in both frontend and backend, creating dynamic, responsive, and AI-powered web experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 — Tech Stack Blueprint 3x3 Grid */}
        <div className="about-card">
          <div className="about-card-inner">
            <div className="card-media h-[220px] bg-[#0c0d12] border border-white/[0.08] rounded-xl overflow-hidden p-0">
              <div className="grid grid-cols-3 grid-rows-3 h-full w-full">
                {techGridItems.map((tech, idx) => {
                  const isRightBorder = idx % 3 !== 2;
                  const isBottomBorder = idx < 6;
                  return (
                    <div
                      key={tech.name}
                      className={`flex flex-col items-center justify-center p-1.5 transition-all duration-300 hover:bg-white/[0.05] group cursor-default ${
                        isRightBorder ? 'border-r border-white/[0.08]' : ''
                      } ${isBottomBorder ? 'border-b border-white/[0.08]' : ''}`}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="group-hover:scale-110 transition-transform duration-300 mb-1"
                        style={{
                          width: '22px',
                          height: '22px',
                          minWidth: '22px',
                          minHeight: '22px',
                          maxWidth: '22px',
                          maxHeight: '22px',
                          objectFit: 'contain',
                        }}
                      />
                      <span className="text-[10px] md:text-[11px] font-medium text-neutral-300 group-hover:text-white transition-colors text-center leading-tight truncate max-w-full px-1">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Tech Stack
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust, scalable, and AI-powered applications.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 — Location & Timezone (Jaipur / Gurugram) */}
        <div className="about-card">
          <div className="about-card-inner">
            {/* Visual Location & Timezone Area */}
            <div className="card-media relative h-[220px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0c1017] via-[#090d13] to-[#06080c] border border-white/[0.06] flex flex-col items-center justify-center p-4 text-center">
              {/* Radar Grid Circles */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-48 h-48 rounded-full border border-blue-500/40" />
                <div className="absolute w-32 h-32 rounded-full border border-blue-500/30" />
                <div className="absolute w-16 h-16 rounded-full border border-blue-500/30" />
              </div>

              {/* Pulsing Beacon */}
              <div className="relative flex items-center justify-center mb-3 z-10">
                <span className="absolute w-10 h-10 rounded-full bg-emerald-500/20 animate-ping" />
                <span className="absolute w-6 h-6 rounded-full bg-emerald-500/30 animate-pulse" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
              </div>

              {/* Dual Location Pill */}
              <div className="z-10 flex items-center gap-2 text-xs font-mono text-neutral-200 bg-white/[0.06] px-3 py-1.5 rounded-full border border-white/[0.1] mb-2.5 backdrop-blur-md">
                <span className="text-blue-400 font-semibold">Jaipur</span>
                <span className="text-neutral-500">/</span>
                <span className="text-emerald-400 font-semibold">Gurugram</span>
                <span className="text-neutral-400">, IN</span>
              </div>

              {/* Live IST Clock */}
              <div className="z-10 flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 border border-white/[0.05]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-medium text-neutral-200">
                  {currentTime || 'IST (UTC +5:30)'}
                </span>
                <span className="text-[10px] text-neutral-400">IST</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Jaipur / Gurugram, India
                </h3>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Remote Ready
                </span>
              </div>
              <p className="text-xs font-medium text-blue-400 mb-2">
                Flexible with Global Time Zones
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                Based in India with seamless overlap for US, European, and Asian collaboration. Quick turnaround with prompt async & sync workflows.
              </p>
              <a
                href="#contact"
                className="btn-primary w-full justify-center !py-2.5 !text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 — Passion for Building (Spans 2 columns on xl screens) */}
        <div className="about-card xl:col-span-2">
          <div className="about-card-inner !flex-col md:!flex-row md:items-center gap-6">
            <div className="card-media md:w-1/2 flex-shrink-0">
              <img
                src="assets/grid3.png"
                alt="Coding"
                className="w-full h-[200px] object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                Engineering Philosophy
              </span>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Passion for Building & Craftsmanship
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I love solving challenging problems and architecting elegant digital solutions through clean code. Programming isn't just my profession — it's a craft centered on performance, accessibility, and delightful user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 — Email & Direct Connect (Spans 1 column on xl screens) */}
        <div className="about-card xl:col-span-1">
          <div className="about-card-inner items-center justify-center text-center !gap-4">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
              Get In Touch
            </span>
            <p className="text-xs text-neutral-400 max-w-xs">
              Have an idea, project, or role? Feel free to copy my email or reach out directly.
            </p>
            <button
              className="flex items-center gap-3 cursor-pointer group px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 transition-all duration-300"
              onClick={handleCopy}
              title="Click to copy email address"
            >
              <img
                src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                alt="copy"
                className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-sm md:text-base font-medium transition-colors" style={{ color: 'var(--text-primary)' }}>
                dixitvishnu57@gmail.com
              </span>
            </button>
            {hasCopied ? (
              <span className="text-xs text-emerald-400 font-medium">Copied to clipboard!</span>
            ) : (
              <span className="text-[11px] text-neutral-500">Click to copy address</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
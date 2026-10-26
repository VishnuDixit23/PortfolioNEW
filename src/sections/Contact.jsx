import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();
  const containerRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dixitvishnu57@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Vishnu Dixit',
          from_email: form.email,
          to_email: 'dixitvishnu57@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({ name: '', email: '', message: '' });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  useGSAP(() => {
    gsap.from('.contact-header', {
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
      },
    });

    gsap.from('.contact-col-left', {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      delay: 0.1,
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 78%',
      },
    });

    gsap.from('.contact-col-right', {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 78%',
      },
    });
  }, { scope: containerRef });

  return (
    <section className="c-space py-24" id="contact" ref={containerRef}>
      {alert.show && <Alert {...alert} />}

      {/* Section Header */}
      <div className="contact-header mb-14">
        <p className="section-label">Connect</p>
        <h2 className="section-heading">Let's talk.</h2>
        <p className="section-subheading">
          Whether you're looking to build a new product, improve an existing platform, or discuss engineering opportunities — I'd love to hear from you.
        </p>
      </div>

      {/* Grid: Left Touchpoints + Right Form */}
      <div className="contact-grid grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Info & Socials */}
        <div className="contact-col-left lg:col-span-5 flex flex-col gap-5">
          {/* Availability Card */}
          <div className="contact-info-card p-6 rounded-2xl bg-[#111113] border border-white/[0.08]">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-300 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Available for new projects
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Let's build something exceptional.</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Open to full-stack roles, freelance contracts, and collaborative experiments. Feel free to shoot a message anytime.
            </p>
          </div>

          {/* Email Quick-Copy Card */}
          <div className="contact-info-card p-6 rounded-2xl bg-[#111113] border border-white/[0.08]">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-3">Direct Email</p>
            <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-sm font-mono text-neutral-200 truncate">
                dixitvishnu57@gmail.com
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-neutral-200 transition-colors cursor-pointer flex items-center gap-1.5"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-white">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location & Timezone Card */}
          <div className="contact-info-card p-6 rounded-2xl bg-[#111113] border border-white/[0.08]">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">Location & Timezone</p>
            <p className="text-sm text-neutral-200 font-medium">Jaipur / Gurugram, India</p>
            <p className="text-xs text-neutral-400 mt-1">IST (UTC +5:30) • Flexible for remote collaboration worldwide</p>
          </div>

          {/* Social Links Row */}
          <div className="contact-info-card p-6 rounded-2xl bg-[#111113] border border-white/[0.08]">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-3">Connect Elsewhere</p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/VishnuDixit23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <img src="/assets/github.svg" alt="GitHub" className="w-4 h-4 opacity-70 hover:opacity-100" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishnu-dixit-b3815729a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] flex items-center justify-center transition-all text-neutral-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://x.com/dixitvishnu23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] flex items-center justify-center transition-all"
                aria-label="X"
              >
                <img src="/assets/x.svg" alt="X" className="w-4 h-4 opacity-70 hover:opacity-100" />
              </a>
              <a
                href="https://instagram.com/dixitvishnu23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <img src="/assets/instagram.svg" alt="Instagram" className="w-4 h-4 opacity-70 hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Form Card */}
        <div className="contact-col-right lg:col-span-7">
          <div className="contact-card p-7 sm:p-9 md:p-10 bg-[#111113] border border-white/[0.08] rounded-3xl shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-1">Send a Message</h3>
            <p className="text-sm text-neutral-400 mb-8">
              Fill out the details below and I'll get back to you promptly.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-5">
              <div className="form-field">
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="e.g. Alex Morgan"
                  id="contact-name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="alex@company.com"
                  id="contact-email"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input resize-y min-h-[120px]"
                  placeholder="Tell me about your project, idea, or role..."
                  id="contact-message"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="submit-btn"
                >
                  {loading ? (
                    <>
                      <div className="spinner" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
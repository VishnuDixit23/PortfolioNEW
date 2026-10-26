import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null);
  const nameRef = useRef(null);

  // Simulate loading progress from 0 to 100 over ~2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment by a random amount between 1-4 to feel organic
        const increment = Math.random() * 3 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // When progress reaches 100, wait 500ms then play exit animation
  useEffect(() => {
    if (progress < 100) return;

    const timeout = setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      tl.to(nameRef.current, {
        scale: 1.2,
        duration: 0.5,
        ease: "power2.inOut",
      }).to(
        loaderRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "-=0.2"
      );
    }, 500);

    return () => clearTimeout(timeout);
  }, [progress, onComplete]);

  return (
    <div ref={loaderRef} className="page-loader">
      <h1 ref={nameRef} className="loader-name">
        Vishnu Dixit
      </h1>
      <div className="loader-bar-track">
        <div
          className="loader-bar-fill"
          style={{ width: `${Math.round(progress)}%` }}
        />
      </div>
    </div>
  );
};

export default PageLoader;

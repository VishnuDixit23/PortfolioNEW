import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SectionDivider = () => {
  const dividerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      dividerRef.current,
      {
        opacity: 0,
        scaleX: 0,
      },
      {
        opacity: 0.3,
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <div className="c-space my-0">
      <div className="max-w-7xl mx-auto">
        <div ref={dividerRef} className="section-divider" />
      </div>
    </div>
  );
};

export default SectionDivider;

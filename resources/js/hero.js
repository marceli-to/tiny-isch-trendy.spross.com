import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Create main timeline for hero animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "[data-hero-section]",
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: true,
      pinSpacing: true,
    }
  });

  // Headline animation
  tl.to("[data-hero-headline]", {
    scale: 0.4,
    y: "-20vh",
    duration: 1,
    ease: "none"
  })

  // Image animation
  .to("[data-hero-image]", {
    y: "-40vh",
    duration: 1,
    ease: "none"
  }, "<")

  // Badge animation
  .to("[data-hero-badge]", {
    y: "5vh",
    duration: 1,
    ease: "none"
  }, "<");
  
});
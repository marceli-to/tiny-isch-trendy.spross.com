import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded', () => {

  gsap.registerPlugin(ScrollTrigger);

  const headline = document.querySelector('[data-hero-headline]');
  const image = document.querySelector('[data-hero-image]');

  gsap.timeline({
    scrollTrigger: {
      trigger: headline,
      start: "top center", // Start when headline top hits bottom of viewport
      end: "center top",  // End when headline bottom hits top of viewport
      scrub: true,
      invalidateOnRefresh: true,
      //markers: true, // Uncomment to see trigger points
    }
  })
  .to(headline, {
    scale: 0.25,
    y: 20,
    ease: "none",
  })
  .to(image, {
    y: -20,
    ease: "none",
  }, 0);
});
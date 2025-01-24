import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded', () => {

  gsap.registerPlugin(ScrollTrigger);

  // Create main timeline for hero animation
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "[data-hero-section]",
  //     start: "top top",
  //     end: "+=50%",
  //     scrub: true,
  //     pin: true,
  //     pinSpacing: true,
  //     markers: true
  //   }
  // });

  // // Headline animation
  // tl.to("[data-hero-headline]", {
  //   scale: 0.4,
  //   top: "20px",
  //   duration: 1,
  //   ease: "none"
  // })

  // // Image animation
  // .to("[data-hero-image]", {
  //   y: "-50vh",
  //   duration: 1,
  //   ease: "none"
  // }, "<")

  // // Badge animation
  // .to("[data-hero-badge]", {
  //   y: "-20vh",
  //   duration: 1,
  //   ease: "none"
  // }, "<");

  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.hero-headline', {
    scrollTrigger: {
      trigger: '.hero-headline',
      start: 'center center',
      end: '+=700',
      scrub: true
    },
    scale: 0.4,
    duration: 1,
    transformOrigin: 'left bottom' // Changed from 'left top' to 'left bottom'
  });
  

});
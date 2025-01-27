import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

(function() {

  const headline = document.querySelector('[data-hero-headline]');
  const image = document.querySelector('[data-hero-image]');
  const badge = document.querySelector('[data-hero-badge]');

  const getAnimationValues = () => {
    const width = window.innerWidth;
    if (width < 640) { // Mobile
      return {
        headlineScale: .4,
        badgeY: 80,
      };
    } 
    else if (width <= 768) { // Tablet
      return {
        headlineScale: .2,
        badgeY: 80,
      };
    } 
    else if (width < 1024) { // Small Desktop
      return {
        headlineScale: .2,
        badgeY: 120,
      };
    } 
    else { // Large Desktop
      return {
        headlineScale: .28,
        badgeY: 160,
      };
    }
  };

  const run = () => {

    const values = getAnimationValues();
    gsap.timeline({
      scrollTrigger: {
        trigger: headline,
        start: "top center", // Start when headline top hits center of viewport
        end: "center top",  // End when headline center hits top of viewport
        scrub: true,
        invalidateOnRefresh: true,
      }
    })
    .to(headline, {
      scale: values.headlineScale,
      y: -20,
      ease: "none",
    })
    .to(image, {
      y: -20,
      ease: "none",
    }, 0)
    .to(badge, {
      y: values.badgeY,
      ease: "none",
    }, 0);
  };

  document.addEventListener('DOMContentLoaded', run);

})();


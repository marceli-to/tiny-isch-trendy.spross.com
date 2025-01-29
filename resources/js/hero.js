import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

(function() {

  const headline = document.querySelector('[data-hero-headline]');
  const image = document.querySelector('[data-hero-image]');
  const badge = document.querySelector('[data-hero-badge]');

  const getAnimationValues = () => {
    const width = window.innerWidth;
    if (width < 640) { // below sm
      return {
        start: "top 70%",
        headlineScale: .4,
        badgeY: 30,
      };
    } 
    else if (width <= 768) { // below md
      return {
        start: "top 90%",
        headlineScale: .32,
        badgeY: 80,
      };
    } 
    else if (width < 1024) { // below lg
      return {
        start: "top 90%",
        headlineScale: .32,
        badgeY: 160,
      };
    } 
    else if (width < 1280) { // below xl
      return {
        start: "top 90%",
        headlineScale: .28,
        badgeY: 160,
      };
    }
    else if (width < 1536) { // below 2xl
      return {
        start: "top 90%",
        headlineScale: .26,
        badgeY: 160,
      };
    }
    else { // after 2xl
      return {
        headlineScale: 0.26,
        badgeY: 160,
      };
    }
  };

  const run = () => {

    const values = getAnimationValues();
    gsap.timeline({
      scrollTrigger: {
        trigger: image,
        start: values.start, // Starts when headline's top edge hits 90% of viewport
        end: "top 40%",    // Ends when headline's top edge hits 40% of viewport
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


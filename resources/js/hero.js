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
        headlineScale: .35,
        badgeY: 80,
      };
    } 
    else if (width <= 768) { // below md
      return {
        headlineScale: .2,
        badgeY: 80,
      };
    } 
    else if (width < 1024) { // below lg
      return {
        headlineScale: .2,
        badgeY: 120,
      };
    } 
    else if (width < 1280) { // below xl
      return {
        headlineScale: .28,
        badgeY: 160,
      };
    }
    else if (width < 1536) { // below 2xl
      return {
        headlineScale: .26,
        badgeY: 160,
      };
    }
    else { // after 2xl
      return {
        headlineScale: .2,
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


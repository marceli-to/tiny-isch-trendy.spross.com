import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

document.addEventListener('DOMContentLoaded', function() {
  Fancybox.bind('[data-fancybox]', {
    hideScrollbar: false,
    Images: {
      zoom: false,
    },
    Thumbs: false,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ['close'],
      },
    },
  });
});
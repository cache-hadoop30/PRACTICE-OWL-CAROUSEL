$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
        dots: false
      },

      694: {
        items: 2,
        dots: true
      },
      960: {
        items: 3,
        dots: true
      }
    }
  });
});

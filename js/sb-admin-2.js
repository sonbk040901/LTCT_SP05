// (function showDetail() {
//   if (document.getElementById('incomeRadio').checked) {

//     // $("#TableWithProduct").removeClass('d-none');

//   } else if (document.getElementById('productRadio').checked) {
//     $("#ChartWithProduct").removeClass('d-none');
//     $("#ChartWithIncome").addClass('d-none');
//     $("#TableWithIncome").removeClass('d-none');
//     // $("#TableWithProduct").addClass('d-none');
//   } else {
//     $("#ChartWithProduct").addClass('d-none');
//     $("#ChartWithIncome").addClass('d-none');
//     $("#TableWithIncome").addClass('d-none');
//   }
// })
const form = document.querySelector("form");

form.addEventListener(
  "submit",
  (event) => {
    const dataForm = new FormData(form);
    let output = "";
    for (const entry of dataForm) {
      output = `${output}${entry[1]}`;
    }
    if (output == "incomeRadio") {
      $("#ChartWithProduct").addClass('d-none');
      $("#ChartWithIncome").removeClass('d-none');
      $("#TableWithIncome").removeClass('d-none');
      $("#TableWithProduct").addClass('d-none');
    } else {
      $("#ChartWithProduct").removeClass('d-none');
      $("#ChartWithIncome").addClass('d-none');
      $("#TableWithIncome").addClass('d-none');
      $("#TableWithProduct").removeClass('d-none');
    }

    event.preventDefault();
  },
  false
);
(function ($) {
  "use strict"; // Start of use strict
  $("#ChartWithProduct").addClass('d-none');
  $("#ChartWithIncome").addClass('d-none');
  $("#TableWithIncome").addClass('d-none');
  $("#TableWithProduct").addClass('d-none');
  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });
  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict

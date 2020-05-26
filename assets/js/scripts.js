$(document).ready(function($) {
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop(),
          navbar = $('#mainNav');
      if (scrollPos >10) {
        navbar.addClass('navbar-scrolled');
      } else {
        navbar.removeClass('navbar-scrolled');
      }
    });
  });
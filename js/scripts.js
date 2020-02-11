$(document).ready(function() {
  $('.main__container-slider').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
    arrows: false
  });
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header__nav__outer').outerHeight();

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('.header__nav__outer')
      .removeClass('nav-down')
      .addClass('nav-up');
    $('.nav__links').removeClass('nav__links--toggle');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('.header__nav__outer')
        .removeClass('nav-up')
        .addClass('nav-down');
    }
  }

  lastScrollTop = st;
}

// Toggle nav with burger

function toggle() {
  const element = document.getElementById('nav__links');
  element.classList.toggle('nav__links--toggle');
}

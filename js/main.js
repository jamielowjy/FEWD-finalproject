/* global $, windowHeight */
$(document).ready(function (e) {
  // set splash to height of viewport
  function setHeight () {
    windowHeight = $(window).innerHeight()
    $('#splash').css('min-height', windowHeight)
  }
  setHeight()

  $(window).resize(function () {
    setHeight()
  })

  // fade splash after scroll
  var intro = $('.splash-intro')
  var introHeight = intro.height()

  function scrollOpacity () {
    var i = $(window).scrollTop()
    var speed = 1 - i / introHeight
    intro.css('opacity', speed)
  }

  $(window).scroll(function () {
    scrollOpacity()
  })

  // smooth scrolling on anchor links
  $('a[href^="#"]').click(function (e) {
    e.preventDefault()
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800)
  })

  // scroll reveal
  window.sr = ScrollReveal()
  sr.reveal('.intro, #nav', {
    origin: 'bottom',
    duration: '1000',
    distance: '15px',
    easing: 'ease',
    scale: 1
  })
  sr.reveal('.work-thumbnail', { duration: 1500 }, 80)
  sr.reveal('.detail', { duration: 800 }, 80)
})

// follow mouse cursor animation http://www.onextrapixel.com/2014/04/09/create-an-interactive-moving-backgroundobject-that-reacts-to-viewers-cursor/
$('.movej').interactive_bg({
  strength: 25,
  scale: 1.05,
  animationSpeed: '100ms',
  contain: true,
  wrapContent: true
})

$(window).resize(function () {
  $('.movej > .ibg-bg').css({
    width: $(window).outerWidth(),
    height: $(window).outerHeight()
  })
})

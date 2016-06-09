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
  $('a').click(function (e) {
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

// splash colour spectrum animation
spectrum()
function spectrum () {
  // RANDOM COLOURS WOOHOO
  // var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
  // BLUE HUES ONLY
  h = 230
  s = Math.floor(Math.random() * 100)
  l = Math.floor(Math.random() * 25)
  var hue = 'hsl(' + h + ', ' + s + '%, ' + l + '%)'
  $('#splash').animate({ backgroundColor: hue }, 3000)
  spectrum()
}

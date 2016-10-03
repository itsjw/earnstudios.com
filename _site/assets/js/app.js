$(document).foundation();

// Scroll
$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
    return false;
  }
}
});

// Carousel
$('.carousel').flickity({
  // options
  contain: true,
  setGallerySize: false,
  wrapAround: true,
  autoPlay: true,
  prevNextButtons: true,
  pageDots: false,
  arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
});


// Tranistions
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

// Maps
/*
$('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
});

$( ".maps" ).mouseleave(function() {
  $('.maps iframe').css("pointer-events", "none"); 
});
*/


/*
$('#map').click(function () {
    $('#map').css("pointer-events", "auto");
});

$( "#map" ).mouseleave(function() {
  $('#map').css("pointer-events", "none"); 
});
*/